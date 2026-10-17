import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Upstash Redis sliding-window rate limiter
// Required Environment Variables:
// - UPSTASH_REDIS_REST_URL: The REST URL from Upstash Console
// - UPSTASH_REDIS_REST_TOKEN: The REST Token from Upstash Console
let upstashRatelimit = null;

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    const redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
    upstashRatelimit = new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(15, '60 s'),
        analytics: true,
        prefix: 'codiora:ratelimit:chat',
    });
}

// Fallback in-memory rate limiting map: ip -> { count, resetTime }
const memoryRateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 15;

function isMemoryRateLimited(ip) {
    const now = Date.now();
    const record = memoryRateLimitMap.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW };

    if (now > record.resetTime) {
        record.count = 1;
        record.resetTime = now + RATE_LIMIT_WINDOW;
        memoryRateLimitMap.set(ip, record);
        return false;
    }

    if (record.count >= MAX_REQUESTS_PER_WINDOW) {
        return true;
    }

    record.count++;
    memoryRateLimitMap.set(ip, record);
    return false;
}

// Extract client IP from trusted proxy headers (Cloudflare, Vercel, Reverse Proxy)
function getTrustedClientIp(req) {
    const cfIp = req.headers['cf-connecting-ip'];
    if (typeof cfIp === 'string' && cfIp.trim()) return cfIp.trim();

    const realIp = req.headers['x-real-ip'];
    if (typeof realIp === 'string' && realIp.trim()) return realIp.trim();

    const forwarded = req.headers['x-forwarded-for'];
    if (typeof forwarded === 'string' && forwarded.trim()) {
        return forwarded.split(',')[0].trim();
    }

    return req.socket.remoteAddress || '127.0.0.1';
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // IP Extraction for Rate Limiting via trusted headers
    const ip = getTrustedClientIp(req);

    if (upstashRatelimit) {
        try {
            const { success, limit, remaining, reset } = await upstashRatelimit.limit(ip);
            res.setHeader('X-RateLimit-Limit', limit.toString());
            res.setHeader('X-RateLimit-Remaining', remaining.toString());
            res.setHeader('X-RateLimit-Reset', reset.toString());

            if (!success) {
                return res.status(429).json({ message: 'Too many requests. Please wait a moment before sending another message.' });
            }
        } catch (error) {
            console.error('Upstash rate limit check error:', error);
            // Fall back to memory limiter on network error
            if (isMemoryRateLimited(ip)) {
                return res.status(429).json({ message: 'Too many requests. Please wait a moment before sending another message.' });
            }
        }
    } else {
        if (isMemoryRateLimited(ip)) {
            return res.status(429).json({ message: 'Too many requests. Please wait a moment before sending another message.' });
        }
    }


    const { messages } = req.body || {};

    // Input Validation
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ message: 'Invalid request: "messages" must be a non-empty array.' });
    }

    if (messages.length > 20) {
        return res.status(400).json({ message: 'Conversation history exceeds maximum limit (20 messages).' });
    }

    for (const msg of messages) {
        if (!msg || typeof msg.text !== 'string' || msg.text.trim().length === 0) {
            return res.status(400).json({ message: 'Each message must have a non-empty text string.' });
        }
        if (msg.text.length > 2000) {
            return res.status(400).json({ message: 'Message length exceeds maximum allowable limit (2000 chars).' });
        }
    }
    
    // Gemini API Key from environment variables
    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) {
        return res.status(500).json({ text: "AI service is currently not configured. Please contact contact@codioratech.com." });
    }
    
    const systemPrompt = `You are Codi AI, the executive artificial intelligence assistant for Codiora Tech.

    PRIMARY ROLE & TONE:
    - You represent Codiora Tech, an elite software engineering, AI automation, and web development agency.
    - Your tone must be warm, highly professional, articulate, and enterprise-grade.
    - Provide medium-length, well-structured, and comprehensive answers (typically 2 to 4 clear sentences or neat bullet points when explaining services, pricing, or technical processes).
    - NEVER give ultra-short 1-sentence answers (unless it's a simple greeting), but avoid overwhelming walls of text.

    STRICT SCOPE & OFF-TOPIC RULE:
    - You MUST ONLY answer questions related to Codiora Tech, its services, tech stack, engineering process, pricing, careers, and contact channels.
    - If the user asks ANY off-topic or general knowledge questions (e.g. general recipes, math homework, weather, politics, personal questions, or other companies), politely decline and redirect them back:
      "I am specialized specifically to assist with Codiora Tech's engineering and AI services. How can we help build or scale your web, mobile, or AI project today?"

    FORMATTING:
    - Use clean Markdown (**bold text**, bullet points, links) to make answers structured, scannable, and visual.

    CORE COMPANY KNOWLEDGE:
    - **Services Offered**:
      1. **AI Automation & Intelligent Agents**: Custom LLM integrations (OpenAI, Gemini, Claude), RAG pipelines, workflow automation, autonomous AI bots.
      2. **Full-Stack Enterprise Applications**: Scalable SaaS platforms, custom dashboards, API microservices built with Next.js, React, Node.js, and PostgreSQL/MongoDB.
      3. **Data Extraction & Web Scraping**: High-throughput automated scrapers, proxy management, CAPTCHA/Cloudflare bypass, structured lead generation pipelines.
      4. **Mobile App Innovation**: Cross-platform iOS & Android mobile apps built with Flutter and React Native.
      5. **Immersive UI/UX Design**: Figma prototypes, design systems, and user experience optimization.
      6. **DevOps & Cloud**: AWS/GCP cloud infrastructure, Docker, CI/CD pipelines.
      7. **Growth Marketing**: SEO optimization, conversion rate optimization (CRO), data analytics.
    
    - **Pricing & Consultation**:
      - We offer flexible, project-based pricing or monthly retainer models tailored to project scope.
      - Clients can request a **Free Technical Audit & Consultation** via our Contact page.

    - **Careers & Internships**:
      - Openings for Full-Stack Engineers, AI Specialists, Product Designers, and our **Next-Gen Internship Incubator** program.

    - **Direct Contact Details**:
      - **Email**: contact@codioratech.com
      - **Phone**: +880 9611 317 892
      - **WhatsApp**: [+880 1772-445954](https://wa.me/8801772445954)
      - **Location**: Dhaka, Bangladesh

    Greetings:
    - For greetings ('hi', 'hello'), respond warmly: "Hi there! 👋 I'm **Codi**, AI Assistant at Codiora Tech. How can I assist with your software engineering, web, or AI project today?"`;

    const structuredMessages = [];
    
    for (let msg of messages) {
        if (msg.sender === 'user') {
            structuredMessages.push({ role: 'user', parts: [{ text: msg.text }] });
        } else {
            structuredMessages.push({ role: 'model', parts: [{ text: msg.text }] });
        }
    }

    try {
        const MAX_RETRIES = 3;
        let attempt = 0;
        let data = null;
        let response = null;

        while (attempt < MAX_RETRIES) {
            response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    system_instruction: {
                        parts: { text: systemPrompt }
                    },
                    contents: structuredMessages,
                    generationConfig: {
                        temperature: 0.5,
                        maxOutputTokens: 800,
                    }
                })
            });

            data = await response.json();
            
            if (response.ok) {
                break;
            }
            
            // Check if it's a 503 error (high demand)
            if (data?.error?.code === 503) {
                attempt++;
                if (attempt >= MAX_RETRIES) break;
                // Wait before retrying (exponential backoff: 1s, 2s)
                await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, attempt - 1)));
            } else {
                break; // Break immediately for other fast-failing errors
            }
        }
        
        if (!response.ok) {
            console.error("API error response:", data);
            throw new Error(data.error?.message || 'Error from Gemini API');
        }
        
        const botReply = data.candidates[0].content.parts[0].text;
        
        res.status(200).json({ text: botReply });
    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ text: "I'm having trouble connecting to my brain right now. Please try again later or contact us directly at contact@codioratech.com." });
    }
}

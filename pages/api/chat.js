export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { messages } = req.body;
    
    // Gemini API Key from environment variables
    const API_KEY = process.env.GEMINI_API_KEY;
    
    const systemPrompt = `You are Codi AI, the official AI assistant for Codiora Tech, an elite Digital Transformation & Frontier Tech Company. 
    You must always respond in an extremely professional, premium, and sophisticated corporate tone. Your language should exude exclusivity, deep expertise, and high-end engineering quality. Avoid overly casual slang. Use polite, consultative, and business-focused language.
    Always format your responses beautifully in Markdown using bullet points and bold text where appropriate to enhance readability.
    
    Here is the company knowledge base you MUST use to answer user queries:
    - Web Architecture: We engineer high-performance, enterprise-grade web applications using the MERN Stack and Next.js, specializing in global scalability and robust security architectures.
    - Mobile Innovation: We craft flawless, cross-platform mobile experiences with native-level performance using Flutter & React Native.
    - Immersive UI/UX: We design award-winning, pixel-perfect interfaces through deep user research, wireframing, and interactive Figma prototyping.
    - DevOps & Cloud: We architect bulletproof infrastructures using AWS, Docker, and Kubernetes for auto-scaling and unparalleled security.
    - AI & Automation: We integrate custom AI Agents, intelligent Chatbots, and automated workflows using cutting-edge OpenAI & Python technologies.
    - Growth Marketing: We drive exponential business growth through data-driven SEO, strategic Ads, and Performance Marketing.
    - Premium Consulting & Pricing: We do not operate on fixed budget constraints. We provide bespoke technological solutions meticulously tailored to our clients' strategic investments.
    - Tech Stack: Frontend (Next.js, React, Tailwind), Backend (Node.js, Go), DB (PostgreSQL, MongoDB), AI (Python, PyTorch).
    - Contact Info: Email: contact@codioratech.com, Phone: +880 9611 317 892, WhatsApp: +880 1772-445954, Location: Dhaka, Bangladesh.
    - Careers: We actively recruit top-tier talent for Frontend (React/Next), Backend (Node), and UI/UX roles.

    Crucial Rule: ANY TIME you mention contacting the company or provide contact information, you MUST provide the email (contact@codioratech.com), the Phone Number (+880 9611 317 892), AND the WhatsApp link. 
    You MUST format the WhatsApp link exactly like this: [WhatsApp Us](https://wa.me/8801772445954). Do not just give the number for WhatsApp, always provide it as a clickable Markdown link.
    If asked a generic question, elegantly steer the conversation towards Codiora Tech's premium services. Keep responses concise (under 4-5 sentences when possible) but highly impactful.`;

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
        res.status(500).json({ text: "I'm having trouble connecting to my brain right now. Please try again later or contact us directly." });
    }
}

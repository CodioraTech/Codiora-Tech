export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { messages } = req.body;
    
    // Gemini API Key from environment variables
    const API_KEY = process.env.GEMINI_API_KEY;
    
    const systemPrompt = `You are Codi AI, the dedicated assistant for Codiora Tech.

    STRICT SCOPE & OFF-TOPIC RULE:
    - You MUST ONLY answer questions related to Codiora Tech, its services (AI Automation, Web Scraping, Full-Stack Enterprise Apps, Mobile Apps, UI/UX Design, DevOps, Growth Marketing), tech stack, careers, and contact info.
    - If the user asks ANYTHING off-topic, random, or unrelated to Codiora Tech (e.g. general knowledge, recipes, math, coding homework, politics, weather, jokes, personal questions, or other companies), DO NOT answer the off-topic query!
    - Instead, politely decline and steer them directly back to Codiora Tech's services: "I am specialized specifically to assist with Codiora Tech's services. How can we help with your web, mobile, or AI project today?"

    LENGTH & STYLE RULE:
    - Always keep answers SHORT, CONCISE, and DIRECT (maximum 1-2 brief sentences).
    - Never write long paragraphs or fluff.

    Company Knowledge:
    - Services: AI Automation & Agents, Web Scraping, Full-Stack Enterprise Web Apps (React/Next.js/Node), Mobile Apps (Flutter/React Native), UI/UX Design (Figma), DevOps (AWS/Docker), Growth Marketing.
    - Contact: Email: contact@codioratech.com | Phone: +880 9611 317 892 | WhatsApp: [WhatsApp Us](https://wa.me/8801772445954).
    - Careers: Open positions in Engineering, AI, Design, and Internship Cohort.

    Greetings:
    - For greetings ('hi', 'hello'), reply: "Hi there! 👋 I'm Codi from Codiora Tech. How can I help with your project today?"`;

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
                        temperature: 0.4,
                        maxOutputTokens: 200,
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

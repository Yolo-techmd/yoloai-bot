require("dotenv").config();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// -------------------------
// YOLOAI PERSONALITY
// -------------------------
const SYSTEM_PROMPT = `
You are Yoloai, a calm, supportive, smart female AI companion.
Your style:
- Warm and understanding.
- Encouraging and comforting.
- A bit playful, but respectful.
- Not formal, talk in a natural WhatsApp style.
- Never rude, never angry, never toxic.
`;

// -------------------------
// MAIN FUNCTION
// -------------------------
async function askYoloai(text) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: text }
    ],
    max_tokens: 300,
    temperature: 0.8
  });

  return response.choices[0]?.message?.content || "I’m thinking too hard 😅";
}

// -------------------------
// TEST MESSAGE (runs once)
// -------------------------
(async () => {
  const reply = await askYoloai("Hi Yoloai, how are you today?");
  console.log("Yoloai:", reply);
})();

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateDescription(
  name,
  category,
  ingredients,
  weight,
  tone
) {
  const prompt = `
Generate a professional e-commerce product description.

Product Name: ${name}
Category: ${category}
Ingredients: ${ingredients}
Weight: ${weight}
Tone: ${tone}

Return:
1. Product Title
2. SEO Friendly Description
3. Key Features (5 bullet points)
`;

  const response = await ai.models.generateContent({
    model: "gemini-flash-latest",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
  });

  console.log(response);

  return response.text;
}

module.exports = { generateDescription };
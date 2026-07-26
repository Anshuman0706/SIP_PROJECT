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
You are an expert Amazon and Flipkart product copywriter.

Generate a premium e-commerce product description.

Product Name: ${name}
Category: ${category}
Ingredients: ${ingredients}
Weight: ${weight}
Tone: ${tone}

IMPORTANT INSTRUCTIONS:
- Return ONLY the final product description.
- Do NOT write "Here is a professional..." or any introductory sentence.
- Do NOT use Markdown.
- Do NOT use ###, ##, **, ---, *, or backticks.
- Do NOT number the sections.
- Use plain text only.

Format exactly like this:

Product Title:
<Title>

Short Description:
<2-3 attractive paragraphs>

Key Features:
• Feature 1
• Feature 2
• Feature 3
• Feature 4
• Feature 5

Benefits:
• Benefit 1
• Benefit 2
• Benefit 3

Why Choose This Product?
<Persuasive paragraph>

SEO Keywords:
keyword1, keyword2, keyword3, keyword4, keyword5

The output should be ready to display directly on an e-commerce website.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });

  return response.text;
}

module.exports = { generateDescription };
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
You are an expert e-commerce product copywriter.

Create a UNIQUE and product-specific product description for Amazon and Flipkart.

Product details:

Product Name: ${name}
Product Category: ${category}
Key Ingredients or Features: ${ingredients || "Not provided"}
Product Weight or Size: ${weight || "Not provided"}
Writing Tone: ${tone}

IMPORTANT:

- Carefully understand the product name, category, ingredients, and features.
- Write content specifically for this product.
- Do not use the same generic sentences for different products.
- Do not make unsupported claims about health, quality, certifications, ingredients, or performance.
- Use only the information provided by the user.
- If ingredients or features are not provided, write naturally without inventing them.
- Make the wording different depending on the selected tone.
- Do not repeat the same sentence or phrase unnecessarily.
- Make the description useful, clear, attractive, and suitable for an e-commerce product page.

Return ONLY the final product description.

Do NOT include:
- Any introduction before the description
- Markdown symbols
- Hashtags
- Asterisks
- Backticks
- Numbered headings

Use this exact structure:

Product Title:
Create a short, attractive title using the product name, category, and weight when available.

Short Description:
Write 2 product-specific paragraphs. Explain what the product is and highlight only the details provided.

Key Features:
• Write 4 to 5 product-specific features based only on the provided information.
• Do not use generic features that could apply to every product.

Product Details:
Category: ${category}
Weight: ${weight || "Not provided"}
Tone: ${tone}

Why Choose This Product?
Write one persuasive paragraph explaining why this specific product may be useful or appealing. Do not make unsupported claims.

SEO Keywords:
Generate 5 relevant keywords based on the actual product name and category.

The output must be different for different products and ready to display directly on an e-commerce website.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });

  return response.text;
}

module.exports = {
  generateDescription,
};
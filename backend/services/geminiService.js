const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateDescription = async (
  name,
  category,
  ingredients,
  weight,
  tone
) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
Generate a professional ecommerce product description.

Product Name: ${name}
Category: ${category}
Ingredients: ${ingredients}
Weight: ${weight}
Tone: ${tone}

Return:
1. Product Title
2. SEO Friendly Description
3. Key Features (5 points)
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
};

module.exports = {
  generateDescription,
};
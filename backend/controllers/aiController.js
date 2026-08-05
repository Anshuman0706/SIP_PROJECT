const {
  generateDescription,
} = require("../services/geminiService");

const createFallbackDescription = (
  name,
  category,
  ingredients,
  weight,
  tone
) => {
  const productName =
    name?.trim() || "This product";

  const productCategory =
    category?.trim() || "product";

  const ingredientList =
    ingredients?.trim() ||
    "carefully selected ingredients";

  const weightText =
    weight?.trim()
      ? `Pack Size: ${weight.trim()}`
      : "";

  const selectedTone =
    tone?.trim() || "Professional";

  const lowerText = `
    ${productName}
    ${productCategory}
    ${ingredients}
  `.toLowerCase();

  let shortDescription = "";
  let features = [];
  let benefits = [];
  let whyChoose = "";

  // Food products
  if (
    lowerText.includes("pickle") ||
    lowerText.includes("jam") ||
    lowerText.includes("honey") ||
    lowerText.includes("food") ||
    lowerText.includes("grocery") ||
    lowerText.includes("spice")
  ) {
    shortDescription = `${productName} is a flavorful ${productCategory} prepared using ${ingredientList}. Its taste and ingredients make it a suitable addition to everyday meals, snacks, or recipes.`;

    features = [
      `Prepared with ${ingredientList}`,
      "Suitable for everyday food use",
      "Easy to serve and enjoy",
      weightText ||
        "Convenient packaging",
      `Presented in a ${selectedTone.toLowerCase()} style`,
    ];

    benefits = [
      "Adds flavour to meals",
      "Convenient for regular use",
      "A useful choice for food lovers",
    ];

    whyChoose = `Choose ${productName} when you want a product that brings together familiar ingredients, enjoyable taste, and convenient packaging.`;
  }

  // Beauty and personal care products
  else if (
    lowerText.includes("face") ||
    lowerText.includes("skin") ||
    lowerText.includes("beauty") ||
    lowerText.includes("personal care") ||
    lowerText.includes("shampoo") ||
    lowerText.includes("soap") ||
    lowerText.includes("cream")
  ) {
    shortDescription = `${productName} is a ${productCategory} made with ${ingredientList}. It is designed to fit comfortably into a regular personal-care routine and offers a simple, convenient product experience.`;

    features = [
      `Contains ${ingredientList}`,
      "Suitable for regular personal-care use",
      "Easy to include in a daily routine",
      weightText ||
        "Convenient pack size",
      `Created with a ${selectedTone.toLowerCase()} presentation`,
    ];

    benefits = [
      "Supports a simple care routine",
      "Convenient and easy to use",
      "A practical addition to personal care",
    ];

    whyChoose = `Choose ${productName} for a straightforward personal-care product made with the provided ingredients and packaged for convenient use.`;
  }

  // General products
  else {
    shortDescription = `${productName} is a ${selectedTone.toLowerCase()} ${productCategory} designed around the details provided. Featuring ${ingredientList}, it offers a clear and practical option for customers looking for this type of product.`;

    features = [
      `Key details: ${ingredientList}`,
      `Category: ${productCategory}`,
      weightText ||
        "Convenient packaging",
      "Designed for practical use",
      `Presented in a ${selectedTone.toLowerCase()} tone`,
    ];

    benefits = [
      "Easy to understand product information",
      "Useful for its intended purpose",
      "A practical choice for customers",
    ];

    whyChoose = `Choose ${productName} for a product that clearly presents its key details and offers a convenient option within the ${productCategory} category.`;
  }

  return `Product Title:
${productName}${weight ? ` - ${weight}` : ""}

Short Description:
${shortDescription}

Key Features:
• ${features[0]}
• ${features[1]}
• ${features[2]}
• ${features[3]}
• ${features[4]}

Benefits:
• ${benefits[0]}
• ${benefits[1]}
• ${benefits[2]}

Why Choose This Product?
${whyChoose}

Product Details:
Category: ${productCategory}
${weightText}
Tone: ${selectedTone}

SEO Keywords:
${productName}, ${productCategory}, ${ingredientList}`;
};

const generateProductDescription =
  async (req, res) => {
    try {
      const {
        name,
        category,
        ingredients,
        weight,
        tone,
      } = req.body;

      if (
        !name?.trim() ||
        !category?.trim()
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Product name and category are required",
        });
      }

      try {
        const description =
          await generateDescription(
            name,
            category,
            ingredients || "",
            weight || "",
            tone || "Professional"
          );

        return res.status(200).json({
          success: true,
          description,
          source: "gemini",
        });
      } catch (geminiError) {
        console.log(
          "Gemini unavailable. Using fallback:",
          geminiError.message
        );

        const fallbackDescription =
          createFallbackDescription(
            name,
            category,
            ingredients,
            weight,
            tone
          );

        return res.status(200).json({
          success: true,
          description:
            fallbackDescription,
          source: "fallback",
        });
      }
    } catch (error) {
      console.log(
        "AI controller error:",
        error.message
      );

      return res.status(500).json({
        success: false,
        message:
          "Unable to generate description",
      });
    }
  };

module.exports = {
  generateProductDescription,
};
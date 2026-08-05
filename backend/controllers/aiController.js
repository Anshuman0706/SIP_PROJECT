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
    name || "This product";

  const productCategory =
    category || "product";

  const ingredientText =
    ingredients?.trim()
      ? `Made with ${ingredients.trim()},`
      : "";

  const weightText =
    weight?.trim()
      ? ` Available in ${weight.trim()} packaging.`
      : "";

  const toneText = tone
    ? `${tone.toLowerCase()} and engaging`
    : "professional and engaging";

  return `${productName} is a ${toneText} ${productCategory} designed to offer quality, convenience, and a satisfying customer experience. ${ingredientText} this product is carefully presented to highlight its important qualities and make it suitable for everyday use.${weightText}

Choose ${productName} for a reliable product that combines useful features with a clear and appealing presentation. It is a great choice for customers looking for quality and value.`;
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
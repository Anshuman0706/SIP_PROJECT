const { generateDescription } = require("../services/geminiService");

const generateProductDescription = async (req, res) => {
  try {
    const {
      name,
      category,
      ingredients,
      weight,
      tone,
    } = req.body;

    if (!name || !category) {
      return res.status(400).json({
        message: "Product name and category are required",
      });
    }

    const description = await generateDescription(
      name,
      category,
      ingredients || "",
      weight || "",
      tone || "Professional"
    );

    res.status(200).json({
      success: true,
      description,
    });
  } catch (error) {
  console.log(error);

  res.status(500).json({
    success: false,
    message: error.message,
    details: error,
  });
}
};

module.exports = {
  generateProductDescription,
};
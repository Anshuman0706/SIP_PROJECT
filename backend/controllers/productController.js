const products = require("../data/products");

// GET all products
const getAllProducts = (req, res) => {
  res.status(200).json(products);
};

// GET single product
const getProductById = (req, res) => {
  const product = products.find(
    (p) => p.id === parseInt(req.params.id)
  );

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
};

// POST product
const createProduct = (req, res) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
};

// PUT product
const updateProduct = (req, res) => {
  const product = products.find(
    (p) => p.id === parseInt(req.params.id)
  );

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  Object.assign(product, req.body);

  res.status(200).json(product);
};

// DELETE product
const deleteProduct = (req, res) => {
  const index = products.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products.splice(index, 1);

  res.status(200).json({
    message: "Product deleted successfully",
  });
};

// SEARCH product
const searchProducts = (req, res) => {
  const keyword = req.query.name?.toLowerCase() || "";

  const result = products.filter((p) =>
    p.name.toLowerCase().includes(keyword)
  );

  res.status(200).json(result);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
};
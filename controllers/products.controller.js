const path = require("path");
const { readData } = require("../utils/fileHelper");

const getProducts = (req, res) => {
  const productsPath = path.join(__dirname, "../data/products.json");

  const products = readData(productsPath);

  res.json(products);
};

module.exports = {
  getProducts,
};

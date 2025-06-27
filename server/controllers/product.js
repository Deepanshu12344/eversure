import Product from "../models/Product.js";

export const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.query;

    if (!category) {
      return res.status(400).json({ error: "Category is required as query param." });
    }

    const products = await Product.find({ category });
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching all products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const getGroupedProducts = async (req, res) => {
  try {
    const products = await Product.find();

    const grouped = {};

    products.forEach(product => {
      const { category, subcategory } = product;

      if (!grouped[category]) {
        grouped[category] = {};
      }

      if (!grouped[category][subcategory]) {
        grouped[category][subcategory] = [];
      }

      grouped[category][subcategory].push(product);
    });

    res.json(grouped);
  } catch (err) {
    console.error('Error grouping products:', err);
    res.status(500).json({ message: 'Server error' });
  }
};


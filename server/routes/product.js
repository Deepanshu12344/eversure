import express from "express";
import { getProductsByCategory, getAllProducts, getGroupedProducts} from "../controllers/product.js";

const router = express.Router();

router.get("/products", (req, res) => {
  const { category } = req.query;
  if (category) {
    return getProductsByCategory(req, res);
  }
  return getAllProducts(req, res);
});

router.get('/grouped', getGroupedProducts);

export default router;

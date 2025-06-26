// models/Product.ts
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productCode: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  sizes: { type: String },
  options: { type: [String], default: [] },
  image: { type: String },
  category: { type: String }, // Main category like "Infusion & Transfusion Therapy"
  subcategory: { type: String }, // Subcategory like "IV Cannula"
});

const Product = mongoose.model("Product", productSchema);

export default Product;

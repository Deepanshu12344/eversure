// seedProducts.js
import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import Product from "./models/Product.js"; 

dotenv.config(); 

const jsonPath = path.resolve("products_full_40.json");

async function seedProducts() {
  try {
    const data = fs.readFileSync(jsonPath, "utf-8");
    const products = JSON.parse(data);

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("Connected to MongoDB");

    // Optional: Clear existing products before seeding
    await Product.deleteMany({});
    console.log("Old products cleared");

    await Product.insertMany(products);
    console.log("Products seeded successfully");

    mongoose.disconnect();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
}

seedProducts();

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Load environment variables
dotenv.config();

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;

// ✅ Import User Routes
const userRoutes = require("./routes/userRoutes"); // Import user routes only once
app.use("/api/users", userRoutes); // Mount user routes at /api/users

// ✅ Import Alerts Routes
const alertRoutes = require("./routes/alertRoutes"); // Import alert routes
app.use("/api/alerts", alertRoutes); // Mount alert routes at /api/alerts

// ✅ Product Schema (could also be moved to models/Product.js)
const productSchema = new mongoose.Schema({
  name: String,
  stockStatus: String,
  quantity: Number,
});
const Product = mongoose.model("Product", productSchema);

// ✅ Audit Schema (could also be moved to models/Audit.js)
const auditSchema = new mongoose.Schema({
  product: String,
  systemQty: Number,
  physicalQty: Number,
  difference: Number,
});
const Audit = mongoose.model("Audit", auditSchema);

// Fetch all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add a new audit entry
app.post("/api/audits", async (req, res) => {
  const { product, systemQty, physicalQty } = req.body;
  const difference = physicalQty - systemQty;

  try {
    const newAudit = new Audit({
      product,
      systemQty,
      physicalQty,
      difference,
    });

    await newAudit.save();
    res.status(201).json({
      message: "Audit entry added successfully",
      audit: newAudit,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

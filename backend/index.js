const dotenv = require("dotenv");

dotenv.config();

const express = require("express");
const cors = require("cors");
const compression = require("compression");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const branchRoutes = require("./routes/branchRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

const errorHandler = require("./middleware/errorMiddleware");
const userRoutes = require("./routes/userRoutes");
const dispatchRoutes = require("./routes/dispatchRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const stockTransactionRoutes = require("./routes/stockTransactionRoutes");
const factoryRoutes = require("./routes/factoryRoutes");
const counterRoutes = require("./routes/counterRoutes");
// Connect Database
connectDB();

const app = express();


// ===============================
// Security & Global Middlewares
// ===============================



app.use(cors());

app.use(compression());

if (process.env.NODE_ENV === "development") {

}

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// ===============================
// Routes
// ===============================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "ERP API Running...",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/branches", branchRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/inventory", inventoryRoutes);

app.use("/api/stock-transactions",stockTransactionRoutes);
app.use("/api/dispatches", dispatchRoutes);
app.use("/api/dashboard",dashboardRoutes);

app.use("/api/factories", factoryRoutes);
app.use("/api/counters", counterRoutes);

// ===============================
// 404 Handler
// ===============================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});


// ===============================
// Global Error Handler
// ===============================

app.use(errorHandler);


// ===============================
// Start Server
// ===============================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running in ${
      process.env.NODE_ENV || "development"
    } mode on http://localhost:${PORT}`
  );
});
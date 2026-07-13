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
const employeeRoutes = require("./routes/employeeRoutes");
const brandRoutes = require("./routes/brandRoutes");
const purchaseRoutes = require("./routes/purchaseRoutes");
const supplierRoutes = require("./routes/supplierRoutes");

const internalCustomerRoutes =require("./routes/internalCustomerRoutes");
const internalSupplierRoutes =require("./routes/internalSupplierRoutes");
const internalTransferRoutes =require("./routes/internalTransferRoutes");
const stockLedgerRoutes =require("./routes/stockLedgerRoutes");
const salesOrderRoutes =require("./routes/salesOrderRoutes");
const invoiceRoutes =require("./routes/invoiceRoutes");
const customerRoutes =require("./routes/customerRoutes");
const paymentRoutes=require("./routes/paymentRoutes");

const posRoutes =require("./routes/posRoutes");
const salesReturnRoutes =require("./routes/salesReturnRoutes");
const goodsReceiptRoutes =require("./routes/goodsReceiptRoutes");


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

app.use("/api/employees", employeeRoutes);


app.use("/api/brands",brandRoutes);
app.use("/api/suppliers", supplierRoutes);

app.use("/api/purchases", purchaseRoutes);
app.use("/api/internal-customers",internalCustomerRoutes);

app.use("/api/internal-suppliers",internalSupplierRoutes);
app.use("/api/internal-transfers",internalTransferRoutes);
app.use("/api/stock-ledger",stockLedgerRoutes);
app.use("/api/sales-orders",salesOrderRoutes);
app.use("/api/invoices",invoiceRoutes);
app.use("/api/payments",paymentRoutes);
app.use("/api/customers",customerRoutes);
app.use("/api/pos",posRoutes);
app.use("/api/sales-returns",salesReturnRoutes);
app.use("/api/goods-receipts",goodsReceiptRoutes);

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
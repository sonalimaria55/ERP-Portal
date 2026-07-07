


const Product = require("../models/Product");

/**
 * Generate Product Code
 * Format: PRD000001
 */
const generateProductCode = async () => {
    const lastProduct = await Product.findOne()
        .sort({ createdAt: -1 })
        .select("productCode");

    if (!lastProduct || !lastProduct.productCode) {
        return "PRD000001";
    }

    const lastNumber = parseInt(
        lastProduct.productCode.replace("PRD", ""),
        10
    );

    const nextNumber = lastNumber + 1;

    return `PRD${String(nextNumber).padStart(6, "0")}`;
};

/**
 * Create Product
 */
const createProduct = async (productData, userId) => {
    // Required Fields
    if (!productData.productName?.trim()) {
        throw new Error("Product name is required");
    }

    if (!productData.sku?.trim()) {
        throw new Error("SKU is required");
    }

    if (!productData.category) {
        throw new Error("Category is required");
    }

    if (
        productData.purchasePrice === undefined ||
        productData.purchasePrice < 0
    ) {
        throw new Error("Invalid purchase price");
    }

    if (
        productData.sellingPrice === undefined ||
        productData.sellingPrice < 0
    ) {
        throw new Error("Invalid selling price");
    }

    // Duplicate SKU Check
    const skuExists = await Product.findOne({
        sku: productData.sku.toUpperCase(),
        isDeleted: false,
    });

    if (skuExists) {
        throw new Error("SKU already exists");
    }

    // Duplicate Barcode Check
    if (productData.barcode) {
        const barcodeExists = await Product.findOne({
            barcode: productData.barcode,
            isDeleted: false,
        });

        if (barcodeExists) {
            throw new Error("Barcode already exists");
        }
    }

    // Generate Product Code
    const productCode = await generateProductCode();

    // Create Product
    const product = await Product.create({
        ...productData,

        productCode,

        sku: productData.sku.toUpperCase(),

        createdBy: userId,
    });

    return product;
};
/**
 * Get All Products
 */
const getAllProducts = async (query) => {
    const page = Math.max(Number(query.page) || 1, 1);
    const limit = Math.min(Math.max(Number(query.limit) || 10, 1), 100);
    const skip = (page - 1) * limit;

    const search = query.search?.trim() || "";
    const status = query.status;

    const filter = {
        isDeleted: false,
    };

    if (search) {
        filter.$or = [
            {
                productName: {
                    $regex: search,
                    $options: "i",
                },
            },
            {
                productCode: {
                    $regex: search,
                    $options: "i",
                },
            },
            {
                sku: {
                    $regex: search,
                    $options: "i",
                },
            },
            {
                barcode: {
                    $regex: search,
                    $options: "i",
                },
            },
        ];
    }

    if (status) {
        filter.status = status;
    }

    const totalProducts = await Product.countDocuments(filter);

    const products = await Product.find(filter)
        .populate("category", "categoryName")
    
        .populate("createdBy", "name email")
        .sort({
            createdAt: -1,
            productName: 1,
        })
        .skip(skip)
        .limit(limit);

    return {
        products,
        pagination: {
            currentPage: page,
            totalPages: Math.ceil(totalProducts / limit),
            totalProducts,
            limit,
        },
    };
};

/**
 * Get Product By Id
 */
const getProductById = async (productId) => {
    const product = await Product.findOne({
        _id: productId,
        isDeleted: false,
    })
        .populate("category", "categoryName")
      
        .populate("createdBy", "name email")
        .populate("updatedBy", "name email");

    if (!product) {
        throw new Error("Product not found");
    }

    return product;
};
/**
 * Update Product
 */
const updateProduct = async (productId, productData, userId) => {
    const product = await Product.findOne({
        _id: productId,
        isDeleted: false,
    });

    if (!product) {
        throw new Error("Product not found");
    }

    // Check Duplicate SKU
    if (productData.sku) {
        const existingSku = await Product.findOne({
            _id: { $ne: productId },
            sku: productData.sku.toUpperCase(),
            isDeleted: false,
        });

        if (existingSku) {
            throw new Error("SKU already exists");
        }

        productData.sku = productData.sku.toUpperCase();
    }

    // Check Duplicate Barcode
    if (productData.barcode) {
        const existingBarcode = await Product.findOne({
            _id: { $ne: productId },
            barcode: productData.barcode,
            isDeleted: false,
        });

        if (existingBarcode) {
            throw new Error("Barcode already exists");
        }
    }

    productData.updatedBy = userId;

    const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        productData,
        {
            new: true,
            runValidators: true,
        }
    )
        .populate("category", "categoryName")
    
        .populate("createdBy", "name email")
        .populate("updatedBy", "name email");

    return updatedProduct;
};

/**
 * Delete Product (Soft Delete)
 */
const deleteProduct = async (productId, userId) => {
    const product = await Product.findOne({
        _id: productId,
        isDeleted: false,
    });

    if (!product) {
        throw new Error("Product not found");
    }

    product.isDeleted = true;
    product.updatedBy = userId;

    await product.save();

    return {
        message: "Product deleted successfully",
    };
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
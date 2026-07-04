# ERP-Portal
# ERP System - Frontend & Backend Architecture

> **Project Goal:** Build a production-ready ERP System using React, Material UI, Redux Toolkit, Node.js, Express, and MongoDB.

---

# 🚀 Tech Stack

## Frontend

* React + Vite
* Material UI (MUI)
* Redux Toolkit
* React Router
* Axios
* React Hook Form
* Recharts
* React Hot Toast
* Day.js
* Oxlint
* Prettier

## Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcryptjs
* Helmet
* CORS
* Morgan
* Compression
* Express Validator

---

# 📁 Frontend Folder Structure

```text
src/
│
├── app/
│   ├── store.js
│   └── axios.js
│
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── images/
│
├── components/
│   ├── charts/
│   ├── common/
│   ├── forms/
│   ├── icons/
│   ├── layout/
│   └── tables/
│
├── features/
│   ├── auth/
│   ├── branch/
│   ├── dispatch/
│   ├── inventory/
│   ├── notification/
│   └── product/
│
├── hooks/
│
├── layouts/
│
├── pages/
│   ├── auth/
│   ├── branches/
│   ├── dashboard/
│   ├── dispatch/
│   ├── inventory/
│   ├── products/
│   ├── profile/
│   ├── reports/
│   ├── settings/
│   └── users/
│
├── routes/
│
├── services/
│
├── styles/
│   ├── globals.css
│   └── scrollbar.css
│
├── theme/
│   ├── palette.js
│   ├── theme.js
│   └── typography.js
│
├── utils/
│
├── App.jsx
└── main.jsx
```

---

# 📁 Backend Folder Structure

```text
backend/
│
├── config/
│   ├── db.js
│   └── env.js
│
├── controllers/
│
├── middleware/
│
├── models/
│
├── routes/
│
├── services/
│
├── utils/
│
├── validations/
│
├── uploads/
│
├── logs/
│
├── .env
├── server.js
└── package.json
```

---

# 📦 Frontend Dependencies

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom axios @reduxjs/toolkit react-redux react-hook-form react-hot-toast recharts dayjs
```

Optional:

```bash
npm install @fontsource/inter
```

---

# 📦 Backend Dependencies

```bash
npm install express mongoose cors dotenv jsonwebtoken bcryptjs cookie-parser helmet morgan compression express-validator
```

Development Dependency:

```bash
npm install -D nodemon
```

---

# 📌 Coding Standards

* Use Material UI components throughout the application.
* Use functional React components only.
* Use React Hooks.
* Use Redux Toolkit for global state management.
* Use Axios with interceptors.
* Keep the code modular and reusable.
* Use environment variables for configuration.
* Implement proper error handling.
* Follow production-ready folder structure.
* Write clean, maintainable, and scalable code.
* Ensure Oxlint compatibility.

---

# 📋 Development Workflow

## Phase 1

* Project Configuration
* Redux Store
* Axios Configuration
* Material UI Theme
* Global Styles

## Phase 2

* Routing
* Layouts
* Sidebar
* Header
* Protected Routes

## Phase 3

* Authentication
* Login
* JWT
* Role-Based Access

## Phase 4

* Dashboard

## Phase 5

* Product Management

## Phase 6

* Inventory Management

## Phase 7

* Branch Management

## Phase 8

* Dispatch Management

## Phase 9

* Reports & Analytics

## Phase 10

* User Management

## Phase 11

* Settings

## Phase 12

* Testing & Deployment

---

# 🛠 Best Practices

* Keep secrets only in `.env` files.
* Never hardcode API URLs or credentials.
* Use meaningful Git commit messages.
* Keep the README updated throughout development.
* Build reusable components before duplicating code.
* Maintain responsive design across desktop and tablet devices.
* Prioritize production-ready architecture and coding practices from the beginning.
  ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________# 🏥 Multi-Branch Retail ERP System

A production-ready ERP system designed for **pharmacy / retail chains** with multiple branches, centralized factory management, inter-branch stock transfers, POS billing, and customer e-commerce support.

---

# 🚀 Project Overview

This ERP system manages:

- 🏭 Factory (Super Admin)
- 🏬 Multiple Branches (Whitefield, Yelahanka, etc.)
- 💳 Sales Terminal (POS billing system)
- 👤 Customer E-commerce platform
- 🔄 Inter-branch stock transfer system
- 📦 Inventory tracking with full audit history

---

# 👥 User Roles

## 🏭 Super Admin (Factory)
Single global admin who controls the entire system.

### Responsibilities:
- Manage all branches
- Manage products & categories
- Control factory inventory
- Dispatch stock to branches
- View global reports & analytics
- Monitor stock transfers

### Restrictions:
- Cannot perform sales
- Cannot operate branch POS

---

## 🏬 Branch Admin
One admin per branch (e.g., Whitefield, Yelahanka).

### Responsibilities:
- Manage branch inventory
- Handle stock requests (approve/reject/partial)
- View branch sales reports
- Search product availability in other branches (NO exact stock visibility)
- Receive factory dispatch

### Restrictions:
- Cannot view exact stock of other branches
- Cannot modify factory inventory

---

## 💳 Sales Terminal (POS System)
Shared login per branch for billing operations.

### Login:
- Branch Code
- Employee Code
- Password

### Responsibilities:
- Create invoices
- Add/remove products in bill
- Update quantity
- Process payments
- Print invoices
- Fast billing operations

### Restrictions:
- No inventory management
- No access to other branches
- No transfer approvals

---

## 👤 Customer
Online users for e-commerce platform.

### Features:
- Register / Login
- Browse products
- Search products
- Add to cart
- Place orders
- Track orders
- Order history

---

## 🧑 Employee (Profile System - Not Login User)
Represents actual staff working in branches.

### Stored Data:
- Employee ID
- Name
- Phone
- Email
- Address
- Date of Birth
- Photo
- QR Code
- Branch
- Role
- Status

### Purpose:
- QR-based identification
- Shift tracking
- Invoice attribution
- Internal HR reference

---

# 🏢 Branch Structure

Each branch contains:

- Branch Name
- Branch Code
- Address
- City
- Geo Location
- Admin Account
- Sales Terminal Login

### Example:
- BLR-WF → Whitefield
- BLR-YLK → Yelahanka
- BLR-KMG → Koramangala
- BLR-IND → Indiranagar

---

# 📦 Product System

Each product contains:

- Product Name
- Category
- Description
- Barcode / QR
- Price
- GST
- Batch Number
- Expiry Date
- Manufacturer
- Status

---

# 🏬 Inventory System

## Factory Inventory
- Central stock management

## Branch Inventory
- Each branch has independent stock

### Rules:
- Branch sees ONLY its own exact stock
- Other branches show only:
  - 🟢 Available
  - 🟡 Limited
  - 🔴 Out of Stock

---

# 🔄 Stock Transfer System

### Workflow:

1. Branch requests product stock
2. Other branch receives request
3. Supplier branch decides:
   - Approve full quantity
   - Approve partial quantity
   - Reject request
4. Stock moves after approval
5. Full audit log maintained

---

# 💊 Sales System (POS)

### Workflow:

1. Search product
2. Add to bill
3. Modify quantity
4. Apply discount (optional)
5. Checkout
6. Generate invoice
7. Print bill

---

# 📱 QR Employee System

Each employee has a QR code that opens their profile.

### QR Displays:
- Name
- Employee ID
- Branch
- Role
- Contact Details
- Status
- Photo

### Use Cases:
- Shift identification
- Invoice attribution
- Attendance tracking (future)

---

# 📊 Inventory Ledger (IMPORTANT)

Tracks every stock movement:

- Factory → Branch dispatch
- Branch → Branch transfer
- Customer sales
- Returns
- Adjustments

Nothing is deleted permanently (audit system).

---

# 🔔 Notification System (Auto Generated)

System automatically generates:

- Low stock alerts
- Transfer requests
- Transfer approvals
- Dispatch updates
- Order updates

No manual user required.

---

# 🗂️ Backend Architecture
______________________________________________________________________________________________________________________________________
---

# 🔐 Permission Matrix

| Feature | Super Admin | Branch Admin | Sales | Customer |
|--------|------------|-------------|-------|----------|
| Manage Products | ✅ | ❌ | ❌ | ❌ |
| Manage Branch Inventory | ❌ | ✅ | ❌ | ❌ |
| Billing / Sales | ❌ | ❌ | ✅ | ❌ |
| Buy Products | ❌ | ❌ | ❌ | ✅ |
| Stock Transfer Approval | ✅ | ✅ | ❌ | ❌ |

---

# 🚀 Development Roadmap

## Phase 1
- Authentication
- User Management
- Validation system

## Phase 2
- Employee Module (QR System)
- Branch Module

## Phase 3
- Product Module
- Inventory Module

## Phase 4
- Stock Transfer System
- Factory Dispatch System

## Phase 5
- POS Billing System

## Phase 6
- Customer E-commerce Portal

## Phase 7
- Notifications, Reports, Dashboard

---

# 🧠 Core Design Principles

- Branches are independent but collaborative
- Inventory privacy between branches
- Fast POS billing system
- Factory controls supply chain
- Full audit tracking of all actions
- Scalable multi-city architecture

---

# ✅ Status

Project blueprint initialized and ready for development.
backend/
│
├── config/
├── controllers/
├── models/
├── routes/
├── middleware/
├── validations/
├── services/
├── utils/
├── uploads/
└── server.js

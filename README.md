# SIP_PROJECT
Building a web tool where a user inputs: product name, key ingredients, weight, and a brief feature list and receives an AI-generated product description optimized for e-commerce. Build in a tone selector (premium, traditional, health-focused) and allow the user to regenerate or edit the output before copying it.

.AI Product Description Generator

A full-stack web application built with React, Node.js, Express, MongoDB Atlas, and Mongoose for managing product data and generating product-related content.

---

Features

- Product CRUD API using Express and MongoDB
- Fetch all products from database
- Fetch single product by ID
- Create a new product
- Update an existing product
- Delete a product
- Search products by name
- Frontend connected with backend API

---

Tech Stack

Frontend

- React
- Vite
- Axios

Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

Database Used

This project uses MongoDB Atlas as the cloud database and Mongoose as the ODM for interacting with MongoDB.

Why MongoDB?

MongoDB was chosen because:

- It stores data in flexible JSON-like documents
- It integrates well with Node.js and Express
- It is easy to scale and use for product-based applications
- MongoDB Atlas provides a cloud-hosted database setup

---

Product Schema

The application stores product data in the Product collection with the following schema:

- name → String
- category → String
- price → Number
- createdAt → Date
- updatedAt → Date

Product Model

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);

---

API Endpoints

Product Routes

- GET "/api/products" → Get all products
- GET "/api/products/:id" → Get product by ID
- POST "/api/products" → Create a new product
- PUT "/api/products/:id" → Update a product
- DELETE "/api/products/:id" → Delete a product
- GET "/api/products/search?name=keyword" → Search products by name

---

Database Setup Instructions

1. Clone the repository

git clone <your-repo-link>
cd react-app

2. Install frontend dependencies

npm install

3. Install backend dependencies

cd backend
npm install

4. Create ".env" file inside backend folder

Create a file named ".env" inside the "backend" folder and add:

MONGO_URI=your_mongodb_connection_string
PORT=5000

5. Start backend server

Inside the backend folder:

npm run dev

6. Start frontend server

Open another terminal in the root project folder:

npm run dev

---



Folder Structure

react-app/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── productController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── public/
├── src/
├── package.json
└── README.md

---

Current Progress

- Backend connected to MongoDB Atlas
- Product CRUD API integrated with database
- Search API implemented
- Frontend and backend setup completed

---

Future Scope

- Add AI-generated product descriptions
- Add authentication and admin product management
- Improve frontend UI for product listing and forms
- Deploy full-stack application online
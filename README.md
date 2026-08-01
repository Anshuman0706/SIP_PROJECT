# DescAI – AI Product Description Generator

DescAI is a full-stack web application that helps users create product descriptions for e-commerce platforms using AI.

Users can enter product details such as the product name, category, key ingredients, weight, features, and preferred writing tone. The application generates an AI-based product description that users can review, edit, regenerate, and copy.

---

## Live Demo

### Frontend

🔗 **Live Application:**  
https://descai-frontend.onrender.com

### Backend

🔗 **Backend API:**  
https://descai-backend.onrender.com

### GitHub Repository

🔗 **Source Code:**  
https://github.com/Anshuman0706/SIP_PROJECT.git

---

## Project Features

### Authentication

- User registration
- User login
- JWT-based authentication
- Protected user profile
- Google OAuth login
- Forgot password functionality
- Password reset using a secure reset token
- Password encryption using bcrypt

### AI Product Description Generator

- Enter product name
- Select product category
- Add key ingredients
- Enter product weight
- Add product features
- Select a writing tone:
  - Premium
  - Traditional
  - Health-focused
- Generate an AI-based product description
- Regenerate the description
- Edit the generated output
- Copy the final description

### Product Management

- Add new products
- View all products
- Search products
- Edit product details
- Delete products
- Store product data in MongoDB Atlas

### Deployment

- Frontend deployed online
- Backend deployed on Render
- MongoDB Atlas used as the cloud database
- Frontend connected to the deployed backend using environment variables

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- React Router
- Axios
- React Toastify
- Bootstrap

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- Passport.js
- Google OAuth
- Express Validator
- Express Rate Limit

### AI Integration

- Google Gemini API

---

## Project Architecture

```text
React + TypeScript Frontend
            ↓
Node.js + Express Backend
            ↓
MongoDB Atlas Database
            ↓
Google Gemini AI
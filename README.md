# DescAI – AI Product Description Generator

DescAI is a full-stack AI-powered web application that helps users create clear, engaging, and professional product descriptions for e-commerce platforms.

Users can enter product information such as the product name, category, key ingredients, weight, and preferred writing tone. The application generates an AI-based product description that users can review, edit, regenerate, and copy.

---

## Live Demo

### Frontend Application

🔗 **Live Application:**  
https://descai-frontend.onrender.com

### Backend API

🔗 **Backend API:**  
https://descai-backend.onrender.com

### GitHub Repository

🔗 **Source Code:**  
https://github.com/Anshuman0706/SIP_PROJECT.git

---

## Project Features

### User Authentication

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
- Enter product category
- Add key ingredients or important features
- Enter product weight
- Select a preferred writing tone
- Generate an AI-based product description
- Edit the generated description
- Regenerate the description
- Copy the final description
- Clear the generated output

### Product Management

- Add new products
- View saved products
- Search products
- Edit product details
- Delete products
- Store product information in MongoDB Atlas

### User Interface

- Modern and responsive user interface
- Dark blue and teal color theme
- Responsive layout for desktop and mobile devices
- User-friendly validation messages
- Loading indicator during AI generation
- Clean error handling for AI API quota limits

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

### Deployment

- Frontend deployed on Render
- Backend deployed on Render
- Database hosted on MongoDB Atlas

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
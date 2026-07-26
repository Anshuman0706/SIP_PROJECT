import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
});

// Register User
export const registerUser = (userData) => {
  return API.post("/register", userData);
};

// Login User
export const loginUser = (userData) => {
  return API.post("/login", userData);
};

// Forgot Password
export const forgotPassword = (email) => {
  return API.post("/forgot-password", { email });
};

// Reset Password
export const resetPassword = (token, password) => {
  return API.post(`/reset-password/${token}`, {
    password,
  });
};

// Get Profile
export const getProfile = (token) => {
  return API.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Google Login
export const googleLogin = () => {
  window.location.href = "http://localhost:5000/api/auth/google";
};
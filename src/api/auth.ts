import axios from "axios";
console.log("API URL:", import.meta.env.VITE_API_URL);

const API_URL = import.meta.env.VITE_API_URL;

const API = axios.create({
  baseURL: `${API_URL}/api/auth`,
});

// Register User
export const registerUser = (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  return API.post("/register", userData);
};

// Login User
export const loginUser = (userData: {
  email: string;
  password: string;
}) => {
  return API.post("/login", userData);
};

// Forgot Password
export const forgotPassword = (email: string) => {
  return API.post("/forgot-password", { email });
};

// Reset Password
export const resetPassword = (
  token: string,
  password: string
) => {
  return API.post(`/reset-password/${token}`, {
    password,
  });
};

// Get Profile
export const getProfile = (token: string) => {
  return API.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Google Login
export const googleLogin = () => {
  window.location.href = `${API_URL}/api/auth/google`;
};
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/ai",
});

export const generateDescription = async (
  data: any,
  token: string
) => {
  return API.post("/generate", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
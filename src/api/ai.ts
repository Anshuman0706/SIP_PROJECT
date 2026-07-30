import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/ai`,
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
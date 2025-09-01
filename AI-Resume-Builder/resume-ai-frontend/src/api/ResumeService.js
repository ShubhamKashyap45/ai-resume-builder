import axios from "axios";

export const baseUrl = "http://localhost:8080";

export const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export const generateResume = async (description) => {
  try {
    const response = await axiosInstance.post("/api/resume/build", {
      userDescription: description,
    });
    return response.data;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

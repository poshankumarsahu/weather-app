// src/api/weatherService.js
import apiClient from "./axiosConfig";

// Fetch current weather for a given location
export const fetchCurrentWeather = async (location) => {
  try {
    const response = await apiClient.get("/current.json", {
      params: { q: location }, // Dynamic query parameter
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Fetch forecast for a location (example of another endpoint)
export const fetchWeatherForecast = async (location, days = 3) => {
  try {
    const response = await apiClient.get("/forecast.json", {
      params: { q: location, days },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Centralized error handling
const handleApiError = (error) => {
  if (error.response) {
    console.error("Response Error:", error.response.data.error.message);
    throw new Error(error.response.data.error.message);
  } else if (error.request) {
    console.error("No Response from Server:", error.request);
    throw new Error("No response from server. Please try again.");
  } else {
    console.error("Unexpected Error:", error.message);
    throw new Error("Unexpected error occurred. Please try again.");
  }
};

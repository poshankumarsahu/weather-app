import React, { useState } from "react";
import { fetchCurrentWeather } from "../api/weatherService";

const WeatherReport = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchWeather = async () => {
    setIsLoading(true);
    setError("");
    setWeatherData(null);

    try {
      const data = await fetchCurrentWeather(location);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-content">
      <h1>Weather Report</h1>
      <p>Get your latest weather information here.</p>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{ padding: "10px", margin: "10px" }}
      />
      <button onClick={handleFetchWeather} style={{ padding: "10px" }}>
        Get Weather
      </button>

      {isLoading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weatherData && (
        <div>
          <h2>{weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <img
            src={weatherData.current.condition.icon}
            alt={weatherData.current.condition.text}
          />
        </div>
      )}
    </div>
  );
};

export default WeatherReport;

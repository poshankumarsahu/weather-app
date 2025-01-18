import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleClick = () => {
    navigate("/weather"); // Navigate to the Weather component
  };

  return (
    <div className="page-content">
      <h1>Welcome to Weather App</h1>
      <p>Discover accurate weather information at your fingertips.</p>
      <button onClick={handleClick} style={{ padding: "10px" }}>
        Go To Weather
      </button>
    </div>
  );
};

export default Welcome;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../common/Header";
import WelcomePage from "../pages/WelcomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import WeatherReportPage from "../pages/WeatherReportPage";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <div className="app-main-container">
        <div className="app-content-box">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/weather" element={<WeatherReportPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;

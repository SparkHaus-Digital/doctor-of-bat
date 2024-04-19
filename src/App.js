import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import './index.css'

import HomePage from "./screens/Home";
import ServicePage from "./screens/Services";
import ContactUsPage from "./screens/Cantactus";
import AboutUsPage from "./screens/AboutUs";
import NewsPage from "./screens/News";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
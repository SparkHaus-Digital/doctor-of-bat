import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./css/Fallback.css" 

const HomePage = React.lazy(() => import("./screens/Home"));
const ServicePage = React.lazy(() => import("./screens/Services"));
const NewsPage = React.lazy(() => import("./screens/News"));
const ContactusPage = React.lazy(() => import("./screens/Contactus"));
const AboutUsPage = React.lazy(() => import("./screens/Aboutus"));
const DeliveryPage = React.lazy(() => import("./screens/Delivery"));

const FallbackLoader = () => (
  <div className="fallback-loading">
    <div className="spinner"></div>
    <div className="overlay"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Suspense fallback={<FallbackLoader />}>
          <Routes>
            <Route path="/news" element={<NewsPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/contactus" element={<ContactusPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
          </Routes>
          <SpeedInsights />
          <Analytics />
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;

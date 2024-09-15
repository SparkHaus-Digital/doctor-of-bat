import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const HomePage = React.lazy(() => import("./screens/Home"));
const ServicePage = React.lazy(() => import("./screens/Services"));
const NewsPage = React.lazy(() => import("./screens/News"));
const ContactusPage = React.lazy(() => import("./screens/Contactus"));
const AboutUsPage = React.lazy(() => import("./screens/Aboutus"));

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/news" element={<NewsPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/contactus" element={<ContactusPage />} />
          </Routes>
          {/* <SpeedInsights /> */}
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import '../css/HomePage.css';
import '@fortawesome/fontawesome-free/css/all.css';
import img1 from '../assets/landing_image1.png';
import img2 from '../assets/landing_image1.png';
import img3 from '../assets/landing_image1.png';
import partner1 from '../assets/adidas.png';
import partner2 from '../assets/adidas.png';
import partner3 from '../assets/adidas.png';
import partner4 from '../assets/adidas.png';

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [partnerIndex, setPartnerIndex] = useState(0);

  const images = [img1, img2, img3];
  const partners = [partner1, partner2, partner3, partner4];

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextPartner = () => {
    setPartnerIndex(prevIndex => (prevIndex === partners.length - 1 ? 0 : prevIndex + 1));
  };

  const prevPartner = () => {
    setPartnerIndex(prevIndex => (prevIndex === 0 ? partners.length - 1 : prevIndex - 1));
  };

  return (
    <div className="home-container">
      <div className="landing-image" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <div className="overlay"></div>
        <h1 className="title">BAT REPAIR</h1>
        <div className="arrow-icons-left">
          <i className="fas fa-angle-left" onClick={prevImage}></i>
        </div>
        <div className="arrow-icons-right">
          <i className="fas fa-angle-right" onClick={nextImage}></i>
        </div>
        <div className='btn-div'>
          <button className="view-more-btn">VIEW MORE</button>
        </div>
      </div>
      <div className='services-container'>
        <h3 className='topic'>OUR SERVICES</h3>
        <div className='service-boxes'>
          <div className='service-box'>
            <img src={img1} alt="Bat Repair" />
            <p>Bat Repair</p>
          </div>
          <div className='service-box'>
            <img src={img2} alt="Delivery" />
            <p>Delivery</p>
          </div>
          <div className='service-box'>
            <img src={img3} alt="Bat Maintenance" />
            <p>Bat Maintenance</p>
          </div>
        </div>
      </div>
      <div className='partners-container'>
        <h3 className='topic'>OUR PARTNERS</h3>
        <div className='partner-logos'>
          <div className='logo-carousel'>
            <i className="fas fa-angle-left" onClick={prevPartner}></i>
            {partners.map((partner, index) => (
              <img key={index} src={partner} alt={`Partner ${index + 1}`} className={index === partnerIndex ? 'active' : ''} />
            ))}
            <i className="fas fa-angle-right" onClick={nextPartner}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

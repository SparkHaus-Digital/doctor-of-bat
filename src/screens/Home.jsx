import React from 'react';
import Slider from 'react-slick';
import '../css/HomePage.css';
import LandingImage from '../assets/landing_image1.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import partner1 from '../assets/adidas.png'

const HomePage = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	return (
		<div>
			<div className="home">
				{/* Landing Section */}
				<div className="landing">
					<div className="landing-image">
						<img src={LandingImage} alt="Landing Image" />
						<h1>BAT REPAIR</h1>
					</div>
					<button className="view-more-btn">VIEW MORE</button>
				</div>

				{/* Services Section */}
				<div className="services-section">
					<h2>OUR SERVICES</h2>
					<div className="service-cards-home">
						<div className="service-card-home">
							<h3>BAT REPAIR</h3>
						</div>
						<div className="service-card-home">
							<h3>DELIVERY</h3>
						</div>
						<div className="service-card-home">
							<h3>BAT MAINTAIN</h3>
						</div>
					</div>
				</div>

				{/* Partners Section */}
				<div className="partners">
					<h2>OUR PARTNERS</h2>
					<div className='slider-div'>
						<Slider {...settings}>
							<div className="partner-logo">
								<img src={partner1} alt="Partner 1" />
							</div>
							<div className="partner-logo">
								<img src={partner1} alt="Partner 2" />
							</div>
							<div className="partner-logo">
								<img src={partner1} alt="Partner 2" />
							</div>
						</Slider>
					</div>
				</div>

				{/* Contact Section */}
				<div className="contact">
					<div className="contact-form">
						<h2>GET IN TOUCH</h2>
						<form>
							<div className="form-group">
								<label>Name</label>
								<input type="text" />
							</div>
							<div className="form-group">
								<label>Email</label>
								<input type="email" />
							</div>
							<div className="form-group">
								<label>Phone Number</label>
								<input type="tel" />
							</div>
							<div className="form-group">
								<label>Message</label>
								<input type="text" />
							</div>
							<button type="submit">SEND</button>
						</form>
					</div>
					<div className="map">
						{/* Add Google Map here */}
						<iframe
							title="map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0542019755667!2d79.90233147503203!3d6.884111018867636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b37ee08f489%3A0xbfdc1704c638e75d!2sDoctor%20of%20Bat!5e0!3m2!1sen!2slk!4v1713622321735!5m2!1sen!2slk"
							width="600"
							height="450"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
						></iframe>
					</div>
				</div>

				{/* Footer
				<footer className="footer">
					<p>&copy; 2024 Bat Repair Shop. All Rights Reserved.</p>
				</footer> */}
			</div>
		</div>
	);
};

export default HomePage;

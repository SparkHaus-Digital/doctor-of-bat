import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import '../css/HomePage.css';
import LandingImage from '../assets/landing_image1.webp';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import emailjs from 'emailjs-com';

import partner1 from '../assets/logo/adidas.webp';
import partner2 from '../assets/logo/BAS.webp';
import partner3 from '../assets/logo/BDM.webp';
import partner4 from '../assets/logo/CA.webp';
import partner5 from '../assets/logo/CEAT.webp';
import partner6 from '../assets/logo/DSC.webp';
import partner8 from '../assets/logo/Gray Nicolls.webp';
import partner9 from '../assets/logo/K.webp';
import partner10 from '../assets/logo/KG.webp';
import partner11 from '../assets/logo/KOOKABURRA.webp';
import partner12 from '../assets/logo/Masuri.webp';
import partner13 from '../assets/logo/MB.webp';
import partner14 from '../assets/logo/MiDs.webp';
import partner15 from '../assets/logo/Mongoose.webp';
import partner16 from '../assets/logo/MRF.webp';
import partner17 from '../assets/logo/NB.webp';
import partner18 from '../assets/logo/PUMA.webp';
import partner19 from '../assets/logo/SF.webp';
import partner20 from '../assets/logo/SG.webp';
import partner21 from '../assets/logo/Slazenger.webp';
import partner22 from '../assets/logo/Spartan.webp';
import partner23 from '../assets/logo/Speed.webp';
import partner24 from '../assets/logo/SS.webp';
import partner25 from '../assets/logo/TON.webp';
import partner26 from '../assets/logo/Woodworm.webp';

const HomePage = () => {
	const navigate = useNavigate();

	const mapRef = useRef();
	const [mapLoaded, setMapLoaded] = useState(false);

	useEffect(() => {
		// Lazy load the map using Intersection Observer
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setMapLoaded(true);
					observer.disconnect(); // Stop observing once map is loaded
				}
			});
		});
		if (mapRef.current) {
			observer.observe(mapRef.current);
		}
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	const handleViewMoreClick = () => {
		navigate('/services');
	};

	const handleCardClick = () => {
		navigate('/services');
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_f88cxsm',
				'template_awyzd5s',
				form.current,
				'4CAMR-pcPK2a7P4XR'
			)
			.then(
				(result) => {
					console.log(result.text);
					alert('Message sent successfully!');
				},
				(error) => {
					console.log(error.text);
					alert('Failed to send message, please try again later.');
				}
			);

		e.target.reset();
	};

	return (
		<div>
			<div className="home">
				{/* Landing Section */}
				<div className="landing">
					<div className="landing-image">
						{/* <img src={LandingImage} alt="Landing Image"/> */}
						<img
							src={LandingImage}
							alt="Landing Image"
							sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px"
						/>
						<h1>
							YOUR BAT, <br />
							OUR EXPERTISE
						</h1>
						<h3>
							SWING WITH CONFIDENCE. TRUSTED BY THE SRI LANKA NATIONAL TEAM, OUR
							EXPERT REPAIRS ENSURE YOUR BAT IS ALWAYS IN PEAK CONDITION.
						</h3>
					</div>
					<button className="view-more-btn" onClick={handleViewMoreClick}>
						VIEW MORE
					</button>
				</div>

				{/* Services Section */}
				<div className="services-section">
					<h2>OUR SERVICES</h2>
					<div className="service-cards-home">
						<div
							className="service-card-home"
							onClick={handleCardClick}
							style={{ cursor: 'pointer' }}
						>
							<h3>BAT REPAIR</h3>
						</div>
						<div className="service-card-home2">
							<h3>DELIVERY</h3>
						</div>
						<div className="service-card-home3">
							<h3>CUSTOMIZATION</h3>
						</div>
					</div>
				</div>

				{/* Partners Section */}
				<div className="partners">
					<h2>OUR PARTNERS</h2>
					<div className="slider-div">
						<center>
							<Slider {...settings}>
								<div className="partner-logo">
									<img src={partner1} alt="Partner 1" />
								</div>
								<div className="partner-logo">
									<img src={partner2} alt="Partner 2" />
								</div>
								<div className="partner-logo">
									<img src={partner3} alt="Partner 3" />
								</div>
								<div className="partner-logo">
									<img src={partner4} alt="Partner 4" />
								</div>
								<div className="partner-logo">
									<img src={partner5} alt="Partner 5" />
								</div>
								<div className="partner-logo">
									<img src={partner6} alt="Partner 6" />
								</div>
								<div className="partner-logo">
									<img src={partner8} alt="Partner 7" />
								</div>
								<div className="partner-logo">
									<img src={partner9} alt="Partner 7" />
								</div>
								<div className="partner-logo">
									<img src={partner10} alt="Partner 7" />
								</div>
								<div className="partner-logo">
									<img src={partner11} alt="Partner 7" />
								</div>
								<div className="partner-logo">
									<img src={partner12} alt="Partner 7" />
								</div>
								<div className="partner-logo">
									<img src={partner13} alt="Partner 7" />
								</div>
								<div className="partner-logo">
									<img src={partner14} alt="Partner 7" />
								</div>
								<div className="partner-logo">
									<img src={partner15} alt="Partner 7" />
								</div>
								<div className="partner-logo">
									<img src={partner16} alt="Partner 7" />
								</div>
								<div className="partner-logo">
									<img src={partner17} alt="Partner 7" />
								</div>
								<div className="partner-logo">
									<img src={partner18} alt="Partner 7" />
								</div>
								<div className="partner-logo">
									<img src={partner19} alt="Partner 7" />
								</div>
								<div className="partner-logo">
									<img src={partner20} alt="Partner 7" />
								</div>
								<div className="partner-logo">
									<img src={partner21} alt="Partner 7" />
								</div>
								<div className="partner-logo">
									<img src={partner22} alt="Partner 7" />
								</div>
								<div className="partner-logo">
									<img src={partner23} alt="Partner 7" />
								</div>
								<div className="partner-logo">
									<img src={partner24} alt="Partner 7" />
								</div>
								<div className="partner-logo">
									<img src={partner25} alt="Partner 7" />
								</div>
								<div className="partner-logo">
									<img src={partner26} alt="Partner 7" />
								</div>
							</Slider>
						</center>
					</div>
				</div>

				{/* Contact Section */}
				<div className="contact">
					<div className="contact-form">
						<h2>GET IN TOUCH</h2>
						<form ref={form} onSubmit={sendEmail}>
							<div className="form-group">
								<label>Name</label>
								<input type="text" name="user_name" required />
							</div>
							<div className="form-group">
								<label>Email</label>
								<input type="email" name="user_email" required />
							</div>
							<div className="form-group">
								<label>Phone Number</label>
								<input type="tel" name="user_phone" required />
							</div>
							<div className="form-group">
								<label>Message</label>
								<textarea
									className="textarea"
									name="message"
									required
								></textarea>
							</div>
							<button type="submit">SEND</button>
						</form>
					</div>
					<div className="map" ref={mapRef}>
						{mapLoaded ? (
							<iframe
								title="map"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0542019755667!2d79.90233147503203!3d6.884111018867636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b37ee08f489%3A0xbfdc1704c638e75d!2sDoctor%20of%20Bat!5e0!3m2!1sen!2slk!4v1713622321735!5m2!1sen!2slk"
								width="600"
								height="450"
								style={{ border: 0 }}
								allowFullScreen=""
							></iframe>
						) : (
							<p>Loading map...</p> // Placeholder until the map is loaded
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;

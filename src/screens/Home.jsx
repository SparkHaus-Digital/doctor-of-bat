import React, { useState } from 'react';
import '../css/HomePage.css';
import Styles from '../css/Contactus.module.css';
import '@fortawesome/fontawesome-free/css/all.css';
import img1 from '../assets/landing_image1.png';
import img2 from '../assets/landing_image1.png';
import img3 from '../assets/landing_image1.png';
import logo from '../assets/image.png';
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
		setCurrentImageIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const nextPartner = () => {
		setPartnerIndex((prevIndex) =>
			prevIndex === partners.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevPartner = () => {
		setPartnerIndex((prevIndex) =>
			prevIndex === 0 ? partners.length - 1 : prevIndex - 1
		);
	};

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5, // Number of slides to show at once
		slidesToScroll: 1, // Number of slides to scroll at a time
		autoplay: true, // Enable auto sliding
		autoplaySpeed: 2000, // Slide change interval in milliseconds
	};

	return (
		<div>
			<div className="home-container">
				<div
					className="landing-image"
					style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
				>
					<div className="overlay"></div>
					<h1 className="title">BAT REPAIR</h1>
					<div className="arrow-icons-left">
						<i className="fas fa-angle-left" onClick={prevImage}></i>
					</div>
					<div className="arrow-icons-right">
						<i className="fas fa-angle-right" onClick={nextImage}></i>
					</div>
					<div className="btn-div">
						<button className="view-more-btn">VIEW MORE</button>
					</div>
				</div>

				<div className="services-container">
					<h3 className="topic">OUR SERVICES</h3>
					<div className="images-container">
						<div className="service-1">
							<p className="img-text">Bat Repair</p>
						</div>
						<div className="service-1">
							<p className="img-text">Delivery</p>
						</div>
						<div className="service-1">
							<p className="img-text">Bat Maintain</p>
						</div>
					</div>
				</div>

				<div className="partners-container">
					<h3 className="topic">OUR PARTNERS</h3>
					{/* <div className="slider-container">
						<Slider {...settings}>
							<div>
								<h3>Slide 1</h3>
							</div>
							<div>
								<h3>Slide 2</h3>
							</div>
							<div>
								<h3>Slide 3</h3>
							</div>
						</Slider>
					</div> */}
				</div>
				<div className={Styles.background}>
					<div className={Styles.contactContainer}>
						{/* Contact Form */}
						<div className={Styles.contactForm}>
							<h2 className={Styles.formHeading}>Get in Touch</h2>
							<form>
								<label htmlFor="name">Name:</label>
								<input type="text" id="name" name="name" />
								<label htmlFor="email">Email:</label>
								<input type="email" id="email" name="email" />
								<label htmlFor="phone">Phone Number:</label>
								<input type="tel" id="phone" name="phone" />
								<label htmlFor="inquiry">Inquiry/Message:</label>
								<textarea
									id="inquiry"
									name="inquiry"
									rows="4"
									cols="50"
									className={Styles.textarea}
								></textarea>
								<button type="submit">Submit</button>
							</form>
						</div>
						{/* Google Map Locator */}
						<div className={Styles.mapLocator}>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0542019755667!2d79.90233147503203!3d6.884111018867636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b37ee08f489%3A0xbfdc1704c638e75d!2sDoctor%20of%20Bat!5e0!3m2!1sen!2slk!4v1713622321735!5m2!1sen!2slk"
								width="600"
								height="450"
								style={{ border: '0' }}
								allowfullscreen=""
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;

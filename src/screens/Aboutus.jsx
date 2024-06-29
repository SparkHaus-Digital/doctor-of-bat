import React from 'react';
import '../css/AboutusPage.css';
import TestimonialSlider from '../components/TestimonialSlider';
import TestimonialCard from '../components/TestimonialCard';
import OwnerImage from '../assets/owner-image.jpg';
import Slider from 'react-slick';


const AboutUsPage = () => {
	const settings2 = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};
	const testimonials = [
        { name: 'John Doe', image: OwnerImage, description: 'Testimonial description goes here.' },
        { name: 'John Doe', image: OwnerImage, description: 'Testimonial description goes here.' },
        { name: 'John Doe', image: OwnerImage, description: 'Testimonial description goes here.' },
        { name: 'John Doe', image: OwnerImage, description: 'Testimonial description goes here.' },
    ];
	return (
		<div>
			<div className="about-us-page">
				<div className="about-us-section">
					<div className="about-us-left">
						<h2 className="section-title">Behind the success</h2>
						<p className="section-description">
							Description about the company goes here.
						</p>
					</div>
					<div className="about-us-right">
						<h2 className="section-title">Dinura Abeygunawardane</h2>
						<p className="owner-title">Founder of Doctor of Bat</p>
						<img src={OwnerImage} alt="Owner" className="owner-image" />
					</div>
				</div>
				<div className="testimonial-section">
					<h2 className="section-title">People that worked with us</h2>
					{/* <TestimonialSlider /> */}
					<div className="slider-div">
						<center>
							<Slider {...settings2}>
								{testimonials.map((testimonial, index) => (
									<TestimonialCard key={index} {...testimonial} />
								))}
							</Slider>
						</center>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUsPage;

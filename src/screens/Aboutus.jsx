import React, { useEffect } from 'react';
import '../css/AboutusPage.css';
import TestimonialCard from '../components/TestimonialCard';
import OwnerImage from '../assets/owner-image.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutUsPage = () => {
	const settings2 = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 768, // Mobile view
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const testimonials = [
		{
			name: 'Roshene Silva ',
			title: 'Test Cricketer',
			description:
				'“I always like to maintain the condition of the bat without changing it. Udayasiri does it for me. I think the service is inexhaustible.”',
		},
		{
			name: 'Anusha Samaranayake',
			title: 'Former National Player And National Coach',
			description: '“Udayasiri’s specialty is that the bat can be made in the usual way, whether to make a bind or to adjust the handle, it is done correctly.”',
		},
		
	];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<div className="about-us-page">
				<div className="about-us-section">
					<div className="about-us-left">
						<h2 className="section-title2">Behind The Success</h2>
						<p className="section-description">
							<p>
							“When I joined the field of cricket, despite its rapid popularity
							as a sport, the additional fields and services related to it were
							not available here. The bat repair service was especially lacking
							here. I started this service to fulfill that need. Gradually, with
							the popularity of school and domestic-level cricket, the need for
							bat repair increased.
							</p>
							<p>
							In my opinion, the skill of the batsman as
							well as the quality of the bat is essential for a long innings or
							scoring runs in cricket. So, it is very important to maintain the
							quality of that bat. Because the cricket bat is one of the most
							sensitive pieces of cricket equipment, it is correct to say that
							it is sensitive to the ball, the nature of its handling, as well
							as natural factors such as air humidity.  
							</p>
							<p>
							Over time, the bat may develop cracks, dents, or weakened areas that can affect its
							performance. Repairing these issues can help restore the bat's
							integrity, ensuring optimal performance and durability.
							</p>
							<p>
							Over three decades, I've consistently and responsibly prepared bats, driven
							only by your trust. Your belief in me is what keeps me going in
							this field. I promise to continue enhancing your cricket bat's
							strength with each preparation.”
							</p>
						</p>
					</div>
					<div className="about-us-right">
						<img src={OwnerImage} alt="Owner" className="owner-image" />
						<h2 className="section-title">Udayasiri Jayawardana</h2>
						<p className="owner-title">Founder of Doctor of Bat</p>
					</div>
				</div>
				<div className="testimonial-section">
					<h2 className="section-title2">People that worked with us</h2>
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

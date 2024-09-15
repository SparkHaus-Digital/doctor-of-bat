import React, { useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import '../css/HomePage.css';

const ContactusPage = () => {
	const form = useRef();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_f88cxsm', 'template_awyzd5s', form.current, '4CAMR-pcPK2a7P4XR')
			.then((result) => {
				console.log(result.text);
				alert('Message sent successfully!');
			}, (error) => {
				console.log(error.text);
				alert('Failed to send message, please try again later.');
			});

		e.target.reset();
	};

	return (
		<div>
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
							<textarea className='textarea' name="message" required></textarea>
						</div>
						<button type="submit">SEND</button>
					</form>
				</div>
				<div className="map">
					<iframe
						title="map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0542019755667!2d79.90233147503203!3d6.884111018867636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b37ee08f489%3A0xbfdc1704c638e75d!2sDoctor%20of%20Bat!5e0!3m2!1sen!2slk!4v1713622321735!5m2!1sen!2slk"
						width="600"
						height="450"
						style={{ border: 0 }}
						allowFullScreen=""
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default ContactusPage;

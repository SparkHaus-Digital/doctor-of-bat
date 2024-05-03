import Styles from '../css/Contactus.module.css';

function ContactUsPage() {
	return (
		<div>
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
	);
}

export default ContactUsPage;

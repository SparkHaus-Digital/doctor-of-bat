import React from 'react';
import '../css/HomePage.css'

const ContactusPage = () => {
    return(
        <div>
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
							{/* <div className="form-group">
								<label>How did you find us?</label>
								<select>
									<option value="social_media">Facebook</option>
									<option value="search_engine">Tiktok</option>
									<option value="search_engine">Website</option>
								</select>
							</div> */}
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

				{/* Footer */}
				<footer className="footer">
					<p>&copy; 2024 Bat Repair Shop. All Rights Reserved.</p>
				</footer>
        </div>
    )
}

export default ContactusPage;
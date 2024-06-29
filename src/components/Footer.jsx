import React from "react";
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import license from '../assets/license.png'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
	return (
		<div className="footer">
			<div className="sb__footer section__padding">
				<div className="sb__footer-links">
					<div className="sb__footer-links-div">
						<h4 className="footer_title">OFFICIAL BAT <br /> REPAIR PARTNER<br />OF SRI LANKA<br />NATIONAL TEAM</h4><br />
					</div>
					<div className="sb__footer-links-div footer_mid">
						<FaLocationDot className="reacticon" />
						<h4>Address</h4>
						<span className="span">
							No. 65 Talawatugoda Rd, Sri Jayawardenepura Kotte 10100
						</span>
					</div>
					<div className="sb__footer-links-div footer_mid">
						<FaPhoneAlt className="reacticon" />
						<h4>Phone</h4>
						<span className="span">
							+94 77 718 4814
						</span>
					</div>
					<div className="sb__footer-links-div footer_mid">
						<MdEmail className="reacticon" />
						<h4>Email</h4>
						<span className="span">
							doctorofbat@gmail.com
						</span>
					</div>
					<div className="sb__footer-links-div">
						<h4>Follow us</h4>
						<div className="socialmedia">
							<p>
								<a href="https://www.facebook.com/doctorofbat">
									<FontAwesomeIcon icon={faFacebook} className="socialmedia_icon" />
								</a>
							</p>
							<p>
								<a href="/employer">
									<FontAwesomeIcon icon={faInstagram} className="socialmedia_icon" />
								</a>
							</p>
							<p>
								<a href="https://www.tiktok.com/@doctorofbat">
									<FontAwesomeIcon icon={faLinkedin} className="socialmedia_icon" />
								</a>
							</p>
							<p>
								<a href="/employer">
									<FontAwesomeIcon icon={faYoutube} className="socialmedia_icon" />
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="sb__footer-below">
				<div className="sb__footer-copyright">
					<span className="copyright">
						@{new Date().getFullYear()} <b>Sparkhaus</b>. All Right Reserved.<br />
					</span><br />
				</div>
			</div>

		</div>
	)
}
export default Footer;
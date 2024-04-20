import React, { useState, useEffect } from 'react';
import Styles from '../css/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<div>
			<footer className={Styles.footer}>
				<div className={Styles.row}>
					<div className={Styles.column}>
						<h1>OFFICIAL BAT<br />REPAIR PARTNER<br />OF SRI LANKA<br />NATIONAL TEAM</h1><br />
					</div>
					<div className={Styles.column}>

					</div>
					<div className={Styles.column}>
						<p className={Styles.Follow}>Follow us</p><br />
						<div className={Styles.row2}>
							<div>
								<FontAwesomeIcon icon={faFacebook} size="2x" />
							</div>
							<div>
								<FontAwesomeIcon icon={faInstagram} size="2x" />
							</div>
							{/* <div>
								<FontAwesomeIcon icon={faLinkedin} size="2x" />
							</div> */}
							<div>
								<FontAwesomeIcon icon={faTiktok} size="2x" />
							</div>
							<div>
								<FontAwesomeIcon icon={faYoutube} size="2x" />
							</div>
						</div>
					</div>
				</div><br />
				<div className={Styles.row}>
					<p className={Styles.cp}>Copyright 2024, designed by Sparkhaus</p>
				</div>
			</footer >
		</div >
	);
}

export default Footer;

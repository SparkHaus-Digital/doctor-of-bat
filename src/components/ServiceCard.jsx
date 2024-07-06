import React from 'react';
import '../css/ServiceCard.css';

function ServiceCard({ image, title, description }) {
	return (
		<div className="service-card">
			<div className="card-image">
				<img src={image} alt="Service" />
			</div>
            <p className='card-title'>{title}</p>
			<div className="card-description">
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ServiceCard;

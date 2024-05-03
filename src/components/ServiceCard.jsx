import React from 'react';
import '../css/ServiceCard.css';

function ServiceCard({ serviceName, backgroundImage }) {
    return (
        <div className="service-card">
            <div className="service-background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <div className="service-overlay">{serviceName}</div>
        </div>
    );
}

export default ServiceCard;

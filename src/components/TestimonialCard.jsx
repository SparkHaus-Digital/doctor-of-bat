import React from 'react';
import '../css/TestimonialCard.css';

function TestimonialCard({ name, title, image, description }) {
    return (
        <div className="testimonial-card">
            <div className="testimonial-top">
                <div className='testimonial-person'>
                <h3 className="testimonial-name">{name}</h3>
                <h4>{title}</h4>
                </div>
                <div className="testimonial-image" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
            <div className="testimonial-description">{description}</div>
        </div>
    );
}

export default TestimonialCard;

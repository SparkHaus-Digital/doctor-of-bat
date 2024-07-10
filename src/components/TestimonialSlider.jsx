import React from 'react';
import TestimonialCard from '../components/TestimonialCard';
import '../css/TestimonialSlider.css';
import OwnerImage from '../assets/owner-image.jpg';

function TestimonialSlider() {
    // Assuming testimonial data is available in an array
    const testimonials = [
        { name: 'John Doe', image: OwnerImage, description: 'dckdcdjcnkdc dkcdcndl dcldckzc zlcnlclczc zkccnzlkczc zlkcz  kczcnklz' },
        { name: 'John Doe', image: OwnerImage, description: 'Testimonial description goes here.' },
        { name: 'John Doe', image: OwnerImage, description: 'Testimonial description goes here.' },
        { name: 'John Doe', image: OwnerImage, description: 'Testimonial description goes here.' },
    ];

    return (
        <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
                
            ))}
        </div>
    );
}

export default TestimonialSlider;

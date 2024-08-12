import React from 'react';
import TestimonialCard from '../components/TestimonialCard';
import '../css/TestimonialSlider.css';
import OwnerImage from '../assets/owner-image.jpg';

function TestimonialSlider() {
    // Assuming testimonial data is available in an array
    const testimonials = [
        { name: 'Roshene Silva (Test Cricketer)', image: OwnerImage, description: '“I always like to maintain the condition of the bat without changing it. Udayasiri does it for me. I think the service is inexhaustible.” ' },
        { name: 'Anusha Samaranayake (former nation player and national coach)', image: OwnerImage, description: '“Udayasiri’s specialty is that the bat can be made in the usual way, whether to make a bind or to adjust the handle, it is done correctly.”' },
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

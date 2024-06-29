import React from 'react';
import ServiceCard from '../components/ServiceCard';
import '../css/ServicePage.css';
import service1 from '../assets/bat_repair.png';

const ServicesPage = () => {
	return (
		<div>
			<div className="services-page">
				<h1 className="page-title">CRICKET BAT SERVICES & REPAIR</h1>
				<p className="page-description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
					convallis libero in dui lobortis, ut ultricies mauris pharetra.
				</p>
				<div className="services-container">
					<ServiceCard backgroundImage={service1} serviceName="Service 1" />
                    <ServiceCard backgroundImage={service1} serviceName="Service 1" />
                    <ServiceCard backgroundImage={service1} serviceName="Service 1" />
                    <ServiceCard backgroundImage={service1} serviceName="Service 1" />
                    <ServiceCard backgroundImage={service1} serviceName="Service 1" />
                    <ServiceCard backgroundImage={service1} serviceName="Service 1" />
                    <ServiceCard backgroundImage={service1} serviceName="Service 1" />
                    <ServiceCard backgroundImage={service1} serviceName="Service 1" />
				</div>
			</div>
		</div>
	);
};

export default ServicesPage;

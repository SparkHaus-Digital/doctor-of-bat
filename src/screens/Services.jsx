import React from 'react';
import ServiceCard from '../components/ServiceCard';
import '../css/ServicePage.css';
import service1 from '../assets/bat_repair.png';
import { useEffect, useState } from 'react';
import client from '../constraint/contentfulClient';

const ServicesPage = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		client
			.getEntries({ content_type: 'service' })
			.then((response) => {
				setServices(response.items);
			})
			.catch(console.error);
	}, []);
	return (
		<div>
			<div className="services-page">
				<h1 className="page-title">CRICKET BAT SERVICES & REPAIR</h1>
				<p className="page-description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
					convallis libero in dui lobortis, ut ultricies mauris pharetra.
				</p>
				<div className="services-container">
					{services.map((service) => (
						<div key={service.sys.id} className="service-card">
							<ServiceCard
								key={service.sys.id}
								image={service.fields.image.fields.file.url}
								title={service.fields.title}
								description={service.fields.description}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ServicesPage;

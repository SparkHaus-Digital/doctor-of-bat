import React, { Suspense, useEffect, useState } from 'react';
import '../css/ServicePage.css';
import client from '../constraint/contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ServiceCard = React.lazy(() => import('../components/ServiceCard'));

const ServicesPage = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
					At our workshop, we offer a comprehensive range of services to
					maintain and enhance the performance of your cricket bat. From
					traditional oil seasoning and crack repairs to custom handle reshaping
					and precise weight balancing, our skilled technicians use proven
					methods to ensure your bat is in peak condition. Whether it's applying
					protective facings, re-binding handles, or restoring your bat to its
					original glory, we are dedicated to preserving the quality and
					longevity of your equipment.
				</p>
				<p className="page-description">
					<b>
						<em>Instructions</em>
					</b>{' '}
					- You can send your cricket bat to our workshop from anywhere in the
					world. Please note that we do not arrange or cover shipping costs. If
					you plan to send your bat via courier, kindly contact us before
					dispatching.Once your bat is ready, you have the option to pick it up from our
					workshop or have it shipped to your specified address. We will provide
					you with tracking details once your bat has been dispatched, or we
					will notify you when it is ready for pickup.
				</p>
				<Suspense fallback={<div>Loading services...</div>}></Suspense>
				<div className="services-container">
					{services.map((service) => (
						<div key={service.sys.id} className="service-card">
							<ServiceCard
								key={service.sys.id}
								image={`${service.fields.image.fields.file.url}?w=500&h=500&fit=thumb&f=face&fm=webp`}
								title={service.fields.title}
								description={documentToReactComponents(service.fields.summery)}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ServicesPage;

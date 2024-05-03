import Card from '../components/ServiceCard';
import '../css/ServicesPage.css'
import filter_icon from '../assets/filter.png'

function ServicesPage() {
	const services = [
		{
		  imageUrl: 'service1.jpg',
		  topic: 'Service 1',
		  description: 'Description for Service 1',
		},
		{
		  imageUrl: 'service2.jpg',
		  topic: 'Service 2',
		  description: 'Description for Service 2',
		},
		// Add more services as needed
	  ];
	return (
		<div>
			<div className="container">
				<h3 className="topic">CRICKET BAT SERVICES & REPAIR</h3>
				<p>
					Dsckdncdskcnksn snckdcn sdkccdsnc dscdnckdc sskcncnak cslkcnlcn djdn
					jkncdknc , mdkckdcnknkcknkanckaxmamxsmx snnsa akjxnk ajxk aknkcna
					Dsckdncdskcnksn snckdcn sdkccdsnc dscdnckdc sskcncnak cslkcnlcn djdn
					jkncdknc , mdkckdcnknkcknkanckaxmamxsmx snnsa akjxnk ajxk aknkcna
					Dsckdncdskcnksn snckdcn sdkccdsnc dscdnckdc sskcncnak cslkcnlcn djdn
					jkncdknc , mdkckdcnknkcknkanckaxmamxsm.
				</p>
				<div className="div-btn">
					<img src={filter_icon} alt="filter_icon" className='filter-icon'/>
					<button className="btn">Filter</button>
				</div>
				<div className="service-card-container">
					{services.map((service, index) => (
						<Card key={index} {...service} />
					))}
				</div>
			</div>
		</div>
	);
}

export default ServicesPage;

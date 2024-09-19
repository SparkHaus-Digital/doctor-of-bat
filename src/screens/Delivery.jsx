import React, { useEffect } from 'react';
import '../css/DeliveryPage.css';
import delivery from '../assets/Delivery.webp'

const DeliveryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="delivery">
      <div className="container">
        <h2>DELIVERY INFORMATION</h2>
        <div className='image-div'>
        <img src={delivery} alt="delivery" />
        </div>
        <div className="section">
          <h3>For International Customers</h3>
          <p><strong>Step 1:</strong> Contact Us<br />
            Start by reaching out through our website, phone, or email. We'll discuss your specific requirements and provide details about the repair process for your cricket bat.</p>
          <p><strong>Step 2:</strong> Send Your Cricket Bat<br />
            After our discussion, securely package your cricket bat and send it via a trusted international courier service to the following address:
          </p>
          <address>
            Doctor of Bat<br />
            No. 65, Thalawathugoda Road, Pita Kotte,<br />
            Sri Lanka.<br />
            077 611 5265 / 0777 184 814
          </address>
          <p>Include any relevant information or instructions inside the package.</p>
          <p><strong>Step 3:</strong> Repair and Safe Return<br />
            Upon receiving your bat, we will assess and perform the necessary repairs. Once repairs are completed, we will arrange for safe return shipping to your address.
          </p>
        </div>

        <div className="section">
          <h3>For Local Customers</h3>
          <p><strong>Step 1:</strong> Contact Us<br />
            Reach out via our website, telephone, or email to discuss your cricket bat information and repair needs. Our team is here to assist you with any questions.
          </p>
          <p><strong>Step 2:</strong> Send Your Cricket Bat<br />
            Use any trusted courier service to send your cricket bat to:
          </p>
          <address>
            Doctor of Bat,<br />
            No. 65, Thalawathugoda Road, Pita Kotte,<br />
            Sri Lanka.<br />
            077 611 5265 / 0777 184 814
          </address>
          <p>Ensure it's packaged securely to prevent any damage during transit.</p>
          <p><strong>Step 3:</strong> Quick Repair and Delivery<br />
            After we complete the repairs, we'll courier your cricket bat back to your doorstep within one day. For customers in Colombo, we offer a cash-on-delivery option.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;

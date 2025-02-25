import React from 'react';
import './index.css';

const Payment = () => {
  return (
    <section className="payment">
      <h2>Payment Terms & Cancellation Policy</h2>
      <div className="payment-content">
        <h3>Payment Terms</h3>
        <ul>
          <li>100% of the tour cost is required at the time of booking.</li>
          <li>50% of the tour cost will be given back as credit if the tour is canceled 60 days before the travel dates.</li>
          <li>No refund is provided if the tour is canceled within 30 days of the travel dates.</li>
        </ul>
        <h3>Cancellation Policy</h3>
        <p>
          Guests are advised to read the cancellation policy carefully before making a booking. For any cancellations, please contact us at <a href="mailto:info@travelunbounded.com">info@travelunbounded.com</a>.
        </p>
      </div>
    </section>
  );
};

export default Payment;
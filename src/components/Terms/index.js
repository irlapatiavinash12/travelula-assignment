import React from 'react';
import './index.css';

const Terms = () => {
  return (
    <section className="terms">
      <h2>Terms & Conditions</h2>
      <div className="terms-content">
        <ul>
          <li>Costs are based on 4 pax per vehicle for game drives and 5 pax per vehicle for internal transfers.</li>
          <li>Stay at Mara would be at Zebra Plains, Loyk Camp, or Julia River Camp.</li>
          <li>Last day to confirm the tour is August 14th, 2023.</li>
          <li>Guests traveling should have valid passports with a minimum of 6 months validity from the date of return.</li>
          <li>Guests must be administered with Yellow Fever and Oral Polio vaccinations at least 15 days prior to travel.</li>
          <li>Guests should provide international travel insurance 15 days prior to travel.</li>
          <li>Lunch on the return on Nov 17th is not part of the package.</li>
          <li>Groups above 5 can avail special discounts.</li>
          <li>Vehicles are provided only for internal transfers and game drives.</li>
        </ul>
        <p>
          For more details, please refer to the full terms and conditions on <a href="http://www.travelunbounded.com" target="_blank" rel="noopener noreferrer">www.travelunbounded.com</a>.
        </p>
      </div>
    </section>
  );
};

export default Terms;
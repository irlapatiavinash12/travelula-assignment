import React from 'react';
import './index.css';

const Costs = () => {
  return (
    <section className="costs">
      <h2>Costs</h2>
      <ul>
        <li>Cost per adult, Ex Nairobi - USD 1582/- incl of local taxes</li>
        <li>Cost per child (4 to 9 years), Ex Nairobi - USD 1400/- incl of taxes</li>
        <li className="special-offer">Special Independence Day offer valid for bookings made on or before August 14th 2023 - Cost per adult - USD 1322</li>
        <li className="special-offer">Special Independence Day offer valid for bookings made on or before August 14th 2023 - Cost per child - USD 1127</li>
      </ul>
    </section>
  );
};

export default Costs;

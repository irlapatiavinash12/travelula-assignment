import React from 'react';
import './index.css';

const Inclusions = () => {
  return (
    <section className="inclusions">
      <h2>Inclusions & Exclusions</h2>
      <div className="inclusions-content">
        <div className="inclusions-list">
          <h3>Inclusions</h3>
          <ul>
            <li>Internal transfers from JKIA airport to Maasai Mara and back by Landcruiser on a shared basis.</li>
            <li>Stay on twin-sharing basis at Maasai Mara either at Zebra Plains, Loyk Camp, or Julia River Camp.</li>
            <li>Game drives in Landcruisers on a shared basis - minimum 4 pax per vehicle.</li>
            <li>Water during game drives.</li>
            <li>All meals as mentioned in the itinerary.</li>
            <li>Park fees and guide fees.</li>
            <li>English-speaking guides/drivers.</li>
          </ul>
        </div>
        <div className="exclusions-list">
          <h3>Exclusions</h3>
          <ul>
            <li>Any airfare or VISA charges.</li>
            <li>Personal and medical expenses during the tour.</li>
            <li>Tips and gratuities.</li>
            <li>Anything not mentioned in the inclusions section.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Inclusions;
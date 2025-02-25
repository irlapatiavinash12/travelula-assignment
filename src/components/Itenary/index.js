import React from 'react';
import './index.css';

const Itinerary = () => {
  return (
    <section className="itinerary">
      <h2>Itinerary</h2>
      <div className="timeline">
        {/* Day 1 */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Day 1 - Nov 14th 2023</h3>
            <img src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1740462556/drivers_picking_ylza7g.jpg" alt="drivers picking" className='day-image-styling'/>
            <p>
              Our drivers would pick you up from the JKIA airport at 7AM. You would board our 4x4 Landcruisers to embark on your journey to Maasai Mara.
            </p>
          </div>
        </div>

        {/* Day 2 */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Day 2 - Nov 15th 2023</h3>
            <img src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1740463198/tourists_sipping_coffee_onxuoi.jpg" alt="drivers picking" className='day-image-styling'/>
            <p>
              Wake up early and head to the restaurant for a hot cup of coffee or tea. The mornings are cold at Mara, so do wear your fleece jacket for the morning game drive.
            </p>
          </div>
        </div>

        {/* Day 3 */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Day 3 - Nov 16th 2023</h3>
            <img src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1740463943/day3_said1f.jpg" alt="exploring wildlife" className='day-image-styling'/>
            <p>
              Today is a very busy day for you at Mara. Wake up early, freshen yourself, have a hot beverage, and jump into your designated vehicles.
            </p>
          </div>
        </div>

        {/* Day 4 */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Day 4 - Nov 17th 2023</h3>
            <img src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1740464388/Tourists_at_Mara_waking_up_leisurely_enjoying_a_nice_and_heavy_breakfast_while_discussing_their_experiences_with_their_group_in_a_16_9_ratio_ynaqqh.jpg" alt="drivers picking" className='day-image-styling'/>
            <p>
              Wake up at leisure, have a nice and heavy breakfast while you discuss your experience with your group.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
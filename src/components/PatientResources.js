import React from 'react';
import './PatientResources.css';
import resourceImage1 from '../assets/pr1.jpeg'; // Ensure this path is correct
import resourceImage2 from '../assets/pr2.jpeg'; // Ensure this path is correct
import resourceImage3 from '../assets/pr3.jpeg'; // Ensure this path is correct

const PatientResources = () => {
  return (
    <section id="patient-resources" className="patient-resources">
      <h2>Patient Resources</h2>
      <div className="resources-container">
        <div className="resource-item">
          <img src={resourceImage1} alt="Resource 1" className="resource-image"/>
          <div className="resource-info">
            <h3>Educational Articles</h3>
            <p>Access a wide range of educational articles on various health topics to stay informed.</p>
            <a href="#learn-more">Learn more</a>
          </div>
        </div>
        <div className="resource-item">
          <img src={resourceImage2} alt="Resource 2" className="resource-image"/>
          <div className="resource-info">
            <h3>Health Tracking Tools</h3>
            <p>Utilize our advanced tools to track your health metrics and improve your wellness journey.</p>
            <a href="#learn-more">Learn more</a>
          </div>
        </div>
        <div className="resource-item">
          <img src={resourceImage3} alt="Resource 3" className="resource-image"/>
          <div className="resource-info">
            <h3>Support Groups</h3>
            <p>Join support groups to connect with others and share experiences and advice.</p>
            <a href="#learn-more">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientResources;

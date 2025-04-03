import React, { useState, useEffect } from 'react';
import './Experience.css';
import DataLogo from "../assets/DataLogo.jpeg";
import BrightLogo from "../assets/BrightLogo.jpeg";
import HolidayLogo from "../assets/holiday_logo.png"

const Services = () => {
  const [expandedSection, setExpandedSection] = useState(null); // Track which section is expanded

  useEffect(() => {
    const handlePopState = () => {
      // Close the expanded section when the back button is pressed
      setExpandedSection(null);
    };

    // Add a new entry to the browser's history stack when a section is expanded
    if (expandedSection) {
      window.history.pushState({ expanded: expandedSection }, "");
      document.body.style.overflow = 'hidden';  // Disable body scroll
    } else {
      document.body.style.overflow = 'auto';    // Re-enable body scroll when closed
    }

    // Listen for back/forward navigation
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [expandedSection]);

  const toggleDatalyzerDetails = () => {
    setExpandedSection(expandedSection === 'datalyzer' ? null : 'datalyzer');
  };

  const toggleBrightChampsDetails = () => {
    setExpandedSection(expandedSection === 'brightchamps' ? null : 'brightchamps');
  };
  const toggleHolidayChannelDetails = () => {
    setExpandedSection(expandedSection === 'holidaychannel' ? null : 'holidaychannel');
  };

  return (
    <section id="services" className="services">
      <h2>Experience</h2>
      <div className="services-container">
        {/* Datalyzer Section */}
        {expandedSection === null || expandedSection === 'datalyzer' ? (
          <div
            className={`service-item ${expandedSection === 'datalyzer' ? 'expanded' : ''}`}
            onClick={toggleDatalyzerDetails} 
          >
            <img src={DataLogo} className="service-icon" alt="Datalyzer Logo" />
            <h3>Datalyzer</h3>
            <h4>Software Engineer</h4>
            <p id='des'>
              Two years of professional experience in both software engineering and education. 
              As a Software Engineer at Datalyzer International Inc. <br></br>(May 2021 – July 2023)
            </p>
            <h4>Bengaluru India</h4>
            {expandedSection === 'datalyzer' && (
              <div className="detailed-description full-screen" onClick={(e) => e.stopPropagation()}>
                <h3>Software Engineer at Datalyzer International Inc.</h3>
                <p><strong>Role:</strong> Software Engineer</p>
                <p><strong>Duration:</strong> May 2021 – July 2023</p>
                <p>
                  At Datalyzer International Inc., I was responsible for the design and development of high-performance software solutions.
                  I led the creation of critical systems that supported business operations and customer-facing applications, ensuring 
                  scalability and robustness in a fast-paced environment.
                </p>
                <ul>
                  <li>
                    <strong>RESTful API Development:</strong> Led the design and implementation of scalable RESTful APIs in C# to 
                    support various functionalities across the platform, improving data exchange mechanisms and integrating seamlessly 
                    with external systems.
                  </li>
                  <li>
                    <strong>Database Optimization:</strong> Streamlined database operations by optimizing relational database schemas, 
                    ensuring data integrity and performance across high-transaction volumes. This improved the system's overall 
                    performance by 50%, reducing query response times and enhancing user experience.
                  </li>
                  <li>
                    <strong>Front-end Development with Angular:</strong> Worked closely with the front-end team to enhance the platform’s 
                    UI using Angular, ensuring seamless interaction between the client-side and back-end services. Implemented 
                    dynamic features and improved user engagement by 20%.
                  </li>
                  <li>
                    <strong>Performance Optimization:</strong> Implemented advanced lazy loading techniques and optimized the application’s 
                    architecture, leading to 50% faster page load times. This significantly boosted user retention and satisfaction.
                  </li>
                  <li>
                    <strong>System Monitoring & Support:</strong> Provided on-call technical support to ensure 99.9% system uptime, 
                    resolving critical issues quickly and reducing downtime by 30%.
                  </li>
                  <li>
                    <strong>Collaboration & Leadership:</strong> Collaborated with cross-functional teams, including product management, 
                    design, and DevOps, to drive product enhancements from conception to deployment. Mentored junior developers, sharing 
                    best practices in software design and development.
                  </li>
                </ul>
                <button onClick={toggleDatalyzerDetails} className="close-btn">Close</button>
              </div>
           
            )}
          </div>
        ) : null}

     {/* BrightChamps Section */}
{expandedSection === null || expandedSection === 'brightchamps' ? (
  <div
    className={`service-item ${expandedSection === 'brightchamps' ? 'expanded' : ''}`}
    onClick={toggleBrightChampsDetails}
  >
    <img src={BrightLogo} className="service-icon" alt="BrightChamps Logo" />
    <h3>BrightChamps</h3>
    <h4>Software Engineer (Freelance)</h4>
    <p id='des'>
      Developed scalable web and mobile applications, implemented cloud billing analysis tools, 
      and optimized API integrations to enhance system efficiency at BrightChamps Pvt. Ltd. <br></br>(March 2021 – August 2023)
    </p>
    <h4>Bengaluru India</h4>
    {expandedSection === 'brightchamps' && (
      <div className="detailed-description full-screen" onClick={(e) => e.stopPropagation()}>
        <h3>Software Engineer at BrightChamps Pvt. Ltd.</h3>
        <p><strong>Role:</strong> Software Engineer</p>
        <p><strong>Duration:</strong> March 2021 – August 2023</p>
        <p>
          As a Software Engineer at BrightChamps, I contributed to the development of scalable 
          applications, API integrations, and cloud-based solutions while improving system performance 
          and user experience.
        </p>
        <ul>
          <li>
            Developed and maintained scalable web and mobile applications using JavaScript, Python, C++, and HTML to enhance performance and reliability.
          </li>
          <li>
            Designed and built a cloud billing analysis tool using GCP (BigQuery, DataFlow) to enable real-time spend analysis for leadership decision-making.
          </li>
          <li>
            Integrated RESTful APIs to establish seamless communication between front-end and back-end systems, improving system responsiveness.
          </li>
          <li>
            Enhanced UI/UX performance using CSS Sprites and mobile-first design, reducing load times and improving user interactions.
          </li>
          <li>
            Optimized SQL queries and database performance in PostgreSQL, reducing query execution time and improving data retrieval speed.
          </li>
          <li>
            Implemented authentication and security measures, including OAuth and JWT, ensuring secure access to web applications.
          </li>
          <li>
            Developed reusable React components to improve code efficiency and maintainability across multiple projects.
          </li>
          <li>
            Automated deployment processes using CI/CD pipelines, improving software release cycles and reducing manual effort.
          </li>
          <li>
            Conducted thorough debugging and performance profiling, reducing system latency and improving overall application stability.
          </li>
          <li>
            Collaborated with cross-functional teams to troubleshoot production issues, ensuring minimal downtime and quick resolution.
          </li>
        </ul>
        <p>
          My work at BrightChamps strengthened my expertise in full-stack development, cloud computing, and performance optimization, 
          enabling me to deliver high-quality, scalable solutions.
        </p>
        <button onClick={toggleBrightChampsDetails} className="close-btn">Close</button>
      </div>
    )}
  </div>
        ) : null}
  {/* Holiday Channel Section */}
{expandedSection === null || expandedSection === 'holidaychannel' ? (
  <div
    className={`service-item ${expandedSection === 'holidaychannel' ? 'expanded' : ''}`}
    onClick={toggleHolidayChannelDetails}
  >
    <img src={HolidayLogo} className="service-icon" alt="Holiday Channel Logo" />
    <h3>Holiday Channel</h3>
    <h4>Software Engineer Intern</h4>
    <p id='des'>
      Contributing to the development of full-stack web applications, enhancing backend scalability, and optimizing frontend performance at Holiday Channel. <br></br>(Current)
    </p>
    <h4>Colorado USA</h4>
    {expandedSection === 'holidaychannel' && (
      <div className="detailed-description full-screen" onClick={(e) => e.stopPropagation()}>
        <h3>Software Engineer Intern at Holiday Channel</h3>
        <p><strong>Role:</strong> Software Engineer Intern</p>
        <p><strong>Duration:</strong> Current</p>
        <p>
          As a Software Engineer Intern at Holiday Channel, I am actively involved in developing scalable web applications, optimizing backend processes, and improving user experience through frontend enhancements.
        </p>
        <ul>
          <li>
            Developing and integrating dynamic frontend components using React and TypeScript, enhancing application responsiveness and user interactivity.
          </li>
          <li>
            Designing and optimizing backend services using Node.js and MongoDB to ensure efficient data handling and improved API performance.
          </li>
          <li>
            Implementing authentication and authorization mechanisms using JWT and OAuth to enhance application security.
          </li>
          <li>
            Enhancing system performance by optimizing database queries and structuring indexes to reduce query execution time.
          </li>
          <li>
            Automating deployment pipelines using Docker and CI/CD workflows to streamline software delivery and updates.
          </li>
          <li>
            Collaborating with cross-functional teams to troubleshoot and resolve application issues, ensuring system stability and performance.
          </li>
        </ul>
        <p>
          Through this internship, I am gaining hands-on experience in full-stack development, cloud infrastructure, and scalable system design, strengthening my ability to deliver high-performance applications.
        </p>
        <button onClick={toggleHolidayChannelDetails} className="close-btn">Close</button>
      </div>
    )}
  </div>
) : null}


      </div>
    </section>
  );
};

export default Services;

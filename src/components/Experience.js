import React, { useState, useEffect } from 'react';
import './Experience.css';
import DataLogo from "../assets/DataLogo.jpeg";
import BrightLogo from "../assets/BrightLogo.jpeg";

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
            <p>Software Engineer</p>
            <p id='des'>
              Two years of professional experience in both software engineering and education. 
              As a Software Engineer at Datalyzer International Inc. <br></br>(May 2022 – July 2023)
            </p>
            {expandedSection === 'datalyzer' && (
              <div className="detailed-description full-screen" onClick={(e) => e.stopPropagation()}>
                <h3>Software Engineer at Datalyzer International Inc.</h3>
                <p><strong>Role:</strong> Software Engineer</p>
                <p><strong>Duration:</strong> May 2022 – July 2023</p>
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
            <p>Coding Instructor</p>
            <p id='des'>
              I worked as a Coding Instructor at BrightChamps Pvt. Ltd., where I taught diverse groups of students 
              and created tailored coding curriculums across various technologies such as HTML, JavaScript, Python, 
              and Machine Learning. <br></br>(March 2021 – April 2022)
            </p>
            {expandedSection === 'brightchamps' && (
              <div className="detailed-description full-screen" onClick={(e) => e.stopPropagation()}>
                <h3>Coding Instructor at BrightChamps Pvt. Ltd.</h3>
                <p><strong>Role:</strong> Coding Instructor</p>
                <p><strong>Duration:</strong> March 2021 – April 2022</p>
                <p>
                  As a Coding Instructor at BrightChamps, I had the rewarding experience of teaching coding and programming fundamentals 
                  to young students from diverse backgrounds. I was responsible for creating an engaging and structured curriculum that 
                  introduced students to core programming concepts and practical applications, with a focus on fostering creativity and 
                  problem-solving skills. I taught various programming languages and technologies, including HTML, CSS, JavaScript, Python, 
                  and basic machine learning, adapting lessons to suit different learning paces and interests.
                </p>
                <ul>
                  <li>
                    <strong>Curriculum Development:</strong> Developed a well-rounded and accessible curriculum that included hands-on 
                    projects, coding challenges, and interactive lessons, aimed at sparking curiosity and interest in technology.
                  </li>
                  <li>
                    <strong>Interactive Coding Sessions:</strong> Conducted live, virtual coding sessions with up to 15 students per class, 
                    guiding them through project-based learning and real-world coding exercises.
                  </li>
                  <li>
                    <strong>Customized Lesson Plans:</strong> Created customized lesson plans to accommodate individual learning styles 
                    and skill levels, ensuring every student could follow along and benefit from the course.
                  </li>
                  <li>
                    <strong>Student Progress Assessment:</strong> Regularly assessed student progress and provided personalized feedback, 
                    helping each learner overcome challenges and achieve their individual goals.
                  </li>
                  <li>
                    <strong>Project-Based Learning:</strong> Successfully facilitated the creation of diverse projects, such as interactive 
                    web pages, basic games, and simple applications, empowering students to showcase their work with pride and confidence.
                  </li>
                  <li>
                    <strong>Positive Feedback and Impact:</strong> Received consistently positive feedback from students and parents, with a 
                    significant increase in class participation and retention rates—over 25% growth—thanks to the engaging and supportive 
                    learning environment.
                  </li>
                </ul>
                <p>
                  Working at BrightChamps was a fulfilling experience, as I was able to inspire the next generation of coders and witness 
                  their growth firsthand. The experience taught me the value of patience, adaptability, and the importance of making 
                  technology education engaging and approachable. I am proud to have been part of their journey and to have contributed to 
                  a program that nurtures young talent and encourages innovation.
                </p>
                <button onClick={toggleBrightChampsDetails} className="close-btn">Close</button>
              </div>
            
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Services;

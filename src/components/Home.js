import React, { useState, useEffect } from 'react';
import './Home.css';
import profileImage from '../assets/picture.jpg'; // Ensure this path is correct

const Home = () => {
  const fullName = "H i, I'm Shashank Shankaregowda";
  const [displayedName, setDisplayedName] = useState(''); 
  const [showSubtitle, setShowSubtitle] = useState(false); 

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedName((prev) => prev + fullName.charAt(index));
      index++;
      if (index >= fullName.length) {
        clearInterval(interval); 
        setTimeout(() => {
          setShowSubtitle(true); 
        }, 100); 
      }
    }, 30); 

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="home-text">
          <h1 className="fade-in-effect">{displayedName}</h1> 
          {showSubtitle && (
            <p className="location fade-in-subtitle">
              Innovating Software Engineering with Scalable Solutions and AI
            </p>
          )}
          <div className="resume-download">
            <a href="/Shashank.pdf" download="Shashank_Sankaregoda_Resume.pdf">
              <button className="download-button">Download Resume</button>
            </a>
          </div>
        </div>
        <img src={profileImage} alt="Shashank Shankaregowda" className="profile-image"/>
      </div>
    </section>
  );
};

export default Home;

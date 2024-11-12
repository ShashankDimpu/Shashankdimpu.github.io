import React from 'react';
import './AboutMe.css';
import aboutImage from '../assets/picmine.jpg'; // Ensure this path is correct

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me">
      <div className="about-content">
        <div className="about-image-wrapper">
          <img src={aboutImage} alt="About Me" className="about-image"/>
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
          I am currently pursuing a Master’s degree in Computer Science at the University at Buffalo, specializing in Artificial Intelligence. My academic journey has allowed me to dive deep into subjects like Machine Learning, Deep Learning, Data Models, and Computer Vision, preparing me for advanced problem-solving in AI.
          </p>
          <p>
          In my professional experience as a Software Engineer at Datalyzer International, I led the design and implementation of scalable RESTful APIs using C#. I also worked on optimizing relational database schemas, ensuring data integrity and performance for high-transaction environments.
          </p>
          <p>
          I am proficient in various technologies, including Python, C#, MySQL, React.js, and Angular. My focus on front-end and back-end development helped me achieve significant performance improvements, such as a 50% faster page load time and a 30% reduction in system downtime, which greatly enhanced user retention and customer satisfaction.
          </p>
          <p>
          In addition to my engineering work, I have a passion for teaching. I spent over a year as a coding instructor, teaching students how to build real-world software projects. This experience allowed me to guide students through technologies such as HTML, CSS, JavaScript, and Python, helping them develop functional applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

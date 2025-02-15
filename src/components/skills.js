import React from "react";
import "./skills.css"; // Importing the CSS file

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C#", "C++", "HTML", "CSS"],
  },
  {
    category: "Backend Development",
    skills: ["Node.js", ".NET Core", "Flask", "Nest.js", "Web API", "REST APIs"],
  },
  {
    category: "Frontend Development",
    skills: ["React.js", "Angular", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Data & Cloud Technologies",
    skills: ["PostgreSQL", "MySQL", "SSMS", "Hadoop", "PySpark", "Docker", "AWS"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["TensorFlow", "PyTorch", "OpenCV", "Computer Vision", "Deep Learning"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Docker", "Webpack", "Yarn", "Postman", "CI/CD Pipelines"],
  },
  {
    category: "Other Skills",
    skills: ["Data Structures & Algorithms", "System Design", "Incident Management", "Team Collaboration"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title"> Skills & Expertise</h2>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

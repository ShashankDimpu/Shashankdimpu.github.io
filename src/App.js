import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Services from './components/Experience';
import Research from './components/Projects';
import Skills from './components/skills';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Shashank Shankaregowda";
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Services />
      <Research />
      <Skills />
      {/* <Testimonials />
      <Blog /> */}
      <Contact />
    </div>
  );
}
// const App = () => {
//   return (
//     <div className="App">
//       <Navbar />
//       <Home />
//       <AboutMe />
//       <Services />
//       <Research />
//       {/* <PatientResources /> */}
//       {/* <Testimonials />
//       <Blog /> */}
//       <Contact />
//     </div>
//   );
// };

export default App;


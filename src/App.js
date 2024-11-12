import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Services from './components/Experience';
import Research from './components/Projects';
import PatientResources from './components/PatientResources';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Services />
      <Research />
      {/* <PatientResources /> */}
      {/* <Testimonials />
      <Blog /> */}
      <Contact />
    </div>
  );
};

export default App;


import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Contact from './Contact';
import Testimonials from './Testimonials'; // Új komponens
import About from './About';

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Services /> */}
      <About/>
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;

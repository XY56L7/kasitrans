import React from 'react';
import Hero from './Hero';
import Contact from './Contact';
import Testimonials from './Testimonials';
import About from './About';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
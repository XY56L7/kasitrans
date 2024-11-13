import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Contact from './Contact';
import Testimonials from './Testimonials'; // Új komponens

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;

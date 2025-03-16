import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const slides = [
    {
      image: '/about1.jpg',
      title: 'Üdvözöljük a KasiTransnál!',
      subtitle: 'Megbízható és gyors fuvarozási szolgáltatások.',
    },
    {
      image: '/about2.jpg',
      title: 'Túlméretes Szállítás',
      subtitle: 'Speciális járművekkel Európa-szerte.',
    },
    {
      image: '/about3.jpg',
      title: 'Modern Géppark',
      subtitle: 'Folyamatosan bővülő és karbantartott flottánk.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-radial"></div>
          <div className="flex items-center justify-center h-full relative z-10">
            <motion.div
              className="text-center text-white px-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
                {slide.subtitle}
              </p>
              <Link
                to="/kapcsolat"
                className="inline-block bg-secondary hover:bg-accent text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              >
                Kapcsolatfelvétel
              </Link>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-cover bg-center h-screen" style={{ backgroundImage: `url('/assets/hero-bg.jpg')` }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <motion.div
          className="text-center text-white px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Üdvözöljük a KasiTransnál!</h1>
          <p className="text-xl md:text-2xl mb-6">Megbízható és gyors fuvarozási szolgáltatások.</p>
          <a href="/kapcsolat" className="bg-secondary hover:bg-accent text-white font-semibold py-3 px-6 rounded-full transition">
            Vedd fel velünk a kapcsolatot
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

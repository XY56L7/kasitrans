// src/components/About/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Cím */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Rólunk
        </motion.h2>
        
        {/* Buborék Container */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-12 w-full max-w-3xl">
            <div className="flex flex-col items-center">
              {/* Profilkép */}
              <img
                src="/assets/about-us.jpg"
                alt="Rólunk"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mb-6"
              />
              {/* Cím és Leírás */}
              <h3 className="text-2xl font-semibold mb-4 text-center">Kis bemutatkozás</h3>
              <p className="text-gray-700 text-center mb-4">
                A KasiTrans elkötelezett amellett, hogy kiváló minőségű fuvarozási szolgáltatásokat nyújtson ügyfeleinknek. Több éves tapasztalatunk és professzionális csapatunk garantálja a gyors és biztonságos szállítást.
              </p>
              <p className="text-gray-700 text-center">
                Célunk, hogy minden egyes ügyfelünk igényeit maximálisan kielégítsük, legyen szó belföldi vagy nemzetközi szállításról. Megbízhatóságunk és rugalmasságunk révén partnereink hosszú távú együttműködésre számíthatnak.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

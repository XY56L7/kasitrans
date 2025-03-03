import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTruck, FaHandshake, FaUsers, FaGlobe } from 'react-icons/fa';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const initialText = `Megbízható fuvarozó cég, évtizedes tapasztalattal.`;

  const moreText = ` A céget 2004-ben alapította Kasi Péter és Kasi Róbert. Javarészt nyitott pótkocsikkal dolgozunk, immár több éves tapasztalattal rendelkezünk túlméretes fuvarozás területén is. Folyamatosan bővülő gépparkunkban található hidraulikus ferderakó pótkocsi, széthúzható pótkocsi, rámpás mega pótkocsi és gépjármű szállító. Járműveink több országban rendelkeznek éves túlméretes engedélyekkel: Németország, Ausztria, Olaszország, Belgium, Svájc, Luxemburg, Magyarország, Franciaország, Lengyelország. Rendszeresen karbantartott szerelvényekkel dolgozunk, melyek jól felszereltek, hogy minden ország előírásainak megfeleljenek. Jelenleg 24 saját jármű található gépparkunkban, amit igyekszünk folyamatosan a kor igényeihez igazítani, lépést tartani a fejlődéssel, hogy megfeleljünk az új kihívásoknak.`;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        
        {}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Kik vagyunk?
        </motion.h2>

        {}
        <div className="flex flex-col lg:flex-row items-stretch mb-16 gap-0">
          {}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-xl w-full h-full flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Kik vagyunk?</h3>
              <p className="text-lg text-gray-700 mb-4">
                {initialText}
                <span className={`block mt-2 ${isExpanded ? 'block' : 'hidden'} lg:block`}>
                  {moreText}
                </span>
              </p>
              <button
                onClick={handleToggle}
                className="text-primary hover:underline focus:outline-none lg:hidden"
                aria-expanded={isExpanded}
              >
                {isExpanded ? 'Olvasd kevesebbet' : 'Olvasd tovább'}
              </button>
            </div>
          </motion.div>

          {}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src="/about1.jpg"
              alt="Cégünk bemutatása"
              className="w-full h-full rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <FaHandshake className="text-primary text-4xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Küldetésünk</h3>
            <p className="text-gray-700">
              Célunk, hogy megbízható és hatékony fuvarozási szolgáltatásokat nyújtsunk ügyfeleinknek, megfelelve minden ipari és egyedi igényüknek.
            </p>
          </motion.div>

          {}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <FaGlobe className="text-primary text-4xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Víziónk</h3>
            <p className="text-gray-700">
              Továbbra is bővítjük gépparkunkat és szakmai tudásunkat, hogy mindig a legmodernebb és legmegbízhatóbb fuvarozási megoldásokat kínálhassuk a piacon.
            </p>
          </motion.div>
        </div>

        {}
        <div className="mb-16">
          <motion.h3
            className="text-3xl font-extrabold text-center mb-12 text-secondary"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Csapatunk
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-8">
            {}
            <motion.div
              className="w-60 bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              >
              <img
                src="/anon.jfif"
                alt="Kasi Péter"
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold text-gray-800">Kasi Péter</h4>
                <p className="text-gray-600">Üzletvezető</p>
              </div>
            </motion.div>

            {}
            <motion.div
              className="w-60 bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              >
              <img
                src="/anon.jfif"
                alt="Kasi Róbert"
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold text-gray-800">Kasi Róbert</h4>
                <p className="text-gray-600">Műszaki Vezető</p>
              </div>
            </motion.div>

            {}
            <motion.div
              className="w-60 bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              >
              <img
                src="/anon.jfif"
                alt="Nagy Anna"
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold text-gray-800">Nagy Anna</h4>
                <p className="text-gray-600">Marketing Menedzser</p>
              </div>
            </motion.div>
          </div>
        </div>

        {}
        <div className="mb-16">
          <motion.h3
            className="text-3xl font-extrabold text-center mb-12 text-secondary"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            >
            Szolgáltatásaink
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              >
              <FaTruck className="text-primary text-4xl mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Túlméretes Fuvarozás</h4>
              <p className="text-gray-700">
                Speciális engedéllyel rendelkező járműveinkkel a legnagyobb árukat is biztonságosan szállítjuk az EU területén.
              </p>
            </motion.div>

            {}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              >
              <FaHandshake className="text-primary text-4xl mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Ügyfélszolgálat</h4>
              <p className="text-gray-700">
                Professzionális és elkötelezett csapatunk mindig készen áll, hogy segítsen Önnek bármilyen fuvarozási igényben.
              </p>
            </motion.div>

            {}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              >
              <FaUsers className="text-primary text-4xl mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Csapatunk</h4>
              <p className="text-gray-700">
                Magasan képzett szakembereink garantálják a megbízható és hatékony fuvarozási szolgáltatásokat.
              </p>
            </motion.div>

            {}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              >
              <FaGlobe className="text-primary text-4xl mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Nemzetközi Szállítás</h4>
              <p className="text-gray-700">
                Több mint 10 országban végezzük a fuvarozást, biztosítva az áruk gyors és biztonságos célba juttatását.
              </p>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;

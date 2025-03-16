import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaHandshake, FaUsers, FaGlobe } from 'react-icons/fa';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const initialText = `Megbízható fuvarozó cég, évtizedes tapasztalattal.`;
  const moreText = ` A céget 2004-ben alapította Kasi Péter és Kasi Róbert. Javarészt nyitott pótkocsikkal dolgozunk, immár több éves tapasztalattal rendelkezünk túlméretes fuvarozás területén is. Folyamatosan bővülő gépparkunkban található hidraulikus ferderakó pótkocsi, széthúzható pótkocsi, rámpás mega pótkocsi és gépjármű szállító. Járműveink több országban rendelkeznek éves túlméretes engedélyekkel: Németország, Ausztria, Olaszország, Belgium, Svájc, Luxemburg, Magyarország, Franciaország, Lengyelország. Rendszeresen karbantartott szerelvényekkel dolgozunk, melyek jól felszereltek, hogy minden ország előírásainak megfeleljenek. Jelenleg 24 saját jármű található gépparkunkban, amit igyekszünk folyamatosan a kor igényeihez igazítani, lépést tartani a fejlődéssel, hogy megfeleljünk az új kihívásoknak.`;

  const team = [
    { name: 'Kasi Péter', role: 'Üzletvezető', image: '/anon.jfif' },
    { name: 'Kasi Róbert', role: 'Műszaki Vezető', image: '/anon.jfif' },
    { name: 'Nagy Anna', role: 'Marketing Menedzser', image: '/anon.jfif' },
  ];

  const services = [
    { title: 'Túlméretes Fuvarozás', desc: 'Speciális engedéllyel rendelkező járműveinkkel a legnagyobb árukat is biztonságosan szállítjuk az EU területén.', icon: FaTruck },
    { title: 'Ügyfélszolgálat', desc: 'Professzionális és elkötelezett csapatunk mindig készen áll, hogy segítsen.', icon: FaHandshake },
    { title: 'Csapatunk', desc: 'Magasan képzett szakembereink garantálják a megbízható szolgáltatásokat.', icon: FaUsers },
    { title: 'Nemzetközi Szállítás', desc: 'Több mint 10 országban biztosítjuk az áruk gyors célba juttatását.', icon: FaGlobe },
  ];

  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-display font-extrabold text-center mb-16 text-primary"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Kik vagyunk?
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-custom"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold text-dark mb-4">Rólunk</h3>
            <p className="text-lg text-gray-700">
              {initialText}
              <span className={`${isExpanded ? 'block' : 'hidden'} lg:block mt-4`}>
                {moreText}
              </span>
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 text-primary font-semibold hover:underline lg:hidden"
            >
              {isExpanded ? 'Kevesebb' : 'Tovább'}
            </button>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-xl shadow-custom"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src="/about1.jpg"
              alt="Cégünk"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white p-8 rounded-xl shadow-custom text-center">
            <FaHandshake className="text-primary text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Küldetésünk</h3>
            <p className="text-gray-700">Megbízható és hatékony fuvarozási szolgáltatások minden igényre.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-custom text-center">
            <FaGlobe className="text-primary text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Víziónk</h3>
            <p className="text-gray-700">A legmodernebb megoldásokkal lépést tartani a jövővel.</p>
          </div>
        </motion.div>

        <motion.h3
          className="text-4xl font-display font-extrabold text-center mb-16 text-secondary"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Csapatunk
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-custom overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold text-dark">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h3
          className="text-4xl font-display font-extrabold text-center mb-16 text-secondary"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Szolgáltatásaink
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-custom text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <service.icon className="text-primary text-5xl mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-700">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
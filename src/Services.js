import React from 'react';
import { FaTruck, FaGlobe, FaWarehouse } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { TruckIcon, GlobeAltIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Belföldi Fuvarozás',
    description: 'Gyors és megbízható belföldi fuvarozási szolgáltatások.',
    icon: <TruckIcon className="text-secondary w-12 h-12 mb-4" />,
  },
  {
    title: 'Nemzetközi Szállítás',
    description: 'Biztonságos és hatékony nemzetközi szállítási megoldások.',
    icon: <GlobeAltIcon className="text-secondary w-12 h-12 mb-4" />,
  },
  {
    title: 'Raktározás',
    description: 'Modern raktárainkban biztonságosan tárolhatod árusítmányodat.',
    icon: <BuildingOfficeIcon className="text-secondary w-12 h-12 mb-4" />,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Szolgáltatásaink
        </motion.h2>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/3 p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <div>{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

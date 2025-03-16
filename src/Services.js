import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TruckIcon, GlobeAltIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Belföldi Fuvarozás',
    description: 'Gyors és megbízható belföldi fuvarozási szolgáltatások.',
    icon: <TruckIcon className="text-secondary w-16 h-16 mb-4 mx-auto" />,
  },
  {
    title: 'Nemzetközi Szállítás',
    description: 'Biztonságos és hatékony nemzetközi szállítási megoldások.',
    icon: <GlobeAltIcon className="text-secondary w-16 h-16 mb-4 mx-auto" />,
  },
  {
    title: 'Raktározás',
    description: 'Modern raktárainkban biztonságosan tárolhatod árusítmányodat.',
    icon: <BuildingOfficeIcon className="text-secondary w-16 h-16 mb-4 mx-auto" />,
  },
];

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl font-display font-extrabold mb-16 text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Szolgáltatásaink
        </motion.h2>
        <Slider {...settings}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-custom hover:shadow-xl transition-shadow duration-300">
                {service.icon}
                <h3 className="text-2xl font-semibold mb-3 text-dark">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
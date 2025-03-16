import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'János Kovács',
    position: 'Vállalkozó',
    feedback: 'A KasiTrans megbízható és gyors fuvarozási szolgáltatásaival kiváló partnerei voltak vállalkozásomnak.',
    avatar: '/janos.jpg',
  },
  {
    name: 'Éva Szabó',
    position: 'Logisztikai Menedzser',
    feedback: 'A csapat professzionális és segítőkész. Minden alkalommal pontosan és biztonságosan szállították az árut.',
    avatar: '/eva.png',
  },
];

const Testimonials = () => {
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
          Ügyfeleink Mondták
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-custom hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 border-2 border-accent"
                />
                <div>
                  <h4 className="text-xl font-semibold text-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
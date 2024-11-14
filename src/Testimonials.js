import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'János Kovács',
    position: 'Vállalkozó',
    feedback: 'A KasiTrans megbízható és gyors fuvarozási szolgáltatásaival kiváló partnerei voltak vállalkozásomnak. Nagyon elégedett vagyok a szolgáltatással!',
    avatar: '/janos.jpg',
  },
  {
    name: 'Éva Szabó',
    position: 'Logisztikai Menedzser',
    feedback: 'A csapat professzionális és segítőkész. Minden alkalommal pontosan és biztonságosan szállították az árut.',
    avatar: '/eva.png',
  },
  // További vélemények...
];

const Testimonials = () => {
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
          Ügyfeleink Mondták
        </motion.h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

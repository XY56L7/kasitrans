import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({
    nev: '',
    email: '',
    uzenet: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert('Üzeneted elküldve!');
    setForm({ nev: '', email: '', uzenet: '' });
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Kapcsolat
        </motion.h2>

        {}
        <motion.div
          className="flex flex-col lg:flex-row items-stretch lg:space-x-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {}
          <form
            className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg flex flex-col"
            onSubmit={handleSubmit}
          >
            {}
            <div className="mb-4">
              <label htmlFor="nev" className="block text-gray-700 mb-2">
                Név
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="nev"
                  id="nev"
                  value={form.nev}
                  onChange={handleChange}
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded focus:outline-none focus:border-primary transition"
                  placeholder="Írd be a neved"
                  required
                />
              </div>
            </div>

            {}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded focus:outline-none focus:border-primary transition"
                  placeholder="Írd be az email címed"
                  required
                />
              </div>
            </div>

            {}
            <div className="mb-6">
              <label htmlFor="uzenet" className="block text-gray-700 mb-2">
                Üzenet
              </label>
              <div className="relative">
                <FaCommentDots className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <textarea
                  name="uzenet"
                  id="uzenet"
                  value={form.uzenet}
                  onChange={handleChange}
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded focus:outline-none focus:border-primary transition"
                  rows="5"
                  placeholder="Írd be az üzeneted"
                  required
                ></textarea>
              </div>
            </div>

            {}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 rounded transition transform hover:scale-105"
              aria-label="Űrlap beküldése"
            >
              Küldés
            </button>
          </form>

          {}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <motion.div
              className="rounded-lg shadow-lg overflow-hidden h-80 lg:h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.9398381287793!2d19.040236315728895!3d46.42784567917678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4742a93f1b3c9e0f%3A0x5c1c8f8d7e9c3a6c!2sIpari%20Park%205257%2F8%20Hrsz.%2C%206300%20Kalocsa!5e0!3m2!1shu!2shu!4v1600000000000!5m2!1shu!2shu"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KasiTrans Telephely"
              ></iframe>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

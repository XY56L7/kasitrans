import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ nev: '', email: '', uzenet: '' });

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
    <section className="py-24 bg-light">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-display font-extrabold text-center mb-16 text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Kapcsolat
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.form
            className="bg-white p-8 rounded-xl shadow-custom"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="mb-6">
              <label htmlFor="nev" className="block text-dark font-semibold mb-2">
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
                  className="pl-10 w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition"
                  placeholder="Neved"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-dark font-semibold mb-2">
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
                  className="pl-10 w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition"
                  placeholder="Email címed"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="uzenet" className="block text-dark font-semibold mb-2">
                Üzenet
              </label>
              <div className="relative">
                <FaCommentDots className="absolute left-3 top-4 text-gray-400" />
                <textarea
                  name="uzenet"
                  id="uzenet"
                  value={form.uzenet}
                  onChange={handleChange}
                  className="pl-10 w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition"
                  rows="5"
                  placeholder="Üzeneted"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-4 rounded-lg hover:bg-secondary transition-transform transform hover:scale-105"
            >
              Küldés
            </button>
          </motion.form>
          <motion.div
            className="rounded-xl shadow-custom overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.9398381287793!2d19.040236315728895!3d46.42784567917678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4742a93f1b3c9e0f%3A0x5c1c8f8d7e9c3a6c!2sIpari%20Park%205257%2F8%20Hrsz.%2C%206300%20Kalocsa!5e0!3m2!1shu!2shu!4v1600000000000!5m2!1shu!2shu"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KasiTrans Telephely"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
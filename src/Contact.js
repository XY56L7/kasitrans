import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    // Itt kezelheted a form beküldését (pl. API hívás)
    console.log(form);
    alert('Üzeneted elküldve!');
    setForm({ nev: '', email: '', uzenet: '' });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Kapcsolat
        </motion.h2>
        <motion.form
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Név</label>
            <input
              type="text"
              name="nev"
              value={form.nev}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="Írd be a neved"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="Írd be az email címed"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Üzenet</label>
            <textarea
              name="uzenet"
              value={form.uzenet}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
              rows="5"
              placeholder="Írd be az üzeneted"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 rounded transition"
          >
            Küldés
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

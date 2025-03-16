import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-4">Kapcsolat</h3>
            <p className="mb-2">Kalocsa, Ipari park 5257/8 hrsz., 6300</p>
            <p className="mb-2">
              <a href="mailto:kasitrans@kasitrans.hu" className="hover:text-secondary transition">
                kasitrans@kasitrans.hu
              </a>
            </p>
            <p className="mb-2">
              <a href="tel:+36302486293" className="hover:text-secondary transition">
                +36 30 248 6293
              </a>
            </p>
            <p>
              <a href="tel:+36305020519" className="hover:text-secondary transition">
                +36 30 502 0519
              </a>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-4">Hasznos Linkek</h3>
            <ul>
              <li className="mb-2">
                <Link to="/adatvedelem" className="hover:text-secondary transition">
                  Adatvédelmi nyilatkozat
                </Link>
              </li>
              <li>
                <Link to="/impresszum" className="hover:text-secondary transition">
                  Impresszum
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-4">Kövess Minket</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
                <FaFacebookF size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>© {new Date().getFullYear()} KasiTrans. Minden jog fenntartva.</p>
          <p>Designed by Pál Martin</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
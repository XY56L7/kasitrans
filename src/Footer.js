// src/components/Footer/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-12">
      <div className="container mx-auto p-8">
        {/* Fő Tartalom: Kapcsolat, Hasznos Linkek, Kövess Minket */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Kapcsolatfelvételi Adatok */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-white mb-4">Kapcsolat</h3>
            <p className="mb-2">Kalocsa, Ipari park 5257/8 hrsz., 6300</p>
            <p className="mb-2">
              <a href="mailto:kasitrans@kasitrans.hu" className="hover:text-white transition">
                kasitrans@kasitrans.hu
              </a>
            </p>
            <p className="mb-2">
              <a href="tel:+36302486293" className="hover:text-white transition">
                +36 30 248 6293
              </a>
            </p>
            <p>
              <a href="tel:+36305020519" className="hover:text-white transition">
                +36 30 502 0519
              </a>
            </p>
          </div>

          {/* Hasznos Linkek */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-white mb-4">Hasznos Linkek</h3>
            <ul>
              <li className="mb-2">
                <Link to="/adatvedelem" className="hover:text-white transition">
                  Adatvédelmi nyilatkozat
                </Link>
              </li>
              <li>
                <Link to="/impresszum" className="hover:text-white transition">
                  Impresszum
                </Link>
              </li>
            </ul>
          </div>

          {/* Kövess Minket */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-white mb-4">Kövess Minket</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Alul Rész: Designer Credit */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Minden jog fenntartva.</p>
          <p>Designed by Pál Martin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

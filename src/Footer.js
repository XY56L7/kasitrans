import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importáljuk a Link komponenst

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-12">
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">KasiTrans</h3>
          <p>© {new Date().getFullYear()} Minden jog fenntartva.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Hasznos Linkek</h4>
          <ul>
            <li className="mb-2">
              <Link to="/adatvedelem" className="hover:text-white transition">Adatvédelmi nyilatkozat</Link>
            </li>
            <li>
              <Link to="/impresszum" className="hover:text-white transition">Impresszum</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Kövess Minket</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-center p-4">
        <p>Designed with ❤️ by [Neved]</p>
      </div>
    </footer>
  );
};

export default Footer;

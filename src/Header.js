import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Főoldal' },
    { to: '/szolgaltatasok', label: 'Szolgáltatások' },
    { to: '/rolunk', label: 'Rólunk' },
    { to: '/kapcsolat', label: 'Kapcsolat' },
  ];

  return (
    <header className="bg-primary text-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="text-3xl font-bold font-display"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">KasiTrans</Link>
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.div
              key={item.to}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.to}
                className="text-lg font-semibold hover:text-secondary transition"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden bg-primary text-white"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block px-6 py-3 text-lg font-semibold hover:bg-secondary transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-white fixed w-full z-50 shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link to="/">KasiTrans</Link>
        </div>
        <nav>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-secondary transition">Főoldal</Link>
            <Link to="/szolgaltatasok" className="hover:text-secondary transition">Szolgáltatások</Link>
            <Link to="/rolunk" className="hover:text-secondary transition">Rólunk</Link>
            <Link to="/kapcsolat" className="hover:text-secondary transition">Kapcsolat</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>
      {}
      {isOpen && (
        <div className="md:hidden bg-primary text-white">
          <Link to="/" className="block px-4 py-2 hover:bg-secondary">Főoldal</Link>
          <Link to="/szolgaltatasok" className="block px-4 py-2 hover:bg-secondary">Szolgáltatások</Link>
          <Link to="/rolunk" className="block px-4 py-2 hover:bg-secondary">Rólunk</Link>
          <Link to="/kapcsolat" className="block px-4 py-2 hover:bg-secondary">Kapcsolat</Link>
        </div>
      )}
    </header>
  );
};

export default Header;

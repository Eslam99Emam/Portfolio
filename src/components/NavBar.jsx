// NavBar.jsx
import React, { useState, useEffect } from 'react';

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-green-400">Eslam Emam</a>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-300 hover:text-green-400 transition">About</a>
          <a href="#projects" className="text-gray-300 hover:text-green-400 transition">Projects</a>
          <a href="#skills" className="text-gray-300 hover:text-green-400 transition">Skills</a>
          <a href="#contact" className="text-gray-300 hover:text-green-400 transition">Contact</a>
        </div>
        <button className="md:hidden text-gray-300 hover:text-green-400" onClick={toggle}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {isOpen && (
          <div className="md:hidden absolute top-16 right-6 bg-gray-900 text-gray-300 p-4 rounded-md shadow-lg">
            <a href="#about" className="block hover:text-green-400 transition">About</a>
            <a href="#projects" className="block hover:text-green-400 transition">Projects</a>
            <a href="#skills" className="block hover:text-green-400 transition">Skills</a>
            <a href="#contact" className="block hover:text-green-400 transition">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;

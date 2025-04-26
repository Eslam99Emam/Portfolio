// Hero.jsx
import React from 'react';

function Hero() {
  return (
    <div className="h-screen flex items-center bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-green-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-400 rounded-full filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-green-400 font-mono mb-2">Hello, I'm Eslam Emam</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Flutter Developer</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Building beautiful, responsive, and performant mobile applications with Flutter and SupaBase
          </p>
          <div className="flex space-x-4">
            <a href="#projects" className="px-8 py-3 bg-green-500 hover:bg-green-600 text-gray-900 font-medium rounded-md transition">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 font-medium rounded-md transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
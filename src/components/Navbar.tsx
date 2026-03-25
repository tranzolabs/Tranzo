import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-surface/80 backdrop-blur-xl border-white/10 py-4 shadow-2xl' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm rotate-45"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Tranzo</span>
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'Pricing', 'Docs', 'Company'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-gray-text hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:block text-sm font-medium text-white hover:text-brand-blue transition-colors">
            Log in
          </a>
          <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </motion.header>
  );
};

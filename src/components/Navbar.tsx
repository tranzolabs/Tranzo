import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-subtle ${scrolled ? 'bg-[#08080b]/80 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-sm rotate-45"></div>
          </div>
          <span className="font-bold tracking-tight text-white">Tranzo</span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-[#8F8F99]">
          <a href="#" className="hover:text-white transition-colors">Products</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Developers</a>
          <a href="#" className="hover:text-white transition-colors">Company</a>
        </nav>

        <div className="flex gap-6 items-center">
          <a href="#" className="text-sm font-medium text-[#8F8F99] hover:text-white transition-colors">Log In</a>
          <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

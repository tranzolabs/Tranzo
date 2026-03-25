import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 flex justify-center">
      <div className={`px-6 h-16 flex items-center justify-between w-full rounded-[32px] transition-all duration-300 ${scrolled ? 'bg-[#111111]/80 backdrop-blur-xl border border-white/10 shadow-glow' : 'bg-transparent'}`}>
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Tranzo Logo" className="w-8 h-8 object-contain mix-blend-screen" />
          <span className="font-bold tracking-tighter text-white text-lg hidden sm:block">Tranzo</span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-[#A1A1AA]">
          <a href="#" className="hover:text-white transition-colors">Products</a>
          <a href="#" className="hover:text-white transition-colors">Platform</a>
          <a href="#" className="hover:text-white transition-colors">Developers</a>
          <a href="#" className="hover:text-white transition-colors">Company</a>
        </nav>

        <div className="flex gap-4 items-center">
          <a href="mailto:connect@tranzo.money" className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all inline-block">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

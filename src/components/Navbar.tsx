import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <div className={`px-4 sm:px-6 h-16 flex items-center justify-between w-full rounded-[32px] transition-all duration-300 relative ${scrolled || isOpen ? 'bg-[#F5F5F7]/90 backdrop-blur-xl border border-black/5' : 'bg-transparent border border-transparent'}`}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg border border-black/10 bg-black/5 flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-black rounded-sm rotate-45"></div>
          </div>
          <span className="font-bold tracking-tighter text-black text-xl hidden xs:block">Tranzo</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-[#727272]">
          <a href="#" className="hover:text-black transition-colors">Products</a>
          <a href="#" className="hover:text-black transition-colors">Platform</a>
          <a href="#" className="hover:text-black transition-colors">Developers</a>
          <a href="#" className="hover:text-black transition-colors">Company</a>
        </nav>

        <div className="flex gap-4 items-center">
          <a href="mailto:connect@tranzo.money" className="bg-black text-white px-5 py-2 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all inline-block shadow-subtle">
            Get Started
          </a>
          <button 
            className="md:hidden p-2 text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-[72px] left-0 w-full bg-[#F5F5F7]/95 backdrop-blur-2xl rounded-[32px] border border-black/5 p-8 md:hidden flex flex-col gap-6 text-sm font-medium animate-in fade-in slide-in-from-top-4 duration-300 shadow-xl">
            <a href="#" className="text-black">Products</a>
            <a href="#" className="text-[#727272]">Platform</a>
            <a href="#" className="text-[#727272]">Developers</a>
            <a href="#" className="text-[#727272]">Company</a>
          </div>
        )}
      </div>
    </header>
  );
};

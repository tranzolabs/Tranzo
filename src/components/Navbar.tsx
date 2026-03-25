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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 w-[94%] sm:w-[90%] max-w-5xl z-50">
      <div className={`px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between w-full rounded-2xl sm:rounded-[32px] transition-all duration-300 relative ${scrolled || isOpen ? 'bg-[#F5F5F7]/90 backdrop-blur-xl border border-black/5' : 'bg-transparent border border-transparent'}`}>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg border border-black/10 bg-black/5 flex items-center justify-center flex-shrink-0">
            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-black rounded-sm rotate-45"></div>
          </div>
          <span className="font-bold tracking-tighter text-black text-lg sm:text-xl">Tranzo</span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-[#727272]">
          <a href="#" className="hover:text-black transition-colors">Product</a>
          <a href="#" className="hover:text-black transition-colors">Security</a>
          <a href="#" className="hover:text-black transition-colors">Docs</a>
          <a href="mailto:connect@tranzo.money" className="hover:text-black transition-colors">Contact</a>
        </nav>

        <div className="flex gap-2 sm:gap-4 items-center">
          <a href="mailto:connect@tranzo.money" className="hidden sm:inline-block bg-black text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-subtle">
            Get Started
          </a>
          <button 
            className="md:hidden p-1.5 sm:p-2 text-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <>
            <div 
              className="fixed inset-0 top-0 left-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden -z-10"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute top-[60px] sm:top-[72px] left-0 w-full bg-[#F5F5F7]/95 backdrop-blur-2xl rounded-2xl sm:rounded-[32px] border border-black/5 p-6 sm:p-8 md:hidden flex flex-col gap-5 sm:gap-6 text-sm font-medium shadow-xl z-50">
              <a href="#" onClick={() => setIsOpen(false)} className="text-black text-base">Product</a>
              <a href="#" onClick={() => setIsOpen(false)} className="text-[#727272] text-base">Security</a>
              <a href="#" onClick={() => setIsOpen(false)} className="text-[#727272] text-base">Docs</a>
              <a href="mailto:connect@tranzo.money" onClick={() => setIsOpen(false)} className="text-[#727272] text-base">Contact</a>
              <a href="mailto:connect@tranzo.money" className="bg-black text-white px-5 py-3 rounded-full text-sm font-bold text-center mt-2 active:scale-95 transition-all">
                Get Started
              </a>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

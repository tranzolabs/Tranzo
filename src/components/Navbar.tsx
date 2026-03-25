import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Wallet, CreditCard, HardDrive, Shield } from 'lucide-react';

const productLinks = [
  { href: '/wallet', label: 'Wallet', desc: 'Self-custody multi-chain wallet', icon: Wallet },
  { href: '/crypto-card', label: 'Crypto Card', desc: 'Spend crypto anywhere', icon: CreditCard },
  { href: '/dripper-wallet', label: 'Dripper Wallet', desc: 'Offline hardware security', icon: HardDrive },
  { href: '/hardware-wallet', label: 'Hardware Security', desc: 'How we protect your assets', icon: Shield },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 w-[94%] sm:w-[90%] max-w-5xl z-50">
      <div className={`px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between w-full rounded-2xl sm:rounded-[32px] transition-all duration-300 relative ${scrolled || isOpen ? 'bg-[#F5F5F7]/90 backdrop-blur-xl border border-black/5' : 'bg-transparent border border-transparent'}`}>
        <a href="/" className="flex items-center gap-2 sm:gap-3">
          <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg border border-black/10 bg-black/5 flex items-center justify-center flex-shrink-0">
            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-black rounded-sm rotate-45"></div>
          </div>
          <span className="font-bold tracking-tighter text-black text-lg sm:text-xl">Tranzo</span>
        </a>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-[#727272]">
          {/* Product dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setProductOpen(!productOpen)}
              className="flex items-center gap-1 hover:text-black transition-colors"
            >
              Product
              <ChevronDown size={14} className={`transition-transform duration-200 ${productOpen ? 'rotate-180' : ''}`} />
            </button>

            {productOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl border border-black/5 shadow-xl p-2 z-50">
                {productLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setProductOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-black/[0.04] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg border border-black/5 bg-[#F5F5F7] flex items-center justify-center shrink-0 group-hover:bg-black group-hover:border-black transition-all">
                      <link.icon size={16} className="text-black/60 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-black">{link.label}</div>
                      <div className="text-xs text-[#727272]">{link.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/hardware-wallet" className="hover:text-black transition-colors">Security</a>
          <a href="/docs" className="hover:text-black transition-colors">Docs</a>
          <a href="/contact" className="hover:text-black transition-colors">Contact</a>
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

        {/* Mobile menu */}
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 top-0 left-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden -z-10"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute top-[60px] sm:top-[72px] left-0 w-full bg-[#F5F5F7]/95 backdrop-blur-2xl rounded-2xl sm:rounded-[32px] border border-black/5 p-6 sm:p-8 md:hidden flex flex-col gap-4 sm:gap-5 text-sm font-medium shadow-xl z-50">
              {/* Mobile Product accordion */}
              <div>
                <button
                  onClick={() => setMobileProductOpen(!mobileProductOpen)}
                  className="flex items-center justify-between w-full text-black text-base"
                >
                  Product
                  <ChevronDown size={16} className={`text-[#727272] transition-transform duration-200 ${mobileProductOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileProductOpen && (
                  <div className="mt-3 ml-1 flex flex-col gap-1">
                    {productLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-black/[0.04] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg border border-black/5 bg-white flex items-center justify-center shrink-0">
                          <link.icon size={14} className="text-black/60" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-black">{link.label}</div>
                          <div className="text-[11px] text-[#727272]">{link.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="/hardware-wallet" onClick={() => setIsOpen(false)} className="text-[#727272] text-base">Security</a>
              <a href="/docs" onClick={() => setIsOpen(false)} className="text-[#727272] text-base">Docs</a>
              <a href="/contact" onClick={() => setIsOpen(false)} className="text-[#727272] text-base">Contact</a>
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

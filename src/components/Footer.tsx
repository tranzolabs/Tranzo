export const Footer = () => {
  return (
    <footer className="bg-white py-24 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 text-sm text-[#727272] mb-16">
        
        <div className="col-span-2 lg:col-span-2 space-y-4">
          <div className="w-10 h-10 rounded-xl border border-black/10 bg-black/5 flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-black rounded-[3px] rotate-45"></div>
          </div>
          <p className="max-w-xs mt-4 text-lg font-medium leading-relaxed text-black/80">
            The modern way to own and spend crypto.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-black mb-6 tracking-tight">Product</h4>
          <ul className="space-y-4 font-medium">
            <li><a href="#" className="hover:text-black transition-colors">Wallet</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Crypto Card</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Dripper Wallet</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-black mb-6 tracking-tight">Company</h4>
          <ul className="space-y-4 font-medium">
            <li><a href="#" className="hover:text-black transition-colors">Security</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Docs</a></li>
            <li><a href="mailto:connect@tranzo.money" className="hover:text-black transition-colors">Contact</a></li>
            <li><a href="/privacy" className="hover:text-black transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-black transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>
        
        <div className="col-span-2">
          <h4 className="font-bold text-black mb-6 tracking-tight">Developers</h4>
          <div className="border border-black/10 bg-[#F5F5F7] px-5 py-3 mt-2 rounded-[16px] flex justify-between items-center text-sm font-mono tracking-tight text-black/80">
             <span>npm install @tranzo/sdk</span>
             <div className="w-3 h-3 rounded-full bg-black/10"></div>
          </div>
          <p className="mt-4 text-xs max-w-xs leading-relaxed">
            Build with Tranzo. Full API access to wallet, card, and payment infrastructure.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-xs text-[#727272]">
        <p>© 2026 Tranzo. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-black">Twitter</a>
          <a href="#" className="hover:text-black">GitHub</a>
          <a href="#" className="hover:text-black">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

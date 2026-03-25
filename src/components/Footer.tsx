export const Footer = () => {
  return (
    <footer className="bg-[#000000] py-24 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 text-sm text-[#A1A1AA] mb-16">
        
        <div className="col-span-2 lg:col-span-2 space-y-4">
          <div className="w-10 h-10 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-white rounded-[3px] rotate-45"></div>
          </div>
          <p className="max-w-xs mt-4 text-lg font-medium leading-relaxed">
            The fundamental financial architecture for boundaryless scale.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6 tracking-tight">Platform</h4>
          <ul className="space-y-4 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Global Accounts</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Treasury API</a></li>
            <li><a href="https://tranzo.money" className="hover:text-white transition-colors">Main Site</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-6 tracking-tight">Company</h4>
          <ul className="space-y-4 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Vision</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>
        
        <div className="col-span-2">
          <h4 className="font-bold text-white mb-6 tracking-tight">Developers</h4>
          <div className="border border-white/10 bg-[#111111] px-5 py-3 mt-2 rounded-[16px] flex justify-between items-center text-sm font-mono tracking-tight text-white/80">
             <span>npm install @tranzo/sdk</span>
             <div className="w-3 h-3 rounded-full bg-white/20"></div>
          </div>
          <p className="mt-4 text-xs max-w-xs leading-relaxed">
            Build perfectly scalable financial instruments without the headaches of traditional banking rails.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-[#A1A1AA]">
        <p>© 2026 Tranzo. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

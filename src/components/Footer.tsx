export const Footer = () => {
  return (
    <footer className="bg-[#000000] py-24 px-6 border-b-[16px] border-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 text-sm text-[#A1A1AA]">
        
        <div className="col-span-2 lg:col-span-2 space-y-4">
          <img src="/logo.png" alt="Tranzo Logo" className="w-12 h-12 object-contain mix-blend-screen opacity-80" />
          <p className="max-w-xs mt-8 text-lg font-medium leading-relaxed">
            The fundamental financial architecture for boundaryless scale.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6 tracking-tight">Platform</h4>
          <ul className="space-y-4 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Global Accounts</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Treasury API</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cards</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-6 tracking-tight">Company</h4>
          <ul className="space-y-4 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Vision</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Engineers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="col-span-2">
          <h4 className="font-bold text-white mb-6 tracking-tight">Integrations</h4>
          <div className="border border-white/10 bg-[#111111] px-5 py-3 mt-2 rounded-[16px] flex justify-between items-center text-sm font-mono tracking-tight text-white/80">
             <span>npm install @tranzo/sdk</span>
             <div className="w-3 h-3 rounded-full bg-white/20"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

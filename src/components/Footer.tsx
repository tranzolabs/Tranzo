export const Footer = () => {
  return (
    <footer className="bg-[#0c0c10] py-16 px-6 border-b-8 border-brand-purple">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 text-sm text-[#8F8F99]">
        
        <div className="col-span-2 lg:col-span-2 space-y-4">
          <div className="w-8 h-8 rounded border border-subtle bg-white flex items-center justify-center">
            <div className="w-3 h-3 bg-black rounded-sm rotate-45"></div>
          </div>
          <p className="max-w-xs mt-6">
            The fundamental financial architecture for boundaryless scale.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Platform</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition-colors">Global Accounts</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Treasury API</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cards</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition-colors">Vision</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Engineers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="col-span-2">
          <h4 className="font-semibold text-white mb-4">Integrations</h4>
          <div className="border border-subtle bg-surface px-4 py-2 mt-2 rounded flex justify-between items-center text-xs font-mono">
             <span>npm install @tranzo/sdk</span>
             <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

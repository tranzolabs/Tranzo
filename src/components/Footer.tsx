import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0B0B0F] pt-24 pb-12 px-6 md:px-12 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8 mb-24">
        {/* Brand Ccol */}
        <div className="col-span-2 md:col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-sm rotate-45"></div>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">Tranzo</span>
          </div>
          <p className="text-gray-500 max-w-xs leading-relaxed">
            Next-generation financial infrastructure for the internet economy.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-white mb-6 tracking-wide">Product</h4>
          <ul className="space-y-4 text-gray-500">
            <li><a href="#" className="hover:text-white transition-colors">Global Accounts</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Corporate Cards</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Payments Engine</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Developer API</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-6 tracking-wide">Company</h4>
          <ul className="space-y-4 text-gray-500">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-6 tracking-wide">Legal</h4>
          <ul className="space-y-4 text-gray-500">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-600 gap-4">
        <p>&copy; {new Date().getFullYear()} Tranzo Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';

export const TrustBar = () => {
  return (
    <section className="py-16 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="text-sm text-gray-500 uppercase tracking-[0.2em] font-medium mb-10 text-center">
          Powering next-generation finance
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale transition-all duration-500 hover:opacity-80">
          {['Aura', 'NovaTech', 'Quantum', 'Synthetix', 'Oasis'].map((company) => (
            <div key={company} className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/20"></div>
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

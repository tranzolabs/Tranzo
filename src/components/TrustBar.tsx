export const TrustBar = () => {
  return (
    <section className="py-24 border-y border-white/10 bg-[#000000] px-6 text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between opacity-50 grayscale hover:opacity-100 transition-all duration-700">
        <p className="text-sm font-semibold text-white mb-8 md:mb-0 uppercase tracking-widest text-left">Trusted Infrastructure Partners</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {['Nexus', 'Synthetix', 'Quantum', 'Oasis Global'].map((company) => (
            <div key={company} className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20"></div>
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

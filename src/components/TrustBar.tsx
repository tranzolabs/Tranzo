export const TrustBar = () => {
  return (
    <section className="py-20 border-y border-subtle bg-[#08080b] px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
        <p className="text-xs font-mono text-white mb-8 md:mb-0 uppercase tracking-widest text-left">Trusted Infrastructure Partners</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {['Nexus', 'Synthetix', 'Quantum', 'Oasis Global'].map((company) => (
            <div key={company} className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-white/[0.2]"></div>
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

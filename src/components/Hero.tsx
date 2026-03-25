import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative pt-40 pb-32 px-6 overflow-hidden">
      <div className="bg-hero-glow"></div>
      
      <div className="max-w-7xl mx-auto mt-16 md:mt-24">
        <div className="flex flex-col text-center items-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex gap-2 items-center px-3 py-1 rounded-full border border-subtle bg-white/[0.02] text-xs font-semibold text-[#8F8F99] mb-8"
          >
            <span>v2.0 Release</span>
            <span className="w-1 h-1 rounded-full bg-[#E1E1E6]"></span>
            <span>Optimized routing engine live</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-white max-w-4xl mx-auto leading-[1.05]"
          >
            Internet-native <br/>
            <span className="text-[#8F8F99] font-medium tracking-tight">financial primitives.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#8F8F99] text-lg md:text-xl max-w-2xl mx-auto mt-8 mb-12 leading-relaxed"
          >
            Buy, save, spend, and scale perfectly. We stripped the complexity from banking so you can focus entirely on capital velocity.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              Start building <ArrowRight className="w-4 h-4"/>
            </button>
            <button className="bg-transparent text-white border border-subtle px-6 py-3 rounded-full font-semibold hover:bg-white/[0.05] transition-colors flex items-center justify-center">
              Explore Documentation
            </button>
          </motion.div>
        </div>

        {/* Minimal Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 w-full aspect-video max-w-5xl mx-auto rounded-xl border border-subtle bg-[#0c0c10] shadow-glow overflow-hidden relative flex"
        >
          {/* Sidebar */}
          <div className="w-64 border-r border-subtle hidden md:block bg-[#111115] p-6 space-y-4">
            <div className="h-6 w-24 bg-white/[0.08] rounded mb-8"></div>
            <div className="h-4 w-full bg-white/[0.03] rounded"></div>
            <div className="h-4 w-3/4 bg-white/[0.03] rounded"></div>
            <div className="h-4 w-4/5 bg-white/[0.03] rounded"></div>
            <div className="h-4 w-1/2 bg-brand-purple/20 rounded mt-8"></div>
          </div>
          {/* Main Area */}
          <div className="flex-1 p-8">
             <div className="h-12 w-48 bg-white/[0.08] rounded mb-12"></div>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-32 bg-white/[0.02] border border-subtle rounded-lg p-6">
                    <div className="h-4 w-8 bg-white/[0.1] rounded mb-8"></div>
                    <div className="h-8 w-24 bg-white/[0.05] rounded"></div>
                  </div>
                ))}
            </div>
            <div className="mt-8 h-48 bg-white/[0.02] border border-subtle rounded-lg"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

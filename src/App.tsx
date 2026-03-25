import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { ProductShowcase } from './components/ProductShowcase';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-[#0B0B0F] min-h-screen text-white font-sans selection:bg-brand-indigo selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorks />
        <Benefits />
        <ProductShowcase />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

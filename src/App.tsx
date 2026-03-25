import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { ProductShowcase } from './components/ProductShowcase';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Terms } from './pages/Terms';

const Home = () => (
  <main>
    <Hero />
    <TrustBar />
    <Features />
    <HowItWorks />
    <Benefits />
    <ProductShowcase />
    <FinalCTA />
  </main>
);

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#000000] min-h-screen text-white font-sans selection:bg-white selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

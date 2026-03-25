import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { ProductShowcase } from './components/ProductShowcase';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { Contact } from './pages/Contact';
import { Wallet } from './pages/Wallet';
import { CryptoCard } from './pages/CryptoCard';
import { DripperWallet } from './pages/DripperWallet';
import { HardwareWallet } from './pages/HardwareWallet';

const Home = () => (
  <main>
    <Hero />
    <HowItWorks />
    <Features />
    <ProductShowcase />
    <Benefits />
    <FinalCTA />
  </main>
);

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen text-black font-sans selection:bg-black selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/crypto-card" element={<CryptoCard />} />
          <Route path="/dripper-wallet" element={<DripperWallet />} />
          <Route path="/hardware-wallet" element={<HardwareWallet />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

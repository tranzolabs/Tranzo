import React, { useEffect } from 'react';

export const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-48 pb-32 px-6 max-w-4xl mx-auto min-h-screen">
      <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-sm font-semibold text-white mb-8">
        Legal Information
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.04em] text-white mb-6 leading-[1.05]">
        Terms & <span className="text-[#A1A1AA]">Conditions</span>
      </h1>
      <p className="text-[#A1A1AA] text-lg mb-16 border-b border-white/10 pb-8">
        Last updated: October 24, 2026
      </p>

      <div className="space-y-12 text-[#A1A1AA] leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-[-0.02em]">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the services provided by Tranzo ("we," "us," or "our"), including the website tranzo.money, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-[-0.02em]">2. Services Description</h2>
          <p>
            Tranzo provides a high-velocity financial infrastructure platform catering to cross-border treasury management, virtual and physical cards, and instantaneous settlement via our proprietary routing engine. All services are subject to global and jurisdictional AML/KYC regulations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-[-0.02em]">3. User Account and Security</h2>
          <p>
            To use specific features, you must register for an account and provide accurate identity (KYC) details. You are entirely responsible for maintaining the confidentiality of your API keys, hardware access instruments, and account credentials.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-[-0.02em]">4. Financial Risk</h2>
          <p>
            While Tranzo isolates you from market volatility wherever possible, dealing in underlying multi-currency and cryptographic assets carries inherent risks. You acknowledge these risks and agree that Tranzo is not liable for capital depreciation outside of its execution scope.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-[-0.02em]">5. Limitation of Liability</h2>
          <p>
            Our infrastructure is designed for 99.999% uptime; however, Tranzo and its affiliates shall not be held liable for indirect, incidental, special, consequential, or punitive damages resulting from service interruptions beyond our direct hardware control.
          </p>
        </section>
        
        <div className="pt-12 border-t border-white/10">
          <p className="text-sm">
            For further legal inquiries or to dispatch a formal notice, contact our legal counsel at <a href="mailto:legal@tranzo.money" className="text-white hover:underline">legal@tranzo.money</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

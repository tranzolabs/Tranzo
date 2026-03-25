import React, { useEffect } from 'react';

export const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-48 pb-32 px-6 max-w-4xl mx-auto min-h-screen">
      <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-sm font-semibold text-white mb-8">
        Legal Information
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.04em] text-white mb-6 leading-[1.05]">
        Privacy <span className="text-[#A1A1AA]">Policy</span>
      </h1>
      <p className="text-[#A1A1AA] text-lg mb-16 border-b border-white/10 pb-8">
        Last updated: October 24, 2026
      </p>

      <div className="space-y-12 text-[#A1A1AA] leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-[-0.02em]">1. Comprehensive Data Collection Protocols</h2>
          <p className="mb-4 text-justify">
            Tranzo and its global affiliates are uncompromisingly committed to protecting your privacy while operating a real-time, global-scale digital financial infrastructure. When you utilize the Tranzo software development kit (SDK), our Web3 endpoints, or physical/virtual card routing platforms, we systematically collect, process, and securely store vast modalities of encrypted and unencrypted telemetry. This includes, but is emphatically not limited to, personally identifiable information (PII) such as full legal name, date of birth, biometric identification data strictly utilized for continuous multi-factor authentication, exact geolocational signatures during point-of-sale terminal interactions, hardware device fingerprints (MAC addresses, exact browser configurations, IMEI arrays), and granular transaction metadata encompassing counterparty entity identifiers, precise settlement milliseconds, and raw fiat/cryptographic volume. 
          </p>
          <p className="text-justify">
            We heavily mandate the continuous ingress of log data to protect systemic integrity. The aforementioned data is instantly transmitted across our 15 native edge locations and rigorously subjected to automated algorithmic scrutiny to identify velocity anomalies indicative of fraud, money laundering, or terroristic financing operations heavily mandated under the Financial Action Task Force (FATF) and the United States Office of Foreign Assets Control (OFAC) sanction regimes. Your utilization of Tranzo serves as legally binding consent to this exhaustive extraction and retention hierarchy, necessary for operational continuity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-[-0.02em]">2. Third-Party Syndication, Aggregation, and Data Sharing</h2>
          <p className="text-justify">
            Tranzo does not arbitrarily sell your raw demographic profiles to external marketing syndicates. However, in order to perpetually execute sub-50 millisecond cross-border transactions and facilitate physical card issuance, it is technologically necessary to aggressively syndicate elements of your financial persona with our trusted banking-as-a-service (BaaS) institutional partners, card-network entities (e.g., Visa, Mastercard), local clearing houses (ACH, SEPA, SWIFT), and accredited global Know Your Customer (KYC) / Anti-Money Laundering (AML) decentralized intelligence databases. You explicitly acknowledge that by initiating a transaction on Tranzo, fragmented data chunks are irrevocably propelled through deeply interconnected third-party settlement rails over which we exert no structural dominion. In the event of a valid, judicially authorized subpoena from domestic or international regulatory enforcement bodies (such as the SEC, IRS, or equivalent supranational federations), Tranzo is legally obligated to immediately decrypt and surrender comprehensive datasets representing your entire economic activity scope on our platform without necessarily providing prior notice to you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-[-0.02em]">3. Deep Cookies, Tracking Pixels, and Telemetry Vectors</h2>
          <p className="text-justify">
            Our frontend surfaces, including tranzo.money, deploy sophisticated tracking primitives, non-deprecating localized storage variables, and invisible rendering pixels orchestrated to systematically map user session behaviors. This generates robust heatmaps indicating precise mouse velocities, time-to-click latencies, and navigation pathway abstractions. These mechanisms aren't merely analytical; they dynamically inform our dynamic routing logic and threat-mitigation models. Refusal of tracking mechanisms heavily impedes platform authorization and nullifies our Service Level Agreements (SLAs).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-[-0.02em]">4. GDPR, CCPA, and Intenational Data Rights</h2>
          <p className="text-justify uppercase tracking-tight opacity-90 leading-relaxed text-xs">
            IF YOU ARE A RESIDENT OR SUBJECT WITHIN THE GEOGRAPHICAL CONFINES OF THE EUROPEAN ECONOMIC AREA (EEA) OR THE STATE OF CALIFORNIA, YOU ARE GRANTED EXPLICIT STATUTORY PRIVILEGES UNDER THE GENERAL DATA PROTECTION REGULATION (GDPR) AND THE CALIFORNIA CONSUMER PRIVACY ACT (CCPA), RESPECTIVELY. THESE SAFEGUARDS AUTHORIZE YOU TO SUBMIT FORMAL INQUIRIES CONCERNING THE THEORETICAL DELETION, EXTRACTIVE EXPORT, OR LIMITATION OF THE PROCESSING ENGINES UTILIZING YOUR PERSONAL DATA RECORD. HOWEVER, TRANZO INC. ASSERTS ITS FUNDAMENTAL RIGHT TO RETAIN SPECIFIC TRANSACTIONAL LOGS, FINANCIAL VECTORS, AND IDENTITY ARCHIVES INDEFINITELY AS MANDATORY LEGAL EXEMPTIONS UNDER GLOBAL ANTI-FRAUD RETENTION STATUTES OVERRIDE INDIVIDUAL DELETION REQUESTS.
          </p>
        </section>
        
        <div className="pt-12 border-t border-white/10 mt-20 text-center md:text-left">
          <p className="text-sm">
            For complex data extraction requests or DPO communications, contact our compliance division at <a href="mailto:privacy@tranzo.money" className="text-white hover:underline">privacy@tranzo.money</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect } from 'react';

export const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 md:pt-48 pb-32 px-6 max-w-4xl mx-auto min-h-screen">
      <div className="inline-block px-4 py-1.5 rounded-full border border-black/10 text-sm font-semibold text-black mb-8">
        Legal Information
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.04em] text-black mb-6 leading-[1.05]">
        Terms & <span className="text-[#727272]">Conditions</span>
      </h1>
      <p className="text-[#727272] text-lg mb-16 border-b border-black/10 pb-8">
        Last updated: October 24, 2026
      </p>

      <div className="space-y-12 text-[#727272] leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using the services provided by Tranzo ("we," "us," or "our"), including the website tranzo.money, you agree to comply with and be bound by these exhaustive Terms and Conditions. If you do not agree to every single provision set forth herein, you are strictly prohibited from utilizing our platforms, software development kits, API endpoints, hardware interfaces, or associated digital treasury infrastructure. We reserve the right to instantaneously terminate access for any violation.
          </p>
          <p>
            Your continued utilization of the services subsequent to any modifications or legal augmentations to these Terms and Conditions—whether you have explicitly reviewed them or not—constitutes your absolute, irrevocable acceptance of such changes. 
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">2. Comprehensive Disclosures and Limitations of Liability</h2>
          <p className="text-justify indent-8 tracking-tight opacity-80 leading-[1.8]">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL TRANZO, ITS DIRECTORS, EMPLOYEES, AFFILIATES, AGENTS, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE, INCLUDING WITHOUT LIMITATION, ANY DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF OTHER USERS OR THIRD PARTIES; (C) ANY CONTENT OBTAINED FROM THE SERVICE; AND (D) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE. YOU SPECIFICALLY ACKNOWLEDGE AND AGREE THAT THE COMPLEXITY OF PROPRIETARY ROUTING ENGINES, GEOGRAPHICAL EDGE LOCATIONS, HARDWARE-BACKED ENCRYPTION MODULES, AND REAL-TIME SETTLEMENT PROTOCOLS INTRODUCE INHERENT LATENCIES AND VULNERABILITIES THAT ARE IMPOSSIBLE TO PERFECTLY MITIGATE. YOU AS THE END-USER BEAR THE SOLE, ABSOLUTE BURDEN OF RESPONSIBILITY REGARDING THE CUSTODY AND SECURITY OF YOUR API KEYS, OAUTH TOKENS, SESSION COOKIES, AND HARDWARE WALLET SEED PHRASES. BY INITIATING A TRANSACTION ON TRANZO.MONEY, YOU WAIVE ALL RIGHTS TO PURSUE CLASS ACTION LAWSUITS OR COLLECTIVE ARBITRATION PROCEEDINGS AGAINST THE CORPORATE ENTITY OF TRANZO, ITS SUBSIDIARIES, OR ASSOCIATED PAYMENT GATEWAY PROCESSORS.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">3. User Account, AML/KYC Protocols, and Security</h2>
          <p>
            To use specific features related to global routing of fiat or cryptographic assets, you must register for an account and undergo rigorous Identity Verification procedures compliant with the Bank Secrecy Act, the USA PATRIOT Act, and the Financial Action Task Force (FATF) guidelines. You agree to provide current, accurate, and complete information, and you understand that we employ third-party verification solutions to cross-reference this data against international sanctions lists. 
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">4. Financial Execution Risk</h2>
          <p>
            While Tranzo isolates you from market volatility through near-instant millisecond settlement engines, dealing in underlying multi-currency assets carries inherent risks. You acknowledge that Tranzo does not guarantee fixed exchange conversion rates beyond the time-to-live (TTL) quoted in the API response, and any network congestion or liquidity provider failures may result in slippage. Tranzo is not an investment advisor, a broker-dealer, or a bank, and balances held on Tranzo are not insured by the Federal Deposit Insurance Corporation (FDIC) or the Securities Investor Protection Corporation (SIPC).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">5. Intellectual Property and API Usage</h2>
          <p>
            The software, algorithms, UI designs, brands, and infrastructure associated with Tranzo are our exclusive intellectual property. Reverse-engineering, reproducing, or attempting to discover the source code underlying the Tranzo application is strictly forbidden. Subscribing to our Developer APIM tier grants you a non-exclusive, revocable, non-transferable license to interface with our endpoints purely for the creation of business-centric financial instruments, subject strictly to our API Rate Limiting Policies.
          </p>
        </section>
        
        <div className="pt-12 border-t border-black/10">
          <p className="text-sm">
            For further legal inquiries, subpoena requests, or to dispatch a formal notice, contact our legal counsel at <a href="mailto:legal@tranzo.money" className="text-black hover:underline font-bold">legal@tranzo.money</a>. All jurisdictional disputes will be settled in the courts of Delaware, USA.
          </p>
        </div>
      </div>
    </div>
  );
};

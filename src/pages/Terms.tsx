import React, { useEffect } from 'react';

export const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 sm:pt-32 md:pt-48 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 max-w-4xl mx-auto min-h-screen">
      <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-black/10 text-xs sm:text-sm font-semibold text-black mb-6 sm:mb-8">
        Legal Information
      </div>
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-[-0.04em] text-black mb-4 sm:mb-6 leading-[1.05]">
        Terms & <span className="text-[#727272]">Conditions</span>
      </h1>
      <p className="text-[#727272] text-base sm:text-lg mb-10 sm:mb-16 border-b border-black/10 pb-6 sm:pb-8">
        Last updated: March 25, 2026
      </p>

      <div className="space-y-12 text-[#727272] leading-relaxed">

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">1. Acceptance of Terms</h2>
          <p className="mb-4">
            These Terms and Conditions ("Terms," "Agreement") constitute a legally binding agreement between you ("User," "you," or "your") and Tranzo Inc., including its subsidiaries, affiliates, and related entities (collectively, "Tranzo," "Tranzo.money," "we," "us," or "our"). These Terms govern your access to and use of our website located at tranzo.money, our mobile applications, our self-custody wallet software, our virtual and physical crypto card services, the Dripper hardware wallet and associated firmware, our software development kits (SDKs), application programming interfaces (APIs), and all other related products, services, features, content, and applications offered by Tranzo (collectively, the "Services").
          </p>
          <p className="mb-4">
            By accessing, browsing, downloading, installing, or otherwise using any part of the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, and all other policies and guidelines referenced herein or otherwise published on our platform (collectively, the "Agreements"). If you are using the Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms, and references to "you" shall include such organization.
          </p>
          <p>
            If you do not agree to any provision of these Terms, you must immediately cease all use of the Services and delete any Tranzo software installed on your devices. Your continued access to or use of the Services following any modifications to these Terms constitutes your acceptance of the revised Terms, whether or not you have reviewed them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">2. Eligibility</h2>
          <p className="mb-4">
            To access and use the Services, you must meet the following eligibility requirements:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>You must be at least 18 years of age or the age of majority in your jurisdiction, whichever is higher.</li>
            <li>You must have the legal capacity and authority to enter into a binding agreement.</li>
            <li>You must not be located in, under the control of, or a national or resident of any country or territory subject to comprehensive sanctions imposed by the United States, the European Union, the United Kingdom, or the United Nations, including but not limited to Cuba, Iran, North Korea, Syria, the Crimea region, the Donetsk People's Republic, and the Luhansk People's Republic (collectively, "Restricted Territories").</li>
            <li>You must not be listed on any U.S. government list of prohibited or restricted parties, including the Specially Designated Nationals (SDN) List maintained by OFAC, the Denied Persons List maintained by the Bureau of Industry and Security, the Entity List, or any equivalent list maintained by the European Union, United Kingdom, or United Nations.</li>
            <li>You must not have been previously suspended, banned, or otherwise restricted from using the Services.</li>
            <li>You must comply with all applicable laws and regulations in your jurisdiction regarding the use of cryptocurrency services, digital asset management, and financial services.</li>
          </ul>
          <p>
            By using the Services, you represent and warrant that you meet all of the foregoing eligibility requirements. We reserve the right to verify your eligibility at any time and to refuse, suspend, or terminate access to the Services if we determine, in our sole discretion, that you do not meet these requirements or have provided false, misleading, or outdated information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">3. Account Registration and Identity Verification</h2>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">3.1 Account Creation</h3>
          <p className="mb-4">
            To access certain features of the Services, you must create a Tranzo account by providing accurate, current, and complete information as prompted by the registration process. You agree to update your information promptly to keep it accurate, current, and complete at all times. Failure to do so may result in suspension or termination of your account.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">3.2 Identity Verification (KYC)</h3>
          <p className="mb-4">
            In compliance with applicable Know Your Customer (KYC), Anti-Money Laundering (AML), and Counter-Terrorism Financing (CTF) regulations, you may be required to undergo identity verification procedures before accessing certain Services or exceeding specified transaction thresholds. This process may include but is not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Submission of government-issued photo identification (passport, national ID card, driver's license).</li>
            <li>Proof of residential address (utility bill, bank statement, government correspondence dated within the last three months).</li>
            <li>Biometric verification, including facial recognition and liveness detection.</li>
            <li>Source of funds and source of wealth documentation for high-value accounts.</li>
            <li>Enhanced due diligence (EDD) for politically exposed persons (PEPs), high-risk jurisdictions, and accounts flagged by our risk assessment systems.</li>
          </ul>
          <p className="mb-4">
            You agree to cooperate fully with any identity verification requests. Failure to complete verification within the requested timeframe may result in limitations on your account functionality, suspension of pending transactions, or termination of your account.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">3.3 Account Security</h3>
          <p>
            You are solely responsible for maintaining the confidentiality and security of your account credentials, including your password, PIN, two-factor authentication codes, private keys, seed phrases, and any hardware wallet credentials. You agree to immediately notify Tranzo at <a href="mailto:security@tranzo.money" className="text-black hover:underline font-bold">security@tranzo.money</a> if you become aware of any unauthorized use of your account or any other breach of security. Tranzo will not be liable for any loss or damage arising from your failure to maintain adequate security of your account credentials.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">4. Description of Services</h2>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">4.1 Self-Custody Wallet</h3>
          <p className="mb-4">
            Tranzo provides a non-custodial, multi-chain digital asset wallet ("Wallet") that allows you to generate and manage cryptographic key pairs, store digital assets, initiate blockchain transactions, interact with decentralized applications (dApps), and manage your cryptocurrency portfolio. As a self-custody solution, Tranzo does not hold, control, or have access to your private keys, seed phrases, or recovery phrases. You acknowledge and agree that you are solely responsible for the safekeeping of your private keys and seed phrases, and that loss of these credentials will result in permanent, irreversible loss of access to your digital assets.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">4.2 Crypto Card Services</h3>
          <p className="mb-4">
            Tranzo offers virtual and physical payment cards ("Tranzo Card") that enable you to spend your cryptocurrency holdings at merchants that accept card payments. When you make a purchase using your Tranzo Card, the required amount of cryptocurrency is automatically converted to the applicable fiat currency at the prevailing exchange rate at the time of the transaction. Card services are provided in partnership with licensed card issuers and payment processors and are subject to additional terms, conditions, and fees as described in the Tranzo Card Agreement, which is incorporated into these Terms by reference.
          </p>
          <p className="mb-4">
            You acknowledge that exchange rates fluctuate and that the final fiat amount charged for a card transaction may differ from the rate displayed at the time of authorization due to settlement timing, network fees, and currency conversion spreads. Tranzo reserves the right to set spending limits, transaction limits, and geographic restrictions on card usage at its sole discretion.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">4.3 Dripper Hardware Wallet</h3>
          <p className="mb-4">
            The Dripper hardware wallet ("Dripper") is a physical device designed to securely store your private keys offline and facilitate the signing of cryptocurrency transactions. The Dripper is sold as a separate product and is subject to the Dripper Hardware Wallet Limited Warranty and the Dripper End User License Agreement (EULA), which govern its use, warranties, and limitations. Tranzo provides firmware updates for the Dripper and maintains integration between the Dripper and the Tranzo Wallet software.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">4.4 Fiat-to-Crypto and Crypto-to-Fiat Services</h3>
          <p className="mb-4">
            Tranzo facilitates the conversion between fiat currencies and supported cryptocurrencies through integrated on-ramp and off-ramp services ("Conversion Services"). These services may be provided directly by Tranzo or through licensed third-party partners. Conversion Services are subject to applicable exchange rates, fees, transaction limits, and processing times as disclosed on our platform. You acknowledge that cryptocurrency markets are highly volatile and that the value of digital assets may fluctuate significantly between the time you initiate a conversion and the time it is completed.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">4.5 Dashboard and Analytics</h3>
          <p>
            Tranzo provides a unified dashboard that allows you to view and manage your account balances, transaction history, card activity, and portfolio analytics. The information presented on the dashboard is for informational purposes only and may not reflect real-time balances due to blockchain confirmation times, pending transactions, and settlement delays. Tranzo does not guarantee the accuracy, completeness, or timeliness of dashboard data and shall not be liable for any decisions made based on dashboard information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">5. Fees and Charges</h2>
          <p className="mb-4">
            You agree to pay all fees and charges associated with your use of the Services as described on our fee schedule, which is available on our website and may be updated from time to time. Fees may include but are not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong className="text-black">Transaction Fees:</strong> Fees charged for cryptocurrency transactions, including network/gas fees, which are paid to blockchain validators and are not retained by Tranzo.</li>
            <li><strong className="text-black">Conversion Fees:</strong> Fees and spreads applied to fiat-to-crypto and crypto-to-fiat conversions.</li>
            <li><strong className="text-black">Card Fees:</strong> Fees associated with card issuance, replacement, maintenance, ATM withdrawals, foreign currency transactions, and other card-related services.</li>
            <li><strong className="text-black">Subscription Fees:</strong> Fees for premium account tiers or subscription-based features, if applicable.</li>
            <li><strong className="text-black">Inactivity Fees:</strong> Fees that may be charged on accounts that remain inactive for an extended period, as disclosed in our fee schedule.</li>
          </ul>
          <p className="mb-4">
            All fees are denominated in the currency specified on our fee schedule and are non-refundable unless otherwise stated. Tranzo reserves the right to modify its fee structure at any time upon reasonable notice. Continued use of the Services after a fee change constitutes your acceptance of the updated fees.
          </p>
          <p>
            You are solely responsible for determining and paying any taxes applicable to your use of the Services, including but not limited to income taxes, capital gains taxes, value-added taxes, and withholding taxes. Tranzo does not provide tax advice and is not responsible for determining whether taxes apply to your transactions or for collecting, reporting, withholding, or remitting any taxes arising from any transaction, except as required by applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">6. Prohibited Activities</h2>
          <p className="mb-4">
            You agree that you will not use the Services for any purpose that is unlawful, prohibited by these Terms, or harmful to Tranzo, its users, or third parties. Without limiting the foregoing, you agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Services in connection with any illegal activity, including but not limited to money laundering, terrorist financing, tax evasion, fraud, embezzlement, or the purchase or sale of illegal goods or services.</li>
            <li>Use the Services to circumvent or attempt to circumvent economic or trade sanctions imposed by any government or international organization.</li>
            <li>Use the Services to engage in market manipulation, wash trading, front-running, or any other form of market abuse.</li>
            <li>Create multiple accounts, impersonate another person, or provide false or misleading information during registration or identity verification.</li>
            <li>Attempt to gain unauthorized access to any part of the Services, other users' accounts, or any computer systems or networks connected to the Services.</li>
            <li>Reverse-engineer, decompile, disassemble, or otherwise attempt to derive the source code of any Tranzo software, including the Wallet, mobile applications, and Dripper firmware.</li>
            <li>Introduce viruses, worms, Trojan horses, or other malicious code into the Services or attempt to interfere with or disrupt the integrity or performance of the Services.</li>
            <li>Use any automated means, including bots, scrapers, or crawlers, to access or interact with the Services, except through our published APIs in accordance with our API Terms of Use.</li>
            <li>Engage in any activity that imposes an unreasonable or disproportionately large load on our infrastructure.</li>
            <li>Use the Services in any manner that could damage, disable, overburden, or impair any Tranzo server, network, or system.</li>
            <li>Transfer or assign your Tranzo account or any rights or obligations under these Terms to any third party without our prior written consent.</li>
            <li>Use the Services to send, receive, or store digital assets that are derived from illegal activity or that violate any applicable law or regulation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">7. Risks and Disclaimers</h2>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">7.1 Cryptocurrency Risks</h3>
          <p className="mb-4">
            You acknowledge and agree that the use of cryptocurrency and digital assets involves significant risks, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong className="text-black">Price Volatility:</strong> The value of cryptocurrencies and digital assets is highly volatile and can fluctuate dramatically in short periods. You may experience significant losses.</li>
            <li><strong className="text-black">Regulatory Risk:</strong> The regulatory landscape for cryptocurrencies is rapidly evolving and varies significantly across jurisdictions. Changes in laws, regulations, or governmental policies may adversely affect the value, function, or legality of digital assets and the Services.</li>
            <li><strong className="text-black">Technology Risk:</strong> Blockchain networks and cryptocurrency protocols may experience technical issues, including software bugs, hard forks, 51% attacks, consensus failures, and smart contract vulnerabilities, any of which could result in loss of funds.</li>
            <li><strong className="text-black">Loss of Private Keys:</strong> As a self-custody platform, Tranzo does not store your private keys or seed phrases. Loss of these credentials will result in permanent, irreversible loss of access to your digital assets.</li>
            <li><strong className="text-black">Irreversibility of Transactions:</strong> Blockchain transactions are generally irreversible once confirmed. Sending digital assets to an incorrect address or an incompatible network may result in permanent loss of those assets.</li>
            <li><strong className="text-black">Cybersecurity Risk:</strong> Despite our security measures, there is always a risk of hacking, phishing, social engineering, and other cyberattacks that could compromise your account or the Services.</li>
            <li><strong className="text-black">Counterparty Risk:</strong> Third-party service providers, exchanges, and protocols that interact with the Services may experience financial difficulties, security breaches, or operational failures.</li>
          </ul>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">7.2 Disclaimer of Warranties</h3>
          <p className="mb-4 uppercase text-xs tracking-tight opacity-90 leading-[1.8]">
            THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, TRANZO DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. TRANZO DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS. TRANZO DOES NOT WARRANT THE ACCURACY, COMPLETENESS, OR RELIABILITY OF ANY CONTENT, DATA, OR INFORMATION PROVIDED THROUGH THE SERVICES, INCLUDING EXCHANGE RATES, PORTFOLIO VALUATIONS, AND TRANSACTION STATUS INFORMATION.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">7.3 No Financial Advice</h3>
          <p>
            Tranzo does not provide investment, financial, tax, or legal advice. Nothing in the Services or any Tranzo communications should be construed as a recommendation, endorsement, or solicitation to buy, sell, hold, or otherwise transact in any cryptocurrency or digital asset. You should consult with qualified professionals before making any financial decisions. Tranzo is not a bank, broker-dealer, investment advisor, exchange, or money transmitter (except to the extent we hold applicable licenses), and balances held through the Services are not insured by the Federal Deposit Insurance Corporation (FDIC), the Securities Investor Protection Corporation (SIPC), or any equivalent governmental or quasi-governmental program.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">8. Limitation of Liability</h2>
          <p className="mb-4 uppercase text-xs tracking-tight opacity-90 leading-[1.8]">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL TRANZO, ITS DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, AGENTS, CONTRACTORS, SUPPLIERS, LICENSORS, OR SERVICE PROVIDERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, REVENUE, GOODWILL, USE, DATA, DIGITAL ASSETS, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH: (A) YOUR ACCESS TO OR USE OF, OR INABILITY TO ACCESS OR USE, THE SERVICES; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON OR RELATED TO THE SERVICES; (C) ANY CONTENT OR INFORMATION OBTAINED FROM OR THROUGH THE SERVICES; (D) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS, CONTENT, OR DIGITAL ASSETS; (E) THE VOLATILITY OR DEPRECIATION IN VALUE OF ANY CRYPTOCURRENCY OR DIGITAL ASSET; (F) ERRORS, INACCURACIES, OR DELAYS IN EXCHANGE RATES, TRANSACTION PROCESSING, OR SETTLEMENT; (G) ANY FAILURE, DISRUPTION, OR VULNERABILITY OF ANY BLOCKCHAIN NETWORK, SMART CONTRACT, OR THIRD-PARTY PROTOCOL; (H) ANY ACTION TAKEN BY REGULATORY AUTHORITIES THAT AFFECTS THE SERVICES OR YOUR ABILITY TO USE THEM; OR (I) ANY OTHER MATTER RELATED TO THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT TRANZO HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
          </p>
          <p className="mb-4 uppercase text-xs tracking-tight opacity-90 leading-[1.8]">
            IN NO EVENT SHALL TRANZO'S AGGREGATE LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR YOUR USE OF THE SERVICES EXCEED THE GREATER OF: (A) THE TOTAL AMOUNT OF FEES PAID BY YOU TO TRANZO DURING THE TWELVE (12) MONTH PERIOD IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM; OR (B) ONE HUNDRED U.S. DOLLARS (USD $100.00).
          </p>
          <p>
            Some jurisdictions do not allow the exclusion or limitation of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the above limitations may not apply to you. In such jurisdictions, Tranzo's liability shall be limited to the maximum extent permitted by applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">9. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Tranzo, its directors, officers, employees, affiliates, agents, contractors, suppliers, licensors, and service providers from and against any and all claims, demands, actions, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees and court costs) arising out of or in connection with: (a) your access to or use of the Services; (b) your violation of these Terms or any applicable law or regulation; (c) your violation of any third-party right, including any intellectual property, privacy, or proprietary right; (d) any content you submit, post, or transmit through the Services; (e) your negligence, willful misconduct, or fraud; or (f) any dispute between you and any third party arising from your use of the Services. This indemnification obligation will survive the termination of these Terms and your use of the Services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">10. Intellectual Property</h2>
          <p className="mb-4">
            All rights, title, and interest in and to the Services, including all software, code, algorithms, interfaces, designs, text, graphics, logos, trademarks, service marks, trade names, domain names, trade secrets, patents, patent applications, and other intellectual property rights (collectively, "Tranzo IP"), are and shall remain the exclusive property of Tranzo and its licensors. Nothing in these Terms grants you any right, title, or interest in the Tranzo IP except for the limited license expressly set forth herein.
          </p>
          <p className="mb-4">
            Subject to your compliance with these Terms, Tranzo grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Services solely for your personal, non-commercial use (or authorized business use, if you have entered into a separate commercial agreement with Tranzo). This license does not include the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Modify, adapt, translate, reverse-engineer, decompile, disassemble, or create derivative works based on the Services or any Tranzo IP.</li>
            <li>Copy, reproduce, distribute, publicly display, publicly perform, broadcast, or transmit any part of the Services.</li>
            <li>Use any data mining, robots, scraping, or similar data gathering or extraction methods on the Services.</li>
            <li>Sublicense, sell, rent, lease, transfer, assign, or otherwise grant rights to the Services or Tranzo IP to any third party.</li>
            <li>Remove, alter, or obscure any copyright, trademark, or other proprietary rights notices incorporated in or accompanying the Services.</li>
          </ul>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">10.1 API and SDK License</h3>
          <p>
            If you access the Tranzo API or SDK, you are granted a separate, limited license to use these tools in accordance with the Tranzo API Terms of Use and SDK License Agreement, which are available on our developer portal and incorporated into these Terms by reference. API and SDK usage is subject to rate limits, usage restrictions, and acceptable use policies as described in our developer documentation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">11. Suspension and Termination</h2>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">11.1 Suspension</h3>
          <p className="mb-4">
            Tranzo reserves the right to suspend or restrict your access to all or any part of the Services, without prior notice and at our sole discretion, if:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>We reasonably believe that your account has been compromised or is being used for unauthorized purposes.</li>
            <li>We detect suspicious, fraudulent, or potentially illegal activity on your account.</li>
            <li>You fail to provide requested identity verification documentation within the specified timeframe.</li>
            <li>We are required to do so by applicable law, regulation, or order from a regulatory authority, court, or law enforcement agency.</li>
            <li>You violate or we reasonably suspect that you have violated any provision of these Terms.</li>
            <li>We are conducting an investigation into potential violations of these Terms or applicable law.</li>
          </ul>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">11.2 Termination by Tranzo</h3>
          <p className="mb-4">
            Tranzo may terminate these Terms and your access to the Services at any time, for any reason or no reason, upon reasonable notice. In the event of termination, we will provide you with a reasonable opportunity to withdraw your digital assets and any fiat balances from your account, except where we are prohibited from doing so by applicable law, regulatory requirements, or a legal order.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">11.3 Termination by You</h3>
          <p className="mb-4">
            You may terminate your account at any time by contacting us at <a href="mailto:support@tranzo.money" className="text-black hover:underline font-bold">support@tranzo.money</a> or through the account settings in the Tranzo application. Before closing your account, you should withdraw all digital assets and fiat balances. Any pending transactions will be processed before the account is fully closed.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">11.4 Effect of Termination</h3>
          <p>
            Upon termination for any reason: (a) all rights and licenses granted to you under these Terms will immediately cease; (b) you must immediately stop using the Services; (c) any outstanding fees or charges will become immediately due and payable; (d) Tranzo may retain your information as required by applicable law, regulation, or our data retention policies as described in our Privacy Policy; and (e) all provisions of these Terms that by their nature should survive termination will survive, including but not limited to ownership provisions, warranty disclaimers, indemnification, limitation of liability, dispute resolution, and general provisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">12. Dispute Resolution and Arbitration</h2>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">12.1 Informal Resolution</h3>
          <p className="mb-4">
            Before initiating any formal dispute resolution proceeding, you agree to first attempt to resolve any dispute, claim, or controversy arising out of or relating to these Terms or the Services ("Dispute") informally by contacting us at <a href="mailto:legal@tranzo.money" className="text-black hover:underline font-bold">legal@tranzo.money</a>. We will attempt to resolve the Dispute informally within sixty (60) days from the date we receive your written notice. If the Dispute is not resolved within this period, either party may proceed with formal dispute resolution as set forth below.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">12.2 Binding Arbitration</h3>
          <p className="mb-4">
            Any Dispute that cannot be resolved informally shall be finally and exclusively resolved by binding arbitration administered by the American Arbitration Association ("AAA") in accordance with its Commercial Arbitration Rules, except as modified by this Agreement. The arbitration shall be conducted by a single arbitrator with expertise in technology and financial services law. The seat of arbitration shall be Wilmington, Delaware, United States. The language of the arbitration shall be English.
          </p>
          <p className="mb-4">
            The arbitrator shall have the authority to award any remedy or relief that would be available in a court of competent jurisdiction, including temporary, preliminary, and permanent injunctive relief. The arbitrator's decision shall be final and binding, and judgment on the award rendered by the arbitrator may be entered in any court having jurisdiction thereof.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">12.3 Class Action Waiver</h3>
          <p className="mb-4 uppercase text-xs tracking-tight opacity-90 leading-[1.8]">
            YOU AND TRANZO AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. YOU EXPRESSLY WAIVE YOUR RIGHT TO PARTICIPATE AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS ACTION, COLLECTIVE ACTION, PRIVATE ATTORNEY GENERAL ACTION, OR ANY OTHER REPRESENTATIVE PROCEEDING. THE ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE PERSON'S CLAIMS AND MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A REPRESENTATIVE OR CLASS PROCEEDING.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">12.4 Jury Trial Waiver</h3>
          <p className="uppercase text-xs tracking-tight opacity-90 leading-[1.8]">
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU AND TRANZO EACH WAIVE ANY RIGHT TO A JURY TRIAL IN ANY ACTION, PROCEEDING, OR COUNTERCLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">13. Governing Law and Jurisdiction</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of laws principles. To the extent that any lawsuit or court proceeding is permitted hereunder, you and Tranzo agree to submit to the exclusive personal jurisdiction of the state and federal courts located in Wilmington, Delaware, for the purpose of litigating any such dispute. Notwithstanding the foregoing, Tranzo may seek injunctive or other equitable relief in any court of competent jurisdiction to protect its intellectual property rights or to prevent irreparable harm.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">14. Force Majeure</h2>
          <p>
            Tranzo shall not be liable for any failure or delay in the performance of its obligations under these Terms to the extent that such failure or delay results from circumstances beyond Tranzo's reasonable control, including but not limited to acts of God, natural disasters, epidemics or pandemics, war, terrorism, riots, civil unrest, government actions or orders, sanctions, embargoes, labor disputes, power failures, internet or telecommunications infrastructure failures, cyberattacks, blockchain network congestion or outages, hard forks or protocol changes, regulatory changes, and any other event that is beyond Tranzo's reasonable control (each, a "Force Majeure Event"). In the event of a Force Majeure Event, Tranzo's obligations under these Terms shall be suspended for the duration of the Force Majeure Event, and Tranzo shall use commercially reasonable efforts to resume performance as soon as practicable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">15. Modifications to Terms</h2>
          <p>
            Tranzo reserves the right to modify, amend, or update these Terms at any time at its sole discretion. When we make material changes, we will notify you by updating the "Last updated" date at the top of these Terms, sending you an email notification to the address associated with your account, and/or posting a prominent notice on our website or within the Services. Your continued use of the Services after the effective date of any modifications constitutes your acceptance of the revised Terms. If you do not agree to the modified Terms, you must stop using the Services and close your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">16. General Provisions</h2>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">16.1 Entire Agreement</h3>
          <p className="mb-4">
            These Terms, together with the Privacy Policy, Cookie Policy, Tranzo Card Agreement, Dripper EULA, API Terms of Use, and all other policies and agreements referenced herein, constitute the entire agreement between you and Tranzo with respect to the Services and supersede all prior or contemporaneous understandings, agreements, negotiations, representations, and warranties, both written and oral, regarding the Services.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">16.2 Severability</h3>
          <p className="mb-4">
            If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid, legal, and enforceable, or if it cannot be so modified, it shall be severed from these Terms, and the remaining provisions shall continue in full force and effect.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">16.3 Waiver</h3>
          <p className="mb-4">
            The failure of Tranzo to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver of any provision of these Terms will be effective only if in writing and signed by an authorized representative of Tranzo.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">16.4 Assignment</h3>
          <p className="mb-4">
            You may not assign or transfer these Terms or any rights or obligations hereunder, by operation of law or otherwise, without the prior written consent of Tranzo. Tranzo may freely assign or transfer these Terms and its rights and obligations hereunder without restriction. Any attempted assignment in violation of this section shall be null and void.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">16.5 Notices</h3>
          <p className="mb-4">
            All notices required or permitted under these Terms shall be in writing and shall be deemed delivered when sent by email to the email address associated with your Tranzo account (for notices to you) or to <a href="mailto:legal@tranzo.money" className="text-black hover:underline font-bold">legal@tranzo.money</a> (for notices to Tranzo). You agree that electronic communications satisfy any legal requirement that such communications be in writing.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">16.6 Third-Party Beneficiaries</h3>
          <p className="mb-4">
            These Terms do not create any third-party beneficiary rights in any individual or entity that is not a party to these Terms, except that Tranzo's affiliates, licensors, and service providers are intended third-party beneficiaries of the indemnification, limitation of liability, and disclaimer provisions of these Terms.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">16.7 Headings</h3>
          <p>
            The section headings in these Terms are for convenience only and have no legal or contractual effect.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">17. Contact Information</h2>
          <p className="mb-4">
            If you have any questions, concerns, or feedback regarding these Terms and Conditions, please contact us:
          </p>
          <div className="bg-[#F5F5F7] border border-black/5 rounded-2xl p-8 space-y-3">
            <p><strong className="text-black">Tranzo Inc.</strong></p>
            <p>Attn: Legal Department</p>
            <p>Email: <a href="mailto:legal@tranzo.money" className="text-black hover:underline font-bold">legal@tranzo.money</a></p>
            <p>Support: <a href="mailto:support@tranzo.money" className="text-black hover:underline font-bold">support@tranzo.money</a></p>
            <p>Security: <a href="mailto:security@tranzo.money" className="text-black hover:underline font-bold">security@tranzo.money</a></p>
            <p>General: <a href="mailto:connect@tranzo.money" className="text-black hover:underline font-bold">connect@tranzo.money</a></p>
          </div>
        </section>

        <div className="pt-12 border-t border-black/10">
          <p className="text-sm">
            For further legal inquiries, subpoena requests, or to dispatch a formal notice, contact our legal counsel at <a href="mailto:legal@tranzo.money" className="text-black hover:underline font-bold">legal@tranzo.money</a>. All jurisdictional disputes will be governed by the laws of the State of Delaware, USA.
          </p>
        </div>
      </div>
    </div>
  );
};

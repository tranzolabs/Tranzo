import React, { useEffect } from 'react';

export const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 sm:pt-32 md:pt-48 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 max-w-4xl mx-auto min-h-screen">
      <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-black/10 text-xs sm:text-sm font-semibold text-black mb-6 sm:mb-8">
        Legal Information
      </div>
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-[-0.04em] text-black mb-4 sm:mb-6 leading-[1.05]">
        Privacy <span className="text-[#727272]">Policy</span>
      </h1>
      <p className="text-[#727272] text-base sm:text-lg mb-10 sm:mb-16 border-b border-black/10 pb-6 sm:pb-8">
        Last updated: March 25, 2026
      </p>

      <div className="space-y-12 text-[#727272] leading-relaxed">

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">1. Introduction and Scope</h2>
          <p className="mb-4">
            This Privacy Policy ("Policy") describes how Tranzo Inc. and its subsidiaries, affiliates, and related entities (collectively, "Tranzo," "Tranzo.money," "we," "us," or "our") collect, use, store, share, and protect information obtained from users ("you," "your," or "User") of our website located at tranzo.money, our mobile applications, our self-custody wallet software, our virtual and physical crypto card services, the Dripper hardware wallet ecosystem, our software development kits (SDKs), application programming interfaces (APIs), and all other related products, services, features, content, and applications offered by Tranzo (collectively, the "Services").
          </p>
          <p className="mb-4">
            This Policy applies to all visitors, users, and others who access or use the Services. By accessing or using any part of the Services, you acknowledge that you have read, understood, and agree to be bound by this Policy. If you do not agree with any part of this Policy, you must immediately discontinue use of the Services.
          </p>
          <p>
            This Policy should be read in conjunction with our Terms and Conditions, Cookie Policy, and any other agreements or notices that may be provided to you in connection with your use of the Services. In the event of any conflict between this Policy and the Terms and Conditions, the Terms and Conditions shall prevail to the extent of the inconsistency.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">2. Information We Collect</h2>
          <p className="mb-4">
            We collect information in multiple ways depending on how you interact with our Services. The categories of information we collect include the following:
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">2.1 Information You Provide Directly</h3>
          <p className="mb-4">
            When you create an account, complete identity verification, initiate transactions, contact customer support, or otherwise interact with our Services, you may provide us with the following types of information:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong className="text-black">Identity Information:</strong> Full legal name, date of birth, nationality, government-issued identification numbers (such as passport number, national ID number, driver's license number, or Social Security Number where applicable), photographs of identification documents, and selfie or biometric verification data used for identity confirmation.</li>
            <li><strong className="text-black">Contact Information:</strong> Email address, phone number, residential address, mailing address, and any other contact details you provide during registration or account management.</li>
            <li><strong className="text-black">Financial Information:</strong> Bank account details, credit or debit card numbers, cryptocurrency wallet addresses, transaction histories from linked external accounts, proof of funds documentation, source of wealth declarations, and tax identification numbers.</li>
            <li><strong className="text-black">Account Credentials:</strong> Username, password (stored in hashed and salted form), two-factor authentication preferences, security questions and answers, and PIN codes associated with your Tranzo card.</li>
            <li><strong className="text-black">Communication Data:</strong> Contents of messages sent through our support channels, feedback submitted through surveys or forms, and any other communications you direct to us through email, live chat, social media, or in-app messaging.</li>
            <li><strong className="text-black">Preferences and Settings:</strong> Language preferences, notification settings, display currency preferences, spending limit configurations, and card management preferences.</li>
          </ul>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">2.2 Information Collected Automatically</h3>
          <p className="mb-4">
            When you access or use our Services, we automatically collect certain information about your device, browsing activity, and usage patterns, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong className="text-black">Device Information:</strong> Hardware model, operating system and version, unique device identifiers (such as IDFA, GAID, IMEI, and MAC address), screen resolution, browser type and version, installed plugins, and device language settings.</li>
            <li><strong className="text-black">Log and Usage Data:</strong> IP address, access timestamps, pages viewed, links clicked, features used, session duration, referring URLs, exit pages, crash reports, and error logs.</li>
            <li><strong className="text-black">Location Data:</strong> Approximate geographic location derived from your IP address, and precise geolocation data from your mobile device if you have granted us permission to access location services. Location data may be collected during point-of-sale transactions, ATM withdrawals, and when accessing geo-restricted features.</li>
            <li><strong className="text-black">Transaction Metadata:</strong> Timestamps of transactions, merchant category codes (MCCs), transaction amounts, currency pairs, exchange rates applied, settlement times, network fees, gas fees for on-chain transactions, and blockchain confirmation data.</li>
            <li><strong className="text-black">Wallet and Blockchain Data:</strong> Public wallet addresses, on-chain transaction hashes, token balances, smart contract interactions, DeFi protocol usage patterns, and NFT holdings associated with connected wallets. Note that as a self-custody platform, we do not have access to your private keys or seed phrases.</li>
          </ul>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">2.3 Information from Third Parties</h3>
          <p className="mb-4">
            We may receive information about you from third-party sources and combine it with the information we collect directly. These sources include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong className="text-black">Identity Verification Providers:</strong> Results of KYC/AML checks, sanctions screening results, politically exposed person (PEP) status, adverse media screening results, and document authentication outcomes.</li>
            <li><strong className="text-black">Financial Institutions:</strong> Account verification data, balance information from linked bank accounts (with your authorization), and payment processor data.</li>
            <li><strong className="text-black">Blockchain Analytics Providers:</strong> Wallet risk scores, transaction pattern analysis, association with known illicit addresses, and compliance intelligence related to cryptocurrency transactions.</li>
            <li><strong className="text-black">Credit Bureaus and Reporting Agencies:</strong> Credit scores, credit history summaries, and fraud alert data where permitted by applicable law and necessary for our Services.</li>
            <li><strong className="text-black">Public Sources:</strong> Publicly available information from government databases, public blockchain explorers, social media profiles (where you have chosen to link your social accounts), and commercially available data sources.</li>
          </ul>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">2.4 Cookies, Tracking Technologies, and Analytics</h3>
          <p>
            Our website and mobile applications use cookies, web beacons, pixel tags, local storage objects, software development kits (SDKs), and similar tracking technologies to collect information about your browsing and usage activities. These technologies help us analyze trends, administer the Services, track user movements across the platform, gather demographic information about our user base, prevent fraud, and improve user experience. For detailed information about the specific cookies and tracking technologies we use, their purposes, and how to manage your cookie preferences, please refer to our Cookie Policy, which is incorporated into this Privacy Policy by reference.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">3. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect for the following purposes:
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">3.1 Provision of Services</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>To create, maintain, and manage your Tranzo account and associated wallet infrastructure.</li>
            <li>To process and facilitate cryptocurrency transactions, fiat-to-crypto and crypto-to-fiat conversions, card payments, and peer-to-peer transfers.</li>
            <li>To issue, activate, manage, and service virtual and physical Tranzo crypto cards.</li>
            <li>To provide customer support, respond to inquiries, and resolve disputes.</li>
            <li>To deliver notifications related to your account, transactions, security alerts, and service updates.</li>
            <li>To enable integration with the Dripper hardware wallet, including firmware updates, device pairing, and secure key management interfaces.</li>
          </ul>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">3.2 Compliance and Legal Obligations</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>To verify your identity in compliance with Know Your Customer (KYC) requirements mandated by applicable financial regulations across all jurisdictions in which we operate.</li>
            <li>To conduct Anti-Money Laundering (AML), Counter-Terrorism Financing (CTF), and sanctions screening in accordance with the Bank Secrecy Act (BSA), the USA PATRIOT Act, EU Anti-Money Laundering Directives, the Financial Action Task Force (FATF) Recommendations, and all other applicable regulatory frameworks.</li>
            <li>To detect, investigate, prevent, and report suspicious activities, unauthorized transactions, and potential violations of law.</li>
            <li>To file Suspicious Activity Reports (SARs), Currency Transaction Reports (CTRs), and other regulatory filings as required by applicable law.</li>
            <li>To comply with court orders, subpoenas, legal process, law enforcement requests, and regulatory inquiries from authorities including but not limited to the Securities and Exchange Commission (SEC), the Commodity Futures Trading Commission (CFTC), the Financial Crimes Enforcement Network (FinCEN), the Internal Revenue Service (IRS), the Office of Foreign Assets Control (OFAC), and their international equivalents.</li>
            <li>To maintain records as required by tax reporting obligations, including compliance with the Common Reporting Standard (CRS) and the Foreign Account Tax Compliance Act (FATCA).</li>
          </ul>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">3.3 Security and Fraud Prevention</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>To monitor accounts and transactions for signs of fraud, unauthorized access, identity theft, and other malicious activities using automated detection systems and manual review processes.</li>
            <li>To implement and maintain technical, administrative, and physical security measures to protect our infrastructure, your data, and the integrity of the Services.</li>
            <li>To conduct security audits, vulnerability assessments, and penetration testing.</li>
            <li>To enforce our Terms and Conditions and other agreements, including the investigation of potential violations.</li>
          </ul>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">3.4 Improvement and Development</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>To analyze usage patterns and trends to improve existing features and develop new Services.</li>
            <li>To conduct research, surveys, and statistical analysis to better understand how users interact with our platform.</li>
            <li>To test and develop new products, features, and functionalities.</li>
            <li>To personalize your experience and tailor content, features, and offers to your preferences and usage patterns.</li>
          </ul>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">3.5 Communications and Marketing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>To send you transactional communications, including transaction confirmations, receipts, security alerts, and account notifications.</li>
            <li>To send you promotional communications about Tranzo products, features, services, events, and offers that may be of interest to you, subject to your communication preferences and applicable opt-out rights.</li>
            <li>To facilitate referral programs and promotional campaigns in which you choose to participate.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">4. Legal Bases for Processing (EEA, UK, and Similar Jurisdictions)</h2>
          <p className="mb-4">
            If you are located in the European Economic Area (EEA), the United Kingdom (UK), Switzerland, or another jurisdiction that requires a legal basis for processing personal data, we rely on the following legal bases:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-black">Contractual Necessity:</strong> Processing that is necessary for the performance of our contract with you, including the provision of our Services, account management, and transaction processing.</li>
            <li><strong className="text-black">Legal Obligation:</strong> Processing that is necessary for compliance with legal obligations to which Tranzo is subject, including KYC/AML requirements, tax reporting, and responding to lawful requests from regulatory authorities.</li>
            <li><strong className="text-black">Legitimate Interests:</strong> Processing that is necessary for our legitimate interests or the legitimate interests of a third party, provided that such interests are not overridden by your fundamental rights and freedoms. Our legitimate interests include fraud prevention, network and information security, product improvement, and business analytics.</li>
            <li><strong className="text-black">Consent:</strong> Where we rely on your consent as the legal basis for processing, you have the right to withdraw your consent at any time. Withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal. We rely on consent for certain marketing communications, non-essential cookies, and specific data processing activities where required by applicable law.</li>
            <li><strong className="text-black">Vital Interests:</strong> In rare circumstances, processing that is necessary to protect your vital interests or the vital interests of another natural person.</li>
            <li><strong className="text-black">Public Interest:</strong> Processing that is necessary for the performance of a task carried out in the public interest, such as regulatory compliance and financial crime prevention.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">5. How We Share Your Information</h2>
          <p className="mb-4">
            We do not sell your personal information to third parties for their marketing purposes. However, we may share your information in the following circumstances:
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">5.1 Service Providers and Business Partners</h3>
          <p className="mb-4">
            We share information with third-party service providers and business partners who assist us in operating, providing, improving, and protecting our Services. These partners are contractually obligated to handle your data in accordance with this Policy and applicable data protection laws. Categories of service providers include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Card network operators (e.g., Visa, Mastercard) and payment processors for card issuance and transaction processing.</li>
            <li>Banking-as-a-Service (BaaS) partners and licensed financial institutions for fiat currency operations and regulatory compliance.</li>
            <li>Identity verification and KYC/AML service providers for customer due diligence and ongoing monitoring.</li>
            <li>Blockchain analytics and compliance intelligence providers for transaction monitoring and risk assessment.</li>
            <li>Cloud infrastructure and hosting providers for secure data storage and processing.</li>
            <li>Customer support platforms and communication service providers.</li>
            <li>Analytics and business intelligence providers for aggregated usage analysis.</li>
            <li>Security and fraud detection service providers.</li>
            <li>Clearing houses and settlement networks (including ACH, SEPA, SWIFT, and local payment rails) for cross-border and domestic fund transfers.</li>
          </ul>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">5.2 Legal and Regulatory Disclosures</h3>
          <p className="mb-4">
            We may disclose your information to government authorities, regulatory bodies, law enforcement agencies, courts, and other official bodies when we believe in good faith that disclosure is necessary to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Comply with applicable laws, regulations, legal processes, or enforceable governmental requests.</li>
            <li>Enforce our Terms and Conditions and other agreements, including investigation of potential violations.</li>
            <li>Detect, prevent, or address fraud, security issues, or technical problems.</li>
            <li>Protect against harm to the rights, property, or safety of Tranzo, our users, or the public as required or permitted by law.</li>
            <li>Respond to valid subpoenas, court orders, search warrants, or other lawful requests for information.</li>
          </ul>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">5.3 Business Transfers</h3>
          <p className="mb-4">
            In the event of a merger, acquisition, reorganization, bankruptcy, dissolution, sale of all or a portion of our assets, or similar corporate event, your information may be transferred to the acquiring entity or successor organization. We will notify you of any such change in ownership or control of your personal information, and any choices you may have regarding your information, via email and/or a prominent notice on our website.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">5.4 With Your Consent</h3>
          <p>
            We may share your information with third parties when you have given us explicit consent to do so, such as when you authorize a third-party application to access your Tranzo account through our API, participate in co-branded promotions, or authorize the sharing of specific data for a particular purpose.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">6. International Data Transfers</h2>
          <p className="mb-4">
            Tranzo operates globally, and your information may be transferred to, stored, and processed in countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country. Specifically, our servers and data centers are located in multiple jurisdictions, and our third-party service providers and partners operate around the world.
          </p>
          <p className="mb-4">
            When we transfer personal data from the EEA, UK, or Switzerland to countries that have not been deemed to provide an adequate level of data protection, we implement appropriate safeguards including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Standard Contractual Clauses (SCCs) approved by the European Commission.</li>
            <li>The UK International Data Transfer Agreement (IDTA) or UK Addendum to the EU SCCs, as applicable.</li>
            <li>Binding Corporate Rules (BCRs) where applicable.</li>
            <li>Adequacy decisions by the European Commission or the UK Secretary of State.</li>
            <li>Other lawful transfer mechanisms recognized under applicable data protection legislation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">7. Data Retention</h2>
          <p className="mb-4">
            We retain your personal information for as long as is necessary to fulfill the purposes for which it was collected, including to satisfy any legal, regulatory, accounting, or reporting requirements. The specific retention period for different categories of data depends on the nature of the data, the purposes for which it is processed, and applicable legal requirements.
          </p>
          <p className="mb-4">
            In general, we apply the following retention guidelines:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong className="text-black">Account Information:</strong> Retained for the duration of your account and for a minimum of five (5) years after account closure, or longer if required by applicable law.</li>
            <li><strong className="text-black">Transaction Records:</strong> Retained for a minimum of seven (7) years from the date of the transaction in accordance with anti-money laundering regulations and tax reporting requirements.</li>
            <li><strong className="text-black">KYC/AML Documentation:</strong> Retained for a minimum of five (5) years after the termination of the business relationship, or longer as required by specific jurisdictional requirements (up to ten (10) years in certain jurisdictions).</li>
            <li><strong className="text-black">Communication Records:</strong> Customer support interactions are retained for a minimum of three (3) years for quality assurance and dispute resolution purposes.</li>
            <li><strong className="text-black">Technical Logs:</strong> Server logs and security-related data are retained for a minimum of one (1) year, or longer where necessary for ongoing security investigations.</li>
            <li><strong className="text-black">Marketing Data:</strong> Retained until you withdraw your consent or opt out, plus a reasonable period to process the request and maintain suppression records.</li>
          </ul>
          <p>
            When personal data is no longer required for the purposes for which it was collected and there is no legal requirement to retain it, we will securely delete, anonymize, or aggregate the data so that it can no longer be associated with you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">8. Data Security</h2>
          <p className="mb-4">
            We implement and maintain comprehensive technical, administrative, and physical security measures designed to protect the confidentiality, integrity, and availability of your personal information. These measures include but are not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Encryption of data in transit using TLS 1.3 and data at rest using AES-256 encryption.</li>
            <li>Hardware Security Modules (HSMs) for cryptographic key management and secure operations.</li>
            <li>Multi-factor authentication (MFA) for account access and high-value operations.</li>
            <li>Role-based access controls (RBAC) and the principle of least privilege for internal systems access.</li>
            <li>Regular security audits, vulnerability assessments, and penetration testing by independent third-party security firms.</li>
            <li>Continuous monitoring and logging of system activities for anomaly detection and incident response.</li>
            <li>SOC 2 Type II compliance for our infrastructure and operational processes.</li>
            <li>Employee security awareness training and background checks for personnel with access to sensitive data.</li>
            <li>Incident response plans and business continuity procedures to address potential security breaches.</li>
            <li>Physical security measures for data centers, including biometric access controls, surveillance, and environmental protections.</li>
          </ul>
          <p>
            While we strive to use commercially reasonable means to protect your personal information, no method of electronic transmission or storage is completely secure. We cannot guarantee absolute security, and you acknowledge that you provide your personal information at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">9. Your Rights and Choices</h2>
          <p className="mb-4">
            Depending on your location and applicable law, you may have certain rights regarding your personal information. We are committed to facilitating the exercise of these rights in accordance with applicable legal requirements.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">9.1 Rights Under GDPR (EEA and UK Residents)</h3>
          <p className="mb-4">
            If you are located in the European Economic Area or the United Kingdom, you have the following rights under the General Data Protection Regulation (GDPR) and the UK GDPR, respectively:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong className="text-black">Right of Access:</strong> You have the right to request a copy of the personal data we hold about you, along with information about how we process it.</li>
            <li><strong className="text-black">Right to Rectification:</strong> You have the right to request correction of inaccurate or incomplete personal data we hold about you.</li>
            <li><strong className="text-black">Right to Erasure:</strong> You have the right to request deletion of your personal data in certain circumstances, such as when the data is no longer necessary for the purposes for which it was collected.</li>
            <li><strong className="text-black">Right to Restriction of Processing:</strong> You have the right to request that we restrict the processing of your personal data in certain circumstances.</li>
            <li><strong className="text-black">Right to Data Portability:</strong> You have the right to receive your personal data in a structured, commonly used, and machine-readable format, and to transmit that data to another controller.</li>
            <li><strong className="text-black">Right to Object:</strong> You have the right to object to the processing of your personal data based on our legitimate interests or for direct marketing purposes.</li>
            <li><strong className="text-black">Right Not to Be Subject to Automated Decision-Making:</strong> You have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning you or similarly significantly affects you.</li>
            <li><strong className="text-black">Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with your local data protection supervisory authority.</li>
          </ul>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">9.2 Rights Under CCPA/CPRA (California Residents)</h3>
          <p className="mb-4">
            If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA):
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong className="text-black">Right to Know:</strong> You have the right to request disclosure of the categories and specific pieces of personal information we have collected about you, the categories of sources from which it was collected, the business or commercial purpose for collection, and the categories of third parties with whom we share it.</li>
            <li><strong className="text-black">Right to Delete:</strong> You have the right to request deletion of your personal information, subject to certain exceptions.</li>
            <li><strong className="text-black">Right to Correct:</strong> You have the right to request correction of inaccurate personal information.</li>
            <li><strong className="text-black">Right to Opt-Out of Sale/Sharing:</strong> You have the right to opt out of the "sale" or "sharing" of your personal information for cross-context behavioral advertising. Tranzo does not sell your personal information as defined under the CCPA/CPRA.</li>
            <li><strong className="text-black">Right to Limit Use of Sensitive Personal Information:</strong> You have the right to limit the use and disclosure of your sensitive personal information to certain specified purposes.</li>
            <li><strong className="text-black">Right to Non-Discrimination:</strong> You have the right not to receive discriminatory treatment for exercising your privacy rights.</li>
          </ul>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">9.3 Rights Under Other Jurisdictions</h3>
          <p className="mb-4">
            Users in other jurisdictions, including but not limited to Brazil (LGPD), Canada (PIPEDA), Australia (Privacy Act 1988), Japan (APPI), South Korea (PIPA), India (DPDP Act), and other applicable privacy regimes, may have additional or similar rights. We will honor all rights granted to you under the applicable data protection laws of your jurisdiction. Please contact us using the information provided at the end of this Policy to exercise your rights.
          </p>

          <h3 className="text-lg font-bold text-black mb-3 mt-6">9.4 Exercising Your Rights</h3>
          <p className="mb-4">
            To exercise any of the rights described above, you may submit a request by emailing us at <a href="mailto:privacy@tranzo.money" className="text-black hover:underline font-bold">privacy@tranzo.money</a> or through the privacy settings in your Tranzo account. We may need to verify your identity before processing your request to ensure the security of your account and personal data. We will respond to your request within the timeframe required by applicable law (generally within 30 days for GDPR requests and 45 days for CCPA/CPRA requests).
          </p>
          <p>
            Please note that certain rights may be limited where we have a compelling legitimate ground to continue processing, where processing is necessary for the establishment, exercise, or defense of legal claims, or where we are required to retain information for legal or regulatory compliance purposes. For example, we may be unable to delete transaction records that we are legally required to retain under anti-money laundering regulations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">10. Children's Privacy</h2>
          <p>
            The Services are not intended for individuals under the age of 18 (or the age of majority in your jurisdiction, whichever is higher). We do not knowingly collect, solicit, or maintain personal information from anyone under 18 years of age. If we learn that we have collected personal information from a child under 18, we will take prompt steps to delete that information. If you believe that a child under 18 has provided us with personal information, please contact us at <a href="mailto:privacy@tranzo.money" className="text-black hover:underline font-bold">privacy@tranzo.money</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">11. Third-Party Links and Services</h2>
          <p>
            Our Services may contain links to third-party websites, applications, or services that are not operated or controlled by Tranzo. This Privacy Policy does not apply to any third-party services. We encourage you to review the privacy policies of any third-party services you access through our platform. We are not responsible for the content, privacy practices, or security of any third-party websites or services. The inclusion of a link does not imply endorsement of the linked site or service by Tranzo.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">12. Blockchain and On-Chain Data</h2>
          <p className="mb-4">
            You acknowledge that certain information associated with cryptocurrency transactions, including your public wallet addresses and transaction data, is recorded on public blockchain networks. This on-chain data is inherently transparent, immutable, and cannot be modified or deleted by Tranzo or any other party. While Tranzo does not publicly associate your identity with your on-chain wallet addresses, third parties with sufficient resources and information may be able to de-anonymize blockchain transactions.
          </p>
          <p>
            As a self-custody platform, Tranzo does not store, access, or have the ability to recover your private keys, seed phrases, or recovery phrases. You are solely responsible for safeguarding these credentials. Loss of your private keys or seed phrases may result in permanent, irreversible loss of access to your digital assets, and Tranzo cannot assist in recovery.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">13. Do Not Track Signals</h2>
          <p>
            Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not wish to have your online activity tracked. There is currently no universally accepted standard for how companies should respond to DNT signals. At this time, our website does not respond to DNT signals. However, you can manage your cookie preferences and opt out of certain tracking technologies through your browser settings or through our cookie preference center.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">14. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our data practices, legal requirements, or business operations. When we make material changes to this Policy, we will notify you by updating the "Last updated" date at the top of this page, sending you an email notification to the address associated with your account, and/or posting a prominent notice on our website or within the Services.
          </p>
          <p>
            We encourage you to review this Policy periodically to stay informed about how we collect, use, and protect your information. Your continued use of the Services after any changes to this Policy constitutes your acceptance of the updated Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">15. Data Protection Officer</h2>
          <p>
            We have appointed a Data Protection Officer (DPO) to oversee our data protection practices and ensure compliance with applicable privacy regulations. If you have questions about this Policy, wish to exercise your data protection rights, or have concerns about how we handle your personal information, you may contact our DPO at <a href="mailto:dpo@tranzo.money" className="text-black hover:underline font-bold">dpo@tranzo.money</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-4 tracking-[-0.02em]">16. Contact Us</h2>
          <p className="mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us using the following information:
          </p>
          <div className="bg-[#F5F5F7] border border-black/5 rounded-2xl p-8 space-y-3">
            <p><strong className="text-black">Tranzo Inc.</strong></p>
            <p>Attn: Privacy and Compliance Team</p>
            <p>Email: <a href="mailto:privacy@tranzo.money" className="text-black hover:underline font-bold">privacy@tranzo.money</a></p>
            <p>DPO: <a href="mailto:dpo@tranzo.money" className="text-black hover:underline font-bold">dpo@tranzo.money</a></p>
            <p>General: <a href="mailto:connect@tranzo.money" className="text-black hover:underline font-bold">connect@tranzo.money</a></p>
          </div>
        </section>

        <div className="pt-12 border-t border-black/10 mt-20 text-center md:text-left">
          <p className="text-sm">
            For complex data extraction requests, subject access requests, or DPO communications, contact our compliance division at <a href="mailto:privacy@tranzo.money" className="text-black hover:underline font-bold">privacy@tranzo.money</a>. We will respond to all legitimate requests within the timeframe required by applicable law.
          </p>
        </div>
      </div>
    </div>
  );
};

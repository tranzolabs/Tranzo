import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, CreditCard, Wallet, HardDrive, ArrowRight, ArrowUpRight, Terminal, Key, Webhook, Shield } from 'lucide-react';

const quickStart = [
  {
    step: '01',
    title: 'Install the SDK',
    code: 'npm install @tranzo/sdk',
    description: 'Add the Tranzo SDK to your project with a single command. Works with Node.js, React, and any JavaScript framework.',
  },
  {
    step: '02',
    title: 'Initialize the Client',
    code: `import { Tranzo } from '@tranzo/sdk'\n\nconst tranzo = new Tranzo({\n  apiKey: 'your-api-key'\n})`,
    description: 'Create a client instance with your API key. All methods are fully typed with TypeScript support out of the box.',
  },
  {
    step: '03',
    title: 'Start Building',
    code: `const wallet = await tranzo.wallets.create({\n  chain: 'ethereum'\n})\n\nconsole.log(wallet.address)`,
    description: 'Create wallets, issue cards, process payments, and more. Full API access to the entire Tranzo infrastructure.',
  },
];

const apiSections = [
  {
    icon: Wallet,
    title: 'Wallet API',
    description: 'Create and manage multi-chain wallets. Generate addresses, check balances, and initiate transactions programmatically.',
    endpoints: ['POST /wallets/create', 'GET /wallets/:id/balance', 'POST /wallets/:id/send'],
  },
  {
    icon: CreditCard,
    title: 'Card API',
    description: 'Issue virtual and physical cards, set spending limits, freeze/unfreeze, and track transactions in real-time.',
    endpoints: ['POST /cards/issue', 'PATCH /cards/:id/limits', 'GET /cards/:id/transactions'],
  },
  {
    icon: Key,
    title: 'Auth API',
    description: 'Handle user authentication, manage API keys, and configure permissions for your integration.',
    endpoints: ['POST /auth/token', 'POST /auth/verify', 'DELETE /auth/revoke'],
  },
  {
    icon: Webhook,
    title: 'Webhooks',
    description: 'Receive real-time notifications for transactions, card events, and wallet activity via HTTP webhooks.',
    endpoints: ['POST /webhooks/create', 'GET /webhooks/list', 'POST /webhooks/test'],
  },
];

const resources = [
  {
    icon: BookOpen,
    title: 'Guides',
    description: 'Step-by-step tutorials for common integrations.',
    links: [
      { label: 'Accept Crypto Payments', href: '#' },
      { label: 'Issue Cards to Users', href: '#' },
      { label: 'Wallet Management', href: '#' },
    ],
  },
  {
    icon: Code2,
    title: 'SDKs & Libraries',
    description: 'Official client libraries for your stack.',
    links: [
      { label: 'JavaScript / TypeScript', href: '#' },
      { label: 'Python', href: '#' },
      { label: 'REST API Reference', href: '#' },
    ],
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Best practices for securing your integration.',
    links: [
      { label: 'API Key Management', href: '#' },
      { label: 'Webhook Verification', href: '#' },
      { label: 'Rate Limits & Errors', href: '#' },
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const Docs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 sm:pt-32 md:pt-48 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-black/10 text-xs sm:text-sm font-semibold text-black mb-6 sm:mb-8">
            Documentation
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-[80px] font-extrabold tracking-[-0.04em] md:tracking-[-0.05em] text-black mb-4 sm:mb-6 leading-[1] md:leading-[0.95] max-w-4xl">
            Build with <br /><span className="text-[#727272]">Tranzo.</span>
          </h1>
          <p className="text-[#727272] text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8 sm:mb-10">
            Full API access to wallet, card, and payment infrastructure. Everything you need to integrate crypto into your application.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex items-center gap-3 bg-[#1a1a1a] text-white/80 px-5 py-3.5 rounded-xl font-mono text-sm">
              <Terminal size={16} className="text-white/40 shrink-0" />
              <span>npm install @tranzo/sdk</span>
            </div>
            <a
              href="https://github.com/tranzolabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm border border-black/10 hover:bg-black/[0.03] hover:scale-105 active:scale-95 transition-all"
            >
              View on GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Quick Start */}
      <section className="border-y border-black/5 py-16 sm:py-20 md:py-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-10 sm:mb-14 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-[-0.04em] text-black mb-3 sm:mb-4 leading-tight">
              Quick <span className="text-[#727272]">start.</span>
            </h2>
            <p className="text-[#727272] text-base sm:text-lg max-w-xl leading-relaxed">
              Get up and running in under five minutes.
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {quickStart.map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-10"
              >
                <div className="md:w-1/3 shrink-0">
                  <div className="text-4xl sm:text-5xl font-extrabold text-black/5 mb-2 tracking-tighter">{item.step}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-[#727272] text-sm sm:text-base leading-relaxed">{item.description}</p>
                </div>
                <div className="flex-1 bg-[#1a1a1a] rounded-xl sm:rounded-2xl p-5 sm:p-6 overflow-x-auto">
                  <pre className="text-sm sm:text-base text-white/70 font-mono leading-relaxed whitespace-pre">{item.code}</pre>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-10 sm:mb-14 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-[-0.04em] text-black mb-3 sm:mb-4 leading-tight">
              API <span className="text-[#727272]">reference.</span>
            </h2>
            <p className="text-[#727272] text-base sm:text-lg max-w-xl leading-relaxed">
              RESTful APIs with consistent patterns, detailed error messages, and full TypeScript types.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {apiSections.map((section, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.05 }}
                className="p-6 sm:p-8 bg-[#F5F5F7] border border-black/5 rounded-2xl sm:rounded-3xl group hover:bg-[#EBEBEB] transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 border border-black/5 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <section.icon size={18} strokeWidth={2} className="text-black" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight">{section.title}</h3>
                </div>
                <p className="text-[#727272] text-sm sm:text-base leading-relaxed mb-4">{section.description}</p>
                <div className="space-y-1.5">
                  {section.endpoints.map((endpoint, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-xs font-mono font-semibold text-black/40 bg-black/[0.04] px-2 py-0.5 rounded">
                        {endpoint.split(' ')[0]}
                      </span>
                      <span className="text-xs font-mono text-[#727272]">{endpoint.split(' ').slice(1).join(' ')}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 border-t border-black/5">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-10 sm:mb-14 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-[-0.04em] text-black mb-3 sm:mb-4 leading-tight">
              Resources & <span className="text-[#727272]">guides.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
            {resources.map((resource, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.05 }}
                className="p-6 sm:p-7 bg-[#F5F5F7] border border-black/5 rounded-2xl sm:rounded-3xl"
              >
                <div className="w-10 h-10 border border-black/5 rounded-xl bg-white flex items-center justify-center shadow-sm mb-4">
                  <resource.icon size={18} strokeWidth={2} className="text-black" />
                </div>
                <h3 className="text-lg font-bold text-black mb-1.5 tracking-tight">{resource.title}</h3>
                <p className="text-[#727272] text-sm leading-relaxed mb-4">{resource.description}</p>
                <div className="space-y-2">
                  {resource.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      className="flex items-center justify-between text-sm font-medium text-black hover:text-[#727272] transition-colors group"
                    >
                      {link.label}
                      <ArrowRight size={12} className="text-[#727272] group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Status & Support */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 border-t border-black/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4 sm:gap-5">
          <motion.div {...fadeUp} className="bg-[#F5F5F7] border border-black/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="text-sm font-semibold text-black">All Systems Operational</span>
            </div>
            <p className="text-[#727272] text-sm leading-relaxed mb-4">
              Real-time status of the Tranzo API, webhooks, and card processing infrastructure.
            </p>
            <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-black hover:text-[#727272] transition-colors">
              View Status Page
              <ArrowUpRight size={13} />
            </a>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.05 }} className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <h3 className="text-white font-bold text-lg mb-2 tracking-tight">Need help?</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Our developer support team is available to help you integrate Tranzo into your product.
            </p>
            <a
              href="mailto:connect@tranzo.money"
              className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all"
            >
              Contact Support
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

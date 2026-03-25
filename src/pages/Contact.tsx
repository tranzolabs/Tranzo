import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, ArrowUpRight } from 'lucide-react';

const contacts = [
  {
    label: 'Founder',
    name: 'Pranav',
    email: 'pranav@tranzo.money',
    description: 'For partnerships, press, and direct inquiries.',
  },
  {
    label: 'Team',
    name: 'General',
    email: 'connect@tranzo.money',
    description: 'Product questions, feedback, and getting started.',
  },
  {
    label: 'Legal',
    name: 'Legal Team',
    email: 'legal@tranzo.money',
    description: 'Compliance, regulatory, and legal matters.',
  },
];

const socials = [
  {
    name: 'Website',
    href: 'https://tranzo.money',
    handle: 'tranzo.money',
    icon: Globe,
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/tranzolabs',
    handle: '@tranzolabs',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/tranzolabs',
    handle: 'tranzolabs',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 sm:pt-32 md:pt-48 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 max-w-4xl mx-auto min-h-screen">
      <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
        <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-black/10 text-xs sm:text-sm font-semibold text-black mb-6 sm:mb-8">
          Get in Touch
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-[-0.04em] text-black mb-4 sm:mb-6 leading-[1.05]">
          Contact <span className="text-[#727272]">Us</span>
        </h1>
        <p className="text-[#727272] text-base sm:text-lg mb-10 sm:mb-16 border-b border-black/10 pb-6 sm:pb-8 max-w-2xl">
          Whether you have a question about the product, want to partner with us, or just want to say hello — we'd love to hear from you.
        </p>
      </motion.div>

      {/* Email contacts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
        {contacts.map((contact, i) => (
          <motion.a
            key={contact.email}
            href={`mailto:${contact.email}`}
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            className="group bg-[#F5F5F7] border border-black/5 rounded-2xl p-6 sm:p-7 hover:border-black/15 transition-all hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                <Mail size={18} className="text-white" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#727272]">
                {contact.label}
              </span>
            </div>
            <p className="font-bold text-black text-sm sm:text-base mb-1.5 group-hover:underline underline-offset-2">
              {contact.email}
            </p>
            <p className="text-[#727272] text-xs sm:text-sm leading-relaxed">
              {contact.description}
            </p>
          </motion.a>
        ))}
      </div>

      {/* Social links */}
      <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }}>
        <h2 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6 tracking-tight">
          Find us online
        </h2>
        <div className="space-y-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-[#F5F5F7] border border-black/5 rounded-xl px-5 sm:px-6 py-4 hover:border-black/15 transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="text-black">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-black text-sm sm:text-base">{social.name}</p>
                    <p className="text-[#727272] text-xs sm:text-sm">{social.handle}</p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-[#727272] group-hover:text-black group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </a>
            );
          })}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-black/10"
      >
        <div className="bg-black rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 text-center">
          <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-3">
            Ready to get started?
          </h3>
          <p className="text-white/60 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto">
            Reach out to our team and we'll get back to you within 24 hours.
          </p>
          <a
            href="mailto:connect@tranzo.money"
            className="inline-flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base hover:scale-105 active:scale-95 transition-all"
          >
            Email Us
            <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

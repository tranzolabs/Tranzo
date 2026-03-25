import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useWaitlist } from '../context/WaitlistContext';
import { supabase } from '../lib/supabase';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export const WaitlistModal = () => {
  const { isOpen, close } = useWaitlist();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setFormState('idle');
    setErrorMsg('');
  };

  const handleClose = () => {
    close();
    setTimeout(resetForm, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ name: name.trim(), email: email.trim().toLowerCase(), phone: phone.trim() || null }]);

      if (error) {
        if (error.code === '23505') {
          setErrorMsg('This email is already on the waitlist!');
        } else {
          setErrorMsg(error.message || 'Something went wrong. Please try again.');
        }
        setFormState('error');
        return;
      }

      setFormState('success');
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setFormState('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors"
            >
              <X size={16} />
            </button>

            <div className="p-8 sm:p-10">
              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col items-center text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-6">
                      <CheckCircle2 size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight mb-2">
                      You're on the list!
                    </h3>
                    <p className="text-[#727272] text-sm leading-relaxed max-w-xs">
                      Thanks for joining the Tranzo waitlist. We'll reach out as soon as early access opens.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-8 px-6 py-3 rounded-full bg-black text-white text-sm font-semibold hover:scale-105 active:scale-95 transition-all"
                    >
                      Done
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                      Join the Waitlist
                    </h3>
                    <p className="text-[#727272] text-sm mb-8">
                      Be first in line for the future of self-custody finance.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div>
                        <label htmlFor="wl-name" className="block text-xs font-semibold text-black/60 mb-1.5 uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          id="wl-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-black/10 bg-black/[0.02] text-black placeholder:text-black/25 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="wl-email" className="block text-xs font-semibold text-black/60 mb-1.5 uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          id="wl-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-black/10 bg-black/[0.02] text-black placeholder:text-black/25 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="wl-phone" className="block text-xs font-semibold text-black/60 mb-1.5 uppercase tracking-wider">
                          Phone <span className="text-black/30 normal-case tracking-normal">(optional)</span>
                        </label>
                        <input
                          id="wl-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-black/10 bg-black/[0.02] text-black placeholder:text-black/25 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent transition-all"
                        />
                      </div>

                      {formState === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-start gap-2 p-3 rounded-xl bg-red-50 border border-red-100"
                        >
                          <AlertCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                          <p className="text-red-600 text-xs leading-relaxed">{errorMsg}</p>
                        </motion.div>
                      )}

                      <button
                        type="submit"
                        disabled={formState === 'submitting'}
                        className="mt-2 w-full py-3.5 rounded-full bg-black text-white font-bold text-sm tracking-tight hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:hover:scale-100 flex items-center justify-center gap-2"
                      >
                        {formState === 'submitting' ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          'Join Waitlist'
                        )}
                      </button>

                      <p className="text-[10px] text-black/30 text-center leading-relaxed">
                        We respect your privacy. No spam, ever.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

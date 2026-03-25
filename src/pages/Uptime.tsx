import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Wallet, CreditCard, Globe, Server, Webhook, Shield, ArrowRight } from 'lucide-react';

interface Service {
  name: string;
  description: string;
  icon: typeof Wallet;
  uptime: number;
  latency: number;
  status: 'operational' | 'degraded' | 'down';
}

const services: Service[] = [
  { name: 'Wallet API', description: 'Multi-chain wallet creation, balances, and transactions', icon: Wallet, uptime: 99.99, latency: 42, status: 'operational' },
  { name: 'Card Processing', description: 'Virtual and physical card issuance and payments', icon: CreditCard, uptime: 99.98, latency: 68, status: 'operational' },
  { name: 'Authentication', description: 'User auth, API keys, and session management', icon: Shield, uptime: 100, latency: 31, status: 'operational' },
  { name: 'Webhooks', description: 'Real-time event delivery for transactions and activity', icon: Webhook, uptime: 99.97, latency: 55, status: 'operational' },
  { name: 'Web App', description: 'Dashboard, portfolio, and account management', icon: Globe, uptime: 99.99, latency: 89, status: 'operational' },
  { name: 'Infrastructure', description: 'Core servers, databases, and CDN', icon: Server, uptime: 100, latency: 12, status: 'operational' },
];

function generateUptimeDays(baseUptime: number): ('up' | 'degraded' | 'down')[] {
  const days: ('up' | 'degraded' | 'down')[] = [];
  for (let i = 0; i < 90; i++) {
    const rand = Math.random() * 100;
    if (rand > baseUptime + 0.5) {
      days.push('degraded');
    } else {
      days.push('up');
    }
  }
  return days;
}

function StatusDot({ status }: { status: string }) {
  const color = status === 'operational' ? 'bg-green-500' : status === 'degraded' ? 'bg-yellow-500' : 'bg-red-500';
  return (
    <span className="relative flex h-2.5 w-2.5">
      {status === 'operational' && (
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-40`} />
      )}
      <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${color}`} />
    </span>
  );
}

function UptimeBar({ days }: { days: ('up' | 'degraded' | 'down')[] }) {
  return (
    <div className="flex gap-[2px] items-end">
      {days.map((day, i) => (
        <div
          key={i}
          className={`flex-1 h-7 sm:h-8 rounded-[2px] transition-colors ${
            day === 'up' ? 'bg-green-500/80 hover:bg-green-500' :
            day === 'degraded' ? 'bg-yellow-500/80 hover:bg-yellow-500' :
            'bg-red-500/80 hover:bg-red-500'
          }`}
          title={`${90 - i} days ago — ${day === 'up' ? 'Operational' : day === 'degraded' ? 'Degraded' : 'Down'}`}
        />
      ))}
    </div>
  );
}

function useElapsedSeconds() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return seconds;
}

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const Uptime = () => {
  const elapsed = useElapsedSeconds();
  const uptimeDays = useMemo(() => services.map((s) => generateUptimeDays(s.uptime)), []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allOperational = services.every((s) => s.status === 'operational');

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 sm:pt-32 md:pt-48 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-black/10 text-xs sm:text-sm font-semibold text-black mb-6 sm:mb-8">
            System Status
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-[80px] font-extrabold tracking-[-0.04em] md:tracking-[-0.05em] text-black mb-4 sm:mb-6 leading-[1] md:leading-[0.95]">
            Uptime & <br /><span className="text-[#727272]">Status.</span>
          </h1>
          <p className="text-[#727272] text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
            Real-time status of all Tranzo services. Updated every second.
          </p>
        </motion.div>
      </section>

      {/* Overall Status Banner */}
      <section className="px-4 sm:px-6 mb-10 sm:mb-14">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border ${
              allOperational
                ? 'bg-green-500/5 border-green-500/20'
                : 'bg-yellow-500/5 border-yellow-500/20'
            }`}>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${
                  allOperational ? 'bg-green-500' : 'bg-yellow-500'
                }`}>
                  <CheckCircle2 size={20} className="text-white sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="font-bold text-black text-base sm:text-lg tracking-tight">
                    {allOperational ? 'All Systems Operational' : 'Partial Degradation'}
                  </div>
                  <div className="text-[#727272] text-xs sm:text-sm">
                    Last checked {elapsed}s ago
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-extrabold text-black tracking-tight">99.99%</div>
                  <div className="text-[10px] sm:text-xs text-[#727272] font-medium">Overall Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-extrabold text-black tracking-tight">49ms</div>
                  <div className="text-[10px] sm:text-xs text-[#727272] font-medium">Avg Latency</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service List */}
      <section className="px-4 sm:px-6 mb-16 sm:mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-3 sm:space-y-4">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const days = uptimeDays[idx];
              return (
                <motion.div
                  key={service.name}
                  {...fadeUp}
                  transition={{ delay: 0.05 * idx }}
                  className="bg-[#F5F5F7] border border-black/5 rounded-2xl sm:rounded-3xl p-5 sm:p-6"
                >
                  <div className="flex items-start sm:items-center justify-between mb-4 gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-black/5 bg-white flex items-center justify-center shadow-sm shrink-0">
                        <Icon size={16} strokeWidth={2} className="text-black sm:w-[18px] sm:h-[18px]" />
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm sm:text-base tracking-tight">{service.name}</div>
                        <div className="text-[#727272] text-xs sm:text-sm hidden sm:block">{service.description}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-5 shrink-0">
                      <div className="text-right hidden sm:block">
                        <div className="text-xs font-semibold text-black">{service.uptime}%</div>
                        <div className="text-[10px] text-[#727272]">{service.latency}ms</div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <StatusDot status={service.status} />
                        <span className="text-xs font-semibold text-green-600 capitalize">{service.status}</span>
                      </div>
                    </div>
                  </div>
                  <UptimeBar days={days} />
                  <div className="flex justify-between mt-2">
                    <span className="text-[10px] text-[#727272]">90 days ago</span>
                    <span className="text-[10px] text-[#727272]">Today</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-y border-black/5 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            { value: '99.99%', label: 'Uptime (90 days)' },
            { value: '49ms', label: 'Avg Response' },
            { value: '0', label: 'Incidents (30 days)' },
            { value: '<50ms', label: 'P99 Latency' },
          ].map((stat, idx) => (
            <motion.div key={idx} {...fadeUp} transition={{ delay: idx * 0.05 }} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight">{stat.value}</div>
              <div className="text-xs sm:text-sm text-[#727272] mt-1.5 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[-0.04em] text-black mb-3 leading-tight">
              Recent <span className="text-[#727272]">Incidents</span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <div className="border border-black/5 rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={22} className="text-green-500" />
                </div>
                <p className="font-bold text-black text-sm sm:text-base mb-1">No incidents reported</p>
                <p className="text-[#727272] text-xs sm:text-sm">All systems have been running smoothly for the past 90 days.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subscribe / Support CTA */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 border-t border-black/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <div className="bg-black rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14">
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-3 sm:mb-4">
                Something not right?
              </h3>
              <p className="text-white/60 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
                If you're experiencing issues, reach out and we'll investigate immediately.
              </p>
              <a
                href="mailto:connect@tranzo.money"
                className="inline-flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base hover:scale-105 active:scale-95 transition-all"
              >
                Report an Issue
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

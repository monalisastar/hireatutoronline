'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaUserGraduate, FaChalkboardTeacher, FaStar, FaSignal } from 'react-icons/fa';
import { getDiscordOnlineCount } from '@/lib/discordStats';

export default function AboutUsPage() {
  const [onlineCount, setOnlineCount] = useState(0);

  useEffect(() => {
    getDiscordOnlineCount().then(setOnlineCount);
  }, []);

  return (
    <div className="bg-[#0c1b2a] text-white">
      {/* Intro */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Real Tutors. Real Help. In Real Time.
        </motion.h1>
        <motion.p
          className="text-white/70 text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Join thousands of students who trust us to deliver human-first academic support — not bots, not agencies.
        </motion.p>
      </section>

      {/* SVG Divider */}
      <div className="relative w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.73,22,103.77,35.59,162,35.59,78,0,149.84-27,231-27s147,30,225,30,159.08-32,241-32c63.61,0,113.37,17.63,181,41.4V0Z" fill="#101f33" />
        </svg>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-[#101f33] text-center">
        <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
          <StatCard icon={<FaUserGraduate />} value="2000+" label="Students Served" />
          <StatCard icon={<FaChalkboardTeacher />} value="100+" label="Verified Tutors" />
          <StatCard icon={<FaStar />} value="4.9★" label="Average Rating" />
          <StatCard icon={<FaSignal />} value={onlineCount > 2600 ? `${onlineCount}+` : '25+'} label="Online Now" />
        </div>
      </section>

      {/* Vision */}
      <WaveDivider color="#0c1b2a" />
      <Section title="Our Vision">
        We envision a world where students access real tutors instantly, without automated hurdles. We’re building the most trusted academic help platform — one real conversation at a time.
      </Section>

      {/* How it Works */}
      <Section title="How It Works">
        You join our Discord. Post your task. Tutors respond within minutes. You chat, negotiate, and get help directly — no bots, no middlemen.
      </Section>

      {/* Trust */}
      <Section title="Built on Trust & Transparency">
        All tutors are verified. All ratings are real. You control the pace, price, and partnership — all in one open chat.
      </Section>

      {/* Quote */}
      <section className="py-24 px-6 max-w-xl mx-auto text-center">
        <motion.blockquote
          className="text-xl italic text-white/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          “I started this to help a few classmates. I stayed because it helped thousands.”
        </motion.blockquote>
        <div className="mt-4 text-indigo-400 font-semibold">— Founder, Hire A Tutor</div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center">
        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Ready to Get Real Help?
        </motion.h3>
        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="https://discord.gg/tWXsGZrUX9"
            target="_blank"
            className="bg-indigo-500 hover:bg-indigo-600 transition text-white font-semibold py-3 px-6 rounded-full shadow-lg"
          >
            Join Discord
          </Link>
          <Link
            href="/post-task"
            className="bg-white text-[#0c1b2a] hover:bg-gray-100 font-semibold py-3 px-6 rounded-full shadow-lg"
          >
            Post a Task
          </Link>
        </div>
      </section>
    </div>
  );
}

// === COMPONENTS ===

function StatCard({ icon, value, label }: { icon: JSX.Element; value: string; label: string }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl text-indigo-400 mb-2">{icon}</div>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-white/70">{label}</p>
    </motion.div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-indigo-400 mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <p className="text-white/80 text-lg">{children}</p>
    </section>
  );
}

function WaveDivider({ color = '#101f33' }: { color?: string }) {
  return (
    <div className="relative w-full overflow-hidden leading-[0]">
      <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.73,22,103.77,35.59,162,35.59,78,0,149.84-27,231-27s147,30,225,30,159.08-32,241-32c63.61,0,113.37,17.63,181,41.4V0Z" fill={color} />
      </svg>
    </div>
  );
}



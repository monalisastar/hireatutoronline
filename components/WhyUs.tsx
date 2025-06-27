'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { RiLock2Fill } from 'react-icons/ri';
import { FaRegMoneyBillAlt, FaGlobeAmericas, FaDiscord } from 'react-icons/fa';

const reasons = [
  {
    icon: FiCheckCircle,
    title: 'Verified Experts',
    desc: 'Our tutors pass rigorous skill & background checks.',
  },
  {
    icon: AiOutlineClockCircle,
    title: '24/7 Availability',
    desc: 'Help is ready whenever you study.',
  },
  {
    icon: RiLock2Fill,
    title: 'Secure Escrow',
    desc: 'Your payment is safe until you’re satisfied.',
  },
  {
    icon: FaRegMoneyBillAlt,
    title: 'Money-Back Guarantee',
    desc: 'Don’t love it? Get a full refund.',
  },
  {
    icon: FaGlobeAmericas,
    title: 'Global Network',
    desc: 'Tutors from 30+ countries, any subject.',
  },
];

const stats = [
  { value: '2,000+', label: 'Students Served' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '24/7', label: 'Support Available' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-[#0c1b2a] to-[#111827]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Why Choose Hire A Tutor?
        </h2>
        <p className="mt-4 text-center text-lg text-white/80 max-w-2xl mx-auto">
          Get expert help on your schedule—secure, verified, and guaranteed.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.article
                key={r.title}
                className="glass p-6 rounded-2xl flex flex-col items-center text-center hover:shadow-xl transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Icon size={48} className="text-indigo-400 mb-4" aria-hidden />
                <h3 className="text-xl font-semibold mb-2">{r.title}</h3>
                <p className="text-white/75">{r.desc}</p>
              </motion.article>
            );
          })}
        </div>

        <ul className="mt-12 flex justify-center space-x-8 text-white/80">
          {stats.map((s) => (
            <li key={s.label} className="text-center">
              <span className="block text-2xl font-bold">{s.value}</span>
              <span className="block text-sm">{s.label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center space-x-4">
          <a
            href="https://discord.gg/tWXsGZrUX9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            <FaDiscord size={20} /> Join Discord
          </a>
          <a href="/services" className="btn-secondary">
            Browse Services
          </a>
        </div>
      </div>
    </section>
  );
}



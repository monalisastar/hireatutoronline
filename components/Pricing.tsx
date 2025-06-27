'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalculator, FaClock, FaBookOpen, FaChalkboardTeacher, FaFileAlt, FaBolt } from 'react-icons/fa';
import Link from 'next/link';

export default function Pricing() {
  const [pages, setPages] = useState(1);
  const [urgency, setUrgency] = useState<'normal' | 'urgent'>('normal');
  const baseRate = urgency === 'normal' ? 15 : 30;
  const total = pages * baseRate;

  return (
    <section id="pricing" className="bg-gradient-to-b from-[#0c1b2a] to-[#111827] text-white py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Pricing & Calculator
        </motion.h2>
        <motion.p
          className="text-center text-white/80 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          All prices are negotiable in real-time with the tutor. These estimates are to help you get started!
        </motion.p>

        {/* Calculator */}
        <motion.div
          className="glass p-6 rounded-xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <FaCalculator size={32} className="text-indigo-400" />
            <h3 className="text-2xl font-semibold">Essay Price Calculator</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Number of Pages */}
            <div>
              <label className="block text-sm mb-1">Number of Pages</label>
              <div className="relative">
                <input
                  type="number"
                  min={1}
                  value={pages}
                  onChange={(e) => setPages(Number(e.target.value))}
                  className="w-full p-2 pl-10 rounded bg-gray-800 text-white border border-indigo-500 focus:ring-2 focus:ring-indigo-600"
                />
                <FaFileAlt className="absolute left-3 top-3 text-white/50" />
              </div>
            </div>

            {/* Urgency Dropdown */}
            <div>
              <label className="block text-sm mb-1">Urgency</label>
              <div className="relative">
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value as 'normal' | 'urgent')}
                  className="w-full p-2 pl-10 rounded bg-gray-800 text-white border border-indigo-500 focus:ring-2 focus:ring-indigo-600"
                >
                  <option value="normal">Normal ($15/page)</option>
                  <option value="urgent">Urgent ($30/page)</option>
                </select>
                <FaClock className="absolute left-3 top-3 text-white/50" />
              </div>
            </div>

            {/* Total */}
            <div className="flex flex-col justify-center">
              <p className="text-lg">Estimated Total:</p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={total}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.3 }}
                  className="text-indigo-400 text-2xl font-bold"
                >
                  ${total}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Comparison Chart */}
        <motion.div
          className="glass p-6 rounded-xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold mb-4">Normal vs Urgent Comparison</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white/90 text-sm">
            <div className="p-4 border border-white/10 rounded bg-white/5">
              <div className="flex items-center gap-2 text-lg mb-2">
                <FaClock className="text-indigo-400" />
                Normal
              </div>
              <ul className="list-disc pl-5">
                <li>$15 per page</li>
                <li>Delivery in 24–48 hours</li>
                <li>Flexible deadline</li>
              </ul>
            </div>
            <div className="p-4 border border-white/10 rounded bg-white/5">
              <div className="flex items-center gap-2 text-lg mb-2">
                <FaBolt className="text-pink-400" />
                Urgent
              </div>
              <ul className="list-disc pl-5">
                <li>$30 per page</li>
                <li>Rush delivery in under 12 hours</li>
                <li>Priority tutor handling</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <motion.div
            className="glass p-6 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <FaChalkboardTeacher size={28} className="text-indigo-400" />
              <h4 className="text-xl font-semibold">Live Tutoring</h4>
            </div>
            <p className="text-white/75">
              Standard rate: <span className="font-bold text-indigo-400">$25/hour</span>. 
              Tutors can offer discounts based on the number of hours or complexity.
            </p>
          </motion.div>

          <motion.div
            className="glass p-6 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <FaBookOpen size={28} className="text-indigo-400" />
              <h4 className="text-xl font-semibold">Coursework & Homework Help</h4>
            </div>
            <p className="text-white/75">
              Pricing is flexible. Tutors will evaluate and provide a quote per task.
              You can negotiate everything live on our Discord.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="https://discord.gg/tWXsGZrUX9"
            target="_blank"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 transition text-white font-semibold py-3 px-6 rounded-full shadow-md"
          >
            Join Our Discord to Start
          </Link>
        </motion.div>
      </div>
    </section>
  );
}



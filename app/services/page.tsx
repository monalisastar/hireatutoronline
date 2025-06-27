// app/services/page.tsx
'use client';

import Services from '@/components/Services';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="bg-[#0c1b2a] text-white min-h-screen">
      <section className="py-20 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          All Tutoring Services We Offer
        </motion.h1>
        <motion.p
          className="mt-4 text-white/70 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Browse our full catalog of subjects — from live tutoring and assignments to full test prep support.
        </motion.p>
      </section>

      <Services />

      <motion.div
        className="text-center mt-20 pb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-white/80 mb-4 text-lg">
          Didn’t find your subject? Ask us directly on Discord!
        </p>
        <Link
          href="https://discord.gg/tWXsGZrUX9"
          target="_blank"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 transition text-white font-semibold py-3 px-6 rounded-full shadow-md"
        >
          Join Our Discord
        </Link>
      </motion.div>
    </div>
  );
}


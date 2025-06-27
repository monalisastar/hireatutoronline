// components/HowItWorks.tsx
'use client';

import { motion } from 'framer-motion';
import {
  SiDiscord,
  SiStripe,
} from 'react-icons/si';
import { FaMousePointer } from 'react-icons/fa';
import {
  AiOutlineRobot,
  AiOutlineCheckCircle,
  AiOutlineStar,
} from 'react-icons/ai';
import { BsPersonCheck } from 'react-icons/bs';

const steps = [
  {
    title: 'Join Our Discord Server',
    description:
      'Hop onto our Discord server to connect with the Hire A Tutor community.',
    icon: SiDiscord,
  },
  {
    title: 'Click “Order Here”',
    description:
      'In the #paid-help channel, hit the “Order Here” button to start your request.',
    icon: FaMousePointer,
  },
  {
    title: 'Answer Bot Questions',
    description:
      'Our Hire A Tutor bot will ask a few quick questions to scope out your needs.',
    icon: AiOutlineRobot,
  },
  {
    title: 'Tutors Claim Your Ticket',
    description:
      'Verified tutors are notified immediately and claim your private ticket.',
    icon: BsPersonCheck,
  },
  {
    title: 'Make Payment to Escrow',
    description:
      'Securely deposit your payment into escrow. Funds are released only when service is complete.',
    icon: SiStripe,
  },
  {
    title: 'Order Completed & Submitted',
    description:
      'Your tutor works with you and submits the finished work right in your ticket.',
    icon: AiOutlineCheckCircle,
  },
  {
    title: 'Leave a Review',
    description:
      'Rate and review your tutor to help others find top-quality help.',
    icon: AiOutlineStar,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-b from-[#0c1b2a] to-[#111827] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          How It Works
        </h2>
        <p className="mt-4 text-center text-lg text-white/80 max-w-2xl mx-auto">
          A simple, secure flow that connects you with expert tutors in minutes.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                className="glass p-6 rounded-2xl flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <Icon className="text-indigo-400 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-white/75">{step.description}</p>
                <div className="mt-4 text-indigo-400 font-bold">
                  Step {i + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


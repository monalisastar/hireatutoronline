// components/FAQ.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle, FaComments, FaClock, FaUserCheck, FaDollarSign, FaBook, FaBolt, FaCreditCard } from 'react-icons/fa';

const faqs = [
  {
    question: 'How do I hire a tutor on this platform?',
    answer: 'Simply browse available tutors or reach out via Discord. You can post your task, get matched, and negotiate live in real time.',
    icon: <FaQuestionCircle className="text-indigo-400" />,
  },
  {
    question: 'Can I negotiate the price directly with the tutor?',
    answer: 'Yes! All pricing is negotiable directly with the tutor. Our platform encourages real-time discussion and flexibility.',
    icon: <FaDollarSign className="text-green-400" />,
  },
  {
    question: 'What subjects can I get help with?',
    answer: 'We cover Computer Science, Engineering, Biology, Test Prep, Economics, Math, and more. Just ask if unsure!',
    icon: <FaBook className="text-yellow-400" />,
  },
  {
    question: 'Is there a minimum order?',
    answer: 'No. You can request help even for a single page or a quick concept review.',
    icon: <FaComments className="text-pink-400" />,
  },
  {
    question: 'How fast can I get a task done?',
    answer: 'Urgent tasks can be completed in under 12 hours. For standard delivery, expect 24–48 hours.',
    icon: <FaClock className="text-blue-400" />,
  },
  {
    question: 'Are the tutors verified or qualified?',
    answer: 'Yes. We selectively onboard tutors based on academic qualifications, performance, and client reviews.',
    icon: <FaUserCheck className="text-purple-400" />,
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We support Bitcoin, Remitly, Skrill, Payoneer, CashApp, and Zelle. You’ll agree payment directly with the tutor.',
    icon: <FaCreditCard className="text-teal-400" />,
  },
  {
    question: 'Can I communicate with the tutor live?',
    answer: 'Absolutely. Join our Discord server to chat, call, and collaborate with tutors in real time.',
    icon: <FaBolt className="text-orange-400" />,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#0e1a29] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass p-5 rounded-xl cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => toggle(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-lg font-semibold">
                  {faq.icon}
                  {faq.question}
                </div>
                <span className="text-indigo-400 text-xl">{openIndex === index ? '-' : '+'}</span>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-white/80"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

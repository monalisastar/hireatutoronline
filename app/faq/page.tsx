'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const faqs = [
  { question: 'How do I hire a tutor?', answer: 'Just join our Discord server and post your request. Tutors will respond directly, and you can pick who to work with.' },
  { question: 'Can I negotiate the price?', answer: 'Yes. All pricing is negotiable with the tutor based on the task, urgency, and complexity.' },
  { question: 'What subjects are covered?', answer: 'We support all major academic subjects, test prep, programming, writing, business, and more.' },
  { question: 'Is there a minimum order?', answer: 'No. You can hire a tutor for a single page, question, or a full coursework.' },
  { question: 'How quickly can I get help?', answer: 'Some tutors respond within minutes. Urgent tasks can be completed in under 12 hours.' },
  { question: 'How do payments work?', answer: 'Tutors will agree on payment terms with you. We support multiple payment methods and flexible arrangements.' },
  { question: 'Are tutors verified?', answer: 'Yes. We vet and review tutors based on student feedback and subject mastery.' },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase()) ||
    faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#0c1b2a] text-white min-h-screen">
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h1>
        <p className="text-white/70 text-lg mb-8">
          Answers to the most common things students ask us about.
        </p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search a question..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md mx-auto p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/50 text-white"
        />
      </section>

      {/* FAQ List */}
      <section className="px-6 max-w-3xl mx-auto pb-24 space-y-6">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-white/10 pb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left text-lg font-semibold text-indigo-400 hover:text-indigo-300 transition flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span className="text-white text-xl">{openIndex === index ? '-' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.p
                    className="text-white/80 mt-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        ) : (
          <p className="text-white/50 text-center">No results found.</p>
        )}
      </section>

      {/* CTA */}
      <section className="pb-24 text-center">
        <motion.h3
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Still Have Questions?
        </motion.h3>
        <p className="text-white/70 mb-6">Join our Discord community and ask directly — we're here to help.</p>
        <Link
          href="https://discord.gg/tWXsGZrUX9"
          target="_blank"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 transition text-white font-semibold py-3 px-6 rounded-full shadow-md"
        >
          Join Our Discord
        </Link>
      </section>
    </div>
  );
}
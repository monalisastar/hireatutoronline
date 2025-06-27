'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const tutors = [
  {
    name: 'Alliasgher110',
    image: '/images/Alliasgher.jpeg',
    subjects: ['Biology', 'Health Sciences'],
    quote: 'NAILED my Algebra final with 100% and worked with my budget.',
    badge: 'Top Rated',
    rating: 5,
  },
  {
    name: 'Tutor Bella',
    image: '/images/tutor bella.jpeg',
    subjects: ['Psychology', 'Social Work'],
    quote: 'Fast replies and straight to the point. 10/10.',
    badge: 'Verified',
    rating: 4,
  },
  {
    name: 'Cooper',
    image: '/images/cooper 3.jpg',
    subjects: ['Computer Science', 'Statistics'],
    quote: 'Clutch brotha got me a 100 in my calc homework.',
    badge: 'Top Rated',
    rating: 5,
  },
  {
    name: 'Caelron',
    image: '/images/caerlon.png',
    subjects: ['Economics', 'Finance'],
    quote: 'Got me 98/100 on two grad-level discussion posts.',
    badge: 'Elite',
    rating: 5,
  },
  {
    name: 'Unemployed Prof.',
    image: '/images/unemployed professor.png',
    subjects: ['Law', 'Business Ethics'],
    quote: 'Did 20 assignments in 2 days. Helped me pass the course.',
    badge: 'Trusted Expert',
    rating: 4,
  },
];

export default function MeetOurTutors() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0c1b2a] to-[#111827] text-white" id="tutors">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Tutors
        </motion.h2>
        <motion.p
          className="text-center text-white/70 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Trusted experts ready to help you excel — meet the real faces behind our top reviews.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {tutors.map((tutor, index) => (
            <motion.div
              key={index}
              className="relative group bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-md hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 }}
            >
              <div className="absolute top-4 right-4 bg-indigo-500 text-xs px-3 py-1 rounded-full font-bold shadow-md">
                {tutor.badge}
              </div>

              <div className="w-24 h-24 mx-auto relative rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg mb-4">
                <Image
                  src={tutor.image}
                  alt={tutor.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold text-center">{tutor.name}</h3>
              <p className="text-indigo-400 text-sm text-center mt-1">{tutor.subjects.join(', ')}</p>

              <div className="flex justify-center mt-2">
                {[...Array(tutor.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              <div className="mt-4 text-white/80 text-sm text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                “{tutor.quote}”
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="https://discord.gg/tWXsGZrUX9"
                  target="_blank"
                  className="inline-block px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm rounded-full transition"
                >
                  Hire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

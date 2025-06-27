'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const taglines = [
  'Fast. Reliable. Verified.',
  'Experts in Every Subject.',
  'Get Help Anytime, Anywhere.',
];

const subjects = ['Math', 'Biology', 'Economics', 'Computer Science', 'Engineering'];

export default function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const headingWords = ['Hire', 'a', 'Tutor,', 'Effortlessly'];

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* SEO Head Meta */}
      <Head>
        <title>Hire a Tutor Effortlessly | Verified Academic Support</title>
        <meta
          name="description"
          content="Get expert help for your assignments, exams, and live tutoring from verified tutors in every subject. Fast, reliable, and always available."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Hire A Tutor",
              url: "https://your-site.com",
              sameAs: ["https://discord.gg/tWXsGZrUX9"],
            }),
          }}
        />
      </Head>

      {/* Background Video */}
      <video
        className="absolute inset-0 object-cover w-full h-full -z-10"
        src="/videos/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/cover-fallback.jpg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Hero Content */}
      <div className="hero-container flex items-center justify-center h-full px-6 md:px-12">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl">
          {/* Animated Heading */}
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg flex flex-wrap justify-center">
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                className="mr-2 bg-gradient-to-r from-indigo-400 to-pink-500 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Rotating Tagline */}
          <motion.p
            className="text-lg md:text-xl text-white/90 drop-shadow-md"
            key={currentTagline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {taglines[currentTagline]}
          </motion.p>

          {/* Highlighted Subjects */}
          <div className="flex flex-wrap justify-center gap-2 text-sm md:text-base text-white/80">
            {subjects.map((subject, index) => (
              <motion.span
                key={index}
                className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20 shadow-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.2 }}
              >
                {subject}
              </motion.span>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Link
              href="https://discord.gg/tWXsGZrUX9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join Discord and get started"
            >
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition shadow-md hover:shadow-lg">
                Get Started
              </button>
            </Link>

            <Link href="/services" aria-label="Browse tutoring services">
              <button className="bg-white/90 text-black px-6 py-3 rounded-lg hover:bg-white transition shadow-md hover:shadow-lg">
                Learn More
              </button>
            </Link>
          </motion.div>

          {/* Counters */}
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-white/80">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              <span className="text-2xl font-bold text-white">2,000+</span>
              Students Helped
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0 }}
            >
              <span className="text-2xl font-bold text-white">98%</span>
              Satisfaction Rate
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            >
              <span className="text-2xl font-bold text-white">24/7</span>
              Expert Support
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll-Down Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-2xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        ↓
      </motion.div>
    </section>
  );
}







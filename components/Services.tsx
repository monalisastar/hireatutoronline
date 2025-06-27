// components/Services.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCalculator,
  FaLaptopCode,
  FaBook,
  FaGraduationCap,
  FaChartLine,
  FaPaintBrush,
} from 'react-icons/fa';
import { GiAtom, GiGears } from 'react-icons/gi';

const services = [
  { title: 'Algebra & Pre-Algebra', category: 'Mathematics', description: 'Equations, inequalities, polynomials, and more.', icon: FaCalculator, image: 'algebra.png' },
  { title: 'Geometry & Trigonometry', category: 'Mathematics', description: 'Shapes, proofs, functions, and triangle relationships.', icon: FaCalculator, image: 'geometry.png' },
  { title: 'Calculus & Statistics', category: 'Mathematics', description: 'Limits, derivatives, integrals, and probability.', icon: FaCalculator, image: 'calculus.png' },
  { title: 'Physics & Chemistry', category: 'Science', description: 'Mechanics, electromagnetism, reactions, and molecules.', icon: GiAtom, image: 'physical-chemistry.png' },
  { title: 'Biology & Life Sciences', category: 'Science', description: 'Cells, genetics, ecology, and anatomy fundamentals.', icon: GiAtom, image: 'biology.png' },
  { title: 'Programming & Web Dev', category: 'Computer Science', description: 'JavaScript, Python, React, and backend fundamentals.', icon: FaLaptopCode, image: 'programming-web-development.jpg' },
  { title: 'Data Structures & Algorithms', category: 'Computer Science', description: 'Arrays, trees, sorting, and algorithmic problem solving.', icon: FaLaptopCode, image: 'data-structures-algorithms.png' },
  { title: 'English & Writing', category: 'Languages', description: 'Grammar, composition, ESL coaching, and essay review.', icon: FaBook, image: 'english-writing.png' },
  { title: 'Spanish, French, German', category: 'Languages', description: 'Conversational practice and grammar for multiple levels.', icon: FaBook, image: 'language-tutoring.png' },
  { title: 'SAT/ACT & Test Prep', category: 'Test Prep', description: 'Strategies and practice for standardized tests.', icon: FaGraduationCap, image: 'sat-test-prep.png' },
  { title: 'GRE/GMAT/TOEFL', category: 'Test Prep', description: 'Advanced exam preparation with targeted practice.', icon: FaGraduationCap, image: 'gre-gmat-toefl.png' },
  { title: 'Economics & Finance', category: 'Business & Finance', description: 'Micro, macro, accounting, and investment basics.', icon: FaChartLine, image: 'economics-finance.png' },
  { title: 'Engineering Foundations', category: 'Engineering', description: 'Statics, dynamics, circuits, and thermodynamics.', icon: GiGears, image: 'engineerings.png' },
  { title: 'Graphic & Digital Arts', category: 'Creative Arts', description: 'Design principles, Photoshop, and digital illustration.', icon: FaPaintBrush, image: 'graphicdesign.jpg' },
];

const categories = [
  'All',
  'Mathematics',
  'Science',
  'Computer Science',
  'Languages',
  'Test Prep',
  'Business & Finance',
  'Engineering',
  'Creative Arts',
];

export default function Services() {
  const [selected, setSelected] = useState('All');
  const filtered = selected === 'All'
    ? services
    : services.filter((s) => s.category === selected);

  return (
    <section id="services" className="py-20 bg-black/80 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our Tutoring Services
        </h2>
        <p className="mt-4 text-center text-lg text-white/80 max-w-2xl mx-auto">
          Expert help across all major subjects—available 24/7 on Discord.
        </p>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selected === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.article
                key={svc.title}
                className="glass p-6 rounded-2xl flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <motion.img
                  src={`/images/${svc.image}`}
                  alt={svc.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <Icon size={32} className="text-indigo-400 mb-2" aria-hidden />
                <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
                <p className="text-white/75 flex-1">{svc.description}</p>
                <a
                  href="https://discord.gg/tWXsGZrUX9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-indigo-400 font-bold hover:underline"
                >
                  View Packages →
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}



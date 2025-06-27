'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Particles from 'react-tsparticles';
import fallbackReviews from '@/lib/fallbackReviews';

type Testimonial = {
  id: string;
  author: string;
  avatar: string;
  content: string;
  rating?: string;
  tone?: string;
  timestamp?: string;
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [filtered, setFiltered] = useState<Testimonial[]>([]);
  const [ratingFilter, setRatingFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'rating' | 'tone'>('rating');

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const res = await fetch('/api/reviews');
        const data = await res.json();

        if (data.testimonials && data.testimonials.length > 0) {
          setTestimonials(data.testimonials);
          setFiltered(data.testimonials);
        } else {
          throw new Error('Empty or invalid response');
        }
      } catch (error) {
        const transformed = fallbackReviews.map((r, i) => {
          let tone = r.tone || 'neutral';
          let rating = r.rating;

          if (!rating) {
            switch (tone) {
              case 'very positive': rating = '5'; break;
              case 'positive': rating = '4'; break;
              case 'neutral': rating = '3'; break;
              case 'negative': rating = '2'; break;
              case 'very negative': rating = '1'; break;
              default: rating = '3';
            }
          }

          return {
            id: `fallback-${i}`,
            author: r.username,
            avatar: `https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(r.username)}`,
            content: r.message,
            rating,
            tone,
          };
        });

        setTestimonials(transformed);
        setFiltered(transformed);
      }
    };

    loadReviews();
  }, []);

  useEffect(() => {
    let visible = ratingFilter === 'all'
      ? testimonials
      : testimonials.filter((t) => t.rating === ratingFilter);

    const sorted = [...visible].sort((a, b) => {
      if (sortBy === 'rating') {
        return parseInt(b.rating || '0') - parseInt(a.rating || '0');
      } else {
        const tones = ['very positive', 'positive', 'neutral', 'negative', 'very negative'];
        return tones.indexOf(a.tone || 'neutral') - tones.indexOf(b.tone || 'neutral');
      }
    });

    setFiltered(sorted);
  }, [ratingFilter, sortBy, testimonials]);

  const initParticles = useCallback(async (engine: any) => {
    const { loadSlim } = await import('tsparticles-slim');
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0c1b2a] to-[#111827] dark:from-black dark:to-gray-900 text-white" id="testimonials">
      <Particles
        id="tsparticles"
        init={initParticles}
        options={{
          background: { color: 'transparent' },
          fpsLimit: 60,
          particles: {
            number: { value: 40 },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.2 },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              outModes: { default: 'bounce' },
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-indigo-600 blur-3xl opacity-30 rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Students Say
        </motion.h2>
        <motion.p
          className="text-white/70 mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Real reviews from our tutoring community on Discord.
        </motion.p>

        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {['all', '5', '4', '3'].map((val) => (
            <button
              key={val}
              onClick={() => setRatingFilter(val)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                ratingFilter === val
                  ? 'bg-indigo-500 text-white'
                  : 'border-white/20 text-white/70 hover:bg-white/10'
              }`}
            >
              {val === 'all' ? 'All Ratings' : `${val}⭐`}
            </button>
          ))}

          <div className="flex items-center ml-4">
            <span className="text-sm text-white/60 mr-2">Sort by:</span>
            {['rating', 'tone'].map((key) => (
              <button
                key={key}
                onClick={() => setSortBy(key as 'rating' | 'tone')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                  sortBy === key ? 'bg-indigo-500 text-white' : 'text-white/50 hover:bg-white/10'
                }`}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <Swiper
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={1}
            loop
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            className="w-full max-w-xl mx-auto"
          >
            {filtered.map((review, i) => (
              <SwiperSlide key={review.id}>
                <motion.div
                  className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl text-white transition-transform transform hover:scale-105"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.3 }}
                    >
                      <Image
                        src={review.avatar}
                        alt={review.author}
                        width={64}
                        height={64}
                        className="rounded-full mb-4"
                      />
                    </motion.div>
                    <h3 className="font-semibold text-lg">{review.author}</h3>
                    <p className="mt-2 text-white/80 text-sm">{review.content}</p>

                    {review.rating ? (
                      <>
                        <div className="mt-2 text-yellow-400 font-semibold text-lg">
                          {'⭐'.repeat(parseInt(review.rating))}
                        </div>
                        {review.tone && (
                          <div
                            className={`mt-1 text-xs font-medium px-2 py-1 rounded-full ${
                              review.tone === 'very positive' ? 'bg-green-500/20 text-green-300' :
                              review.tone === 'positive' ? 'bg-emerald-500/20 text-emerald-300' :
                              review.tone === 'neutral' ? 'bg-yellow-500/20 text-yellow-300' :
                              review.tone === 'negative' ? 'bg-orange-500/20 text-orange-300' :
                              review.tone === 'very negative' ? 'bg-red-500/20 text-red-300' :
                              'bg-white/10 text-white/60'
                            }`}
                            title="This tone was auto-inferred based on the review content"
                          >
                            Tone: {review.tone.charAt(0).toUpperCase() + review.tone.slice(1)}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="mt-2 text-white/50 italic text-xs">Unrated Review</div>
                    )}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-white/50">No reviews found for this filter.</p>
        )}

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://discord.gg/tWXsGZrUX9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full text-white font-semibold transition"
          >
            Join Our Discord to Leave a Review
          </a>
        </motion.div>
      </div>
    </section>
  );
}




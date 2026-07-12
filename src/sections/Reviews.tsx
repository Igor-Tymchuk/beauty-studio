import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

const REVIEWS = [
  {
    name: 'Alexandra M.',
    service: 'Hair Coloring',
    text: 'I came in nervous about a drastic color change, and left feeling like an entirely different — better — version of myself. The attention to detail was extraordinary.',
    rating: 5,
  },
  {
    name: 'Natalia K.',
    service: 'Bridal Makeup',
    text: 'On the most important day of my life, I was in perfect hands. Mia understood exactly what I wanted and made me look timeless. My photos still take my breath away.',
    rating: 5,
  },
  {
    name: 'Sophie R.',
    service: 'Luxury Manicure',
    text: 'The experience from start to finish was like visiting a luxury spa. The products, the atmosphere, the care — nothing like I have experienced anywhere else.',
    rating: 5,
  },
  {
    name: 'Ewa P.',
    service: 'Facial Treatment',
    text: 'Three sessions and my skin has completely transformed. The team takes time to explain every step. Real expertise, real results, real luxury.',
    rating: 5,
  },
  {
    name: 'Victoria L.',
    service: 'Hair Styling',
    text: 'I have been coming to Lumière for two years now. Every single visit feels like a premium ritual. I would not trust my hair to anyone else.',
    rating: 5,
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill={filled ? '#C9973A' : 'none'} stroke="#C9973A" strokeWidth="1">
      <polygon points="7,1 8.8,5.6 13.6,5.8 10,8.8 11.2,13.6 7,10.8 2.8,13.6 4,8.8 0.4,5.8 5.2,5.6" />
    </svg>
  );
}

export default function Reviews() {
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => { setDirection(1); setCurrent((c) => (c + 1) % REVIEWS.length); };
  const prev = () => { setDirection(-1); setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length); };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const review = REVIEWS[current];

  return (
    <section className="py-24 lg:py-40 px-6 md:px-12 lg:px-20 bg-ivory-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-champagne-400" />
            <span className="section-label">{t('reviews.label')}</span>
            <div className="w-12 h-px bg-champagne-400" />
          </div>
          <h2 className="heading-xl text-charcoal-800 leading-none mb-1">
            {t('reviews.title')}
          </h2>
          <h2 className="heading-xl gold-text leading-none">
            {t('reviews.title2')}
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center px-8 md:px-16"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon key={i} filled={i < review.rating} />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-10">
                <span className="font-vibes text-8xl text-champagne-200 absolute -top-8 left-1/2 -translate-x-1/2 leading-none pointer-events-none select-none">
                  &ldquo;
                </span>
                <blockquote className="font-cormorant font-light text-2xl md:text-3xl lg:text-4xl text-charcoal-700 leading-relaxed italic">
                  {review.text}
                </blockquote>
              </div>

              {/* Author */}
              <div className="flex flex-col items-center gap-2">
                <div className="divider-gold w-12 mx-auto" />
                <p className="font-cormorant text-xl text-charcoal-800 mt-3">{review.name}</p>
                <p className="font-manrope text-xs tracking-widest uppercase text-champagne-600">{review.service}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 border border-nude-300 flex items-center justify-center text-charcoal-400 hover:border-champagne-400 hover:text-champagne-500 transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`transition-all duration-300 ${
                    i === current ? 'w-8 h-1 bg-champagne-500' : 'w-1 h-1 bg-nude-300 rounded-full'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-nude-300 flex items-center justify-center text-charcoal-400 hover:border-champagne-400 hover:text-champagne-500 transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

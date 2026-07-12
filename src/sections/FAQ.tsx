import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

const FAQ_KEYS = ['1', '2', '3', '4', '5'] as const;

export default function FAQ() {
  const { t } = useI18n();
  const [open, setOpen] = useState<string | null>('1');

  return (
    <section className="py-24 lg:py-40 px-6 md:px-12 lg:px-20 bg-charcoal-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-champagne-500" />
              <span className="section-label opacity-80">{t('faq.label')}</span>
            </div>
            <h2 className="font-cormorant font-light text-5xl md:text-7xl text-white leading-none">
              {t('faq.title')}
            </h2>
            {t('faq.title2') && (
              <h2 className="font-cormorant font-light text-5xl md:text-7xl gold-text leading-none">
                {t('faq.title2')}
              </h2>
            )}

            <p className="font-manrope font-light text-charcoal-300 mt-8 max-w-sm leading-relaxed">
              Still have questions? We're here to help you prepare for your perfect visit.
            </p>

            <button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ghost mt-10"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Right - accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-0"
          >
            {FAQ_KEYS.map((key) => (
              <div
                key={key}
                className="border-b border-charcoal-700 last:border-0"
              >
                <button
                  onClick={() => setOpen(open === key ? null : key)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className={`font-cormorant font-light text-xl transition-colors duration-300 pr-6 ${
                    open === key ? 'text-champagne-300' : 'text-white group-hover:text-champagne-200'
                  }`}>
                    {t(`faq.items.${key}.q`)}
                  </span>
                  <div className={`w-8 h-8 border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    open === key ? 'border-champagne-500 text-champagne-400' : 'border-charcoal-600 text-charcoal-400 group-hover:border-champagne-600'
                  }`}>
                    {open === key ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                <AnimatePresence>
                  {open === key && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <p className="font-manrope font-light text-charcoal-300 text-sm leading-relaxed pb-6">
                        {t(`faq.items.${key}.a`)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

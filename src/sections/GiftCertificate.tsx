import { useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../hooks/useI18n';

const AMOUNTS = ['50', '100', '200', '300', '500'];

export default function GiftCertificate() {
  const { t } = useI18n();
  const [selected, setSelected] = useState('100');
  const [custom, setCustom] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-24 lg:py-40 px-6 md:px-12 lg:px-20 bg-ivory-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-champagne-500" />
              <span className="section-label">{t('gift.label')}</span>
            </div>
            <h2 className="heading-xl text-charcoal-800 leading-none mb-2">
              {t('gift.title')}
            </h2>
            <h2 className="heading-xl gold-text leading-none mb-10">
              {t('gift.title2')}
            </h2>
            <p className="body-text max-w-md mb-12">{t('gift.sub')}</p>

            {/* Certificate preview */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative bg-charcoal-800 p-8 max-w-sm"
            >
              {/* Corner decorations */}
              <div className="absolute top-3 left-3 w-12 h-12 border-t border-l border-champagne-500/40" />
              <div className="absolute top-3 right-3 w-12 h-12 border-t border-r border-champagne-500/40" />
              <div className="absolute bottom-3 left-3 w-12 h-12 border-b border-l border-champagne-500/40" />
              <div className="absolute bottom-3 right-3 w-12 h-12 border-b border-r border-champagne-500/40" />

              <div className="text-center py-6">
                <div className="font-vibes text-3xl text-champagne-400 mb-1">Lumière</div>
                <div className="font-manrope text-xs tracking-widest3 uppercase text-charcoal-400 mb-6">Beauty Studio</div>
                <div className="divider-gold mb-6" />
                <div className="font-manrope text-xs tracking-widest uppercase text-charcoal-400 mb-2">Gift Certificate</div>
                <div className="font-cormorant text-5xl font-light text-white mb-1">
                  {custom || selected} zł
                </div>
                {name && (
                  <div className="font-cormorant italic text-xl text-champagne-300 mt-3">
                    For {name}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Amount */}
              <div>
                <label className="font-manrope text-xs tracking-widest uppercase text-charcoal-400 mb-3 block">
                  {t('gift.amount_label')}
                </label>
                <div className="flex flex-wrap gap-3">
                  {AMOUNTS.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => { setSelected(amt); setCustom(''); }}
                      className={`px-5 py-2.5 font-manrope text-sm transition-all duration-300 ${
                        selected === amt && !custom
                          ? 'bg-champagne-500 text-white'
                          : 'border border-nude-300 text-charcoal-500 hover:border-champagne-400'
                      }`}
                    >
                      {amt} zł
                    </button>
                  ))}
                  <div className="relative flex-1 min-w-[120px]">
                    <input
                      type="number"
                      value={custom}
                      onChange={(e) => { setCustom(e.target.value); setSelected(''); }}
                      placeholder={t('gift.custom')}
                      className="w-full px-4 py-2.5 font-manrope text-sm border border-nude-200 bg-transparent text-charcoal-700 placeholder-charcoal-300 focus:outline-none focus:border-champagne-500 transition-colors duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="font-manrope text-xs tracking-widest uppercase text-charcoal-400 mb-3 block">
                  {t('gift.name_label')}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('gift.name_placeholder')}
                  className="w-full px-5 py-4 font-manrope text-sm border-b border-nude-300 bg-transparent text-charcoal-700 placeholder-charcoal-300 focus:outline-none focus:border-champagne-500 transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="font-manrope text-xs tracking-widest uppercase text-charcoal-400 mb-3 block">
                  {t('gift.message_label')}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('gift.message_placeholder')}
                  rows={4}
                  className="w-full px-5 py-4 font-manrope text-sm border border-nude-200 bg-transparent text-charcoal-700 placeholder-charcoal-300 focus:outline-none focus:border-champagne-500 transition-colors duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full justify-center text-xs"
              >
                {submitted ? 'Thank you!' : t('gift.submit')}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

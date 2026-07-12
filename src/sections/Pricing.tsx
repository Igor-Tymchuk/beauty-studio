import { motion } from 'framer-motion';
import { useI18n } from '../hooks/useI18n';

const PRICING_DATA = [
  { key: 'hair_styling', price: '89' },
  { key: 'hair_coloring', price: '149' },
  { key: 'makeup', price: '79' },
  { key: 'manicure', price: '59' },
  { key: 'pedicure', price: '69' },
  { key: 'facial', price: '119' },
  { key: 'brows', price: '49' },
  { key: 'spa_treatment', price: '199' },
];

export default function Pricing() {
  const { t } = useI18n();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="pricing" className="py-24 lg:py-40 px-6 md:px-12 lg:px-20 bg-charcoal-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-champagne-500" />
            <span className="section-label opacity-80">{t('pricing.label')}</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-cormorant font-light text-5xl md:text-7xl text-white leading-none">
              {t('pricing.title')}<br />
              <span className="gold-text">{t('pricing.title2')}</span>
            </h2>
            <p className="font-manrope font-light text-charcoal-300 max-w-xs leading-relaxed">
              {t('pricing.sub')}
            </p>
          </div>
        </motion.div>

        {/* Price list */}
        <div className="space-y-0">
          {PRICING_DATA.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group flex items-center justify-between py-6 border-b border-charcoal-700 hover:border-champagne-800 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-6">
                <span className="font-cormorant text-sm text-champagne-600 w-8 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-cormorant font-light text-2xl text-white group-hover:text-champagne-200 transition-colors duration-300">
                    {t(`services.items.${item.key}.name`)}
                  </h3>
                  <p className="font-manrope text-xs text-charcoal-400 mt-0.5">
                    {t(`services.items.${item.key}.duration`)} {t('services.duration')}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="hidden sm:flex flex-1 mx-8">
                  <div className="flex-1 border-b border-dashed border-charcoal-600 group-hover:border-champagne-700 transition-colors duration-300" />
                </div>
                <span className="font-cormorant text-2xl text-champagne-400">
                  {t('pricing.from')} {item.price} zł
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mt-12 gap-6"
        >
          <p className="font-manrope text-xs text-charcoal-400 italic max-w-sm">
            * {t('pricing.note')}
          </p>
          <button onClick={() => scrollTo('booking')} className="btn-primary text-xs">
            {t('pricing.cta')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

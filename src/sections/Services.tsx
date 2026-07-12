import { motion } from 'framer-motion';
import { useI18n } from '../hooks/useI18n';

// Custom SVG icons for services
const ServiceIcons = {
  hair_styling: () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M12 8C12 8 8 14 8 20C8 26 12 30 18 30C24 30 28 26 28 20" />
      <path d="M28 20C28 14 32 10 36 10C40 10 42 14 42 18C42 24 38 28 34 30" />
      <path d="M18 30C18 36 22 42 24 42" />
      <path d="M34 30C34 36 30 40 28 42" />
      <circle cx="24" cy="20" r="2" />
    </svg>
  ),
  hair_coloring: () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M16 6L20 28L24 22L28 28L32 6" />
      <path d="M10 30C10 30 14 26 24 26C34 26 38 30 38 30" />
      <path d="M10 30C10 38 16 44 24 44C32 44 38 38 38 30" />
      <path d="M20 34C20 36 22 38 24 38C26 38 28 36 28 34" />
    </svg>
  ),
  makeup: () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <ellipse cx="24" cy="20" rx="12" ry="14" />
      <path d="M16 22C16 22 19 26 24 26C29 26 32 22 32 22" />
      <circle cx="19" cy="17" r="1.5" />
      <circle cx="29" cy="17" r="1.5" />
      <path d="M20 14C20 14 22 12 24 14" />
      <path d="M28 14C28 14 26 12 24 14" />
      <path d="M24 34V42M20 38H28" />
    </svg>
  ),
  manicure: () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M14 24L14 10C14 8 16 6 18 6C20 6 22 8 22 10V24" />
      <path d="M22 20L22 8C22 6 24 4 26 4C28 4 30 6 30 8V20" />
      <path d="M30 22L30 10C30 8 32 6 34 6C36 6 38 8 38 10V22" />
      <path d="M10 26L10 14C10 12 12 10 14 10" />
      <path d="M10 26C10 26 8 28 8 32C8 38 12 42 24 42C36 42 40 38 40 32C40 28 38 26 38 26" />
      <path d="M14 26H38" />
    </svg>
  ),
  pedicure: () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M8 34C8 34 10 26 18 24C26 22 32 28 32 28" />
      <path d="M32 28C36 28 40 30 40 34C40 38 36 42 24 42C12 42 8 38 8 34Z" />
      <circle cx="16" cy="20" r="3" />
      <circle cx="24" cy="17" r="3" />
      <circle cx="32" cy="19" r="3" />
    </svg>
  ),
  facial: () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <ellipse cx="24" cy="24" rx="16" ry="18" />
      <path d="M16 20C16 20 18 16 24 16C30 16 32 20 32 20" />
      <path d="M18 28C18 28 20 32 24 32C28 32 30 28 30 28" />
      <line x1="10" y1="24" x2="6" y2="24" />
      <line x1="38" y1="24" x2="42" y2="24" />
      <line x1="24" y1="4" x2="24" y2="8" />
    </svg>
  ),
  brows: () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M6 18C6 18 12 12 24 12C36 12 42 18 42 18" />
      <path d="M6 20C6 20 12 16 20 16C28 16 36 20 42 20" strokeWidth="2.5" />
      <path d="M10 30C10 30 16 24 24 24C32 24 38 30 38 30" />
      <path d="M10 32C10 32 16 28 22 28C28 28 36 32 38 32" strokeWidth="2.5" />
      <line x1="24" y1="8" x2="24" y2="4" />
      <line x1="24" y1="36" x2="24" y2="40" />
    </svg>
  ),
  spa_treatment: () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M24 6C24 6 16 14 16 22C16 28 19 32 24 32C29 32 32 28 32 22C32 14 24 6 24 6Z" />
      <path d="M12 20C12 20 8 24 8 30C8 36 12 40 18 40" />
      <path d="M36 20C36 20 40 24 40 30C40 36 36 40 30 40" />
      <path d="M18 40H30" />
      <path d="M24 32V40" />
    </svg>
  ),
};

const SERVICE_KEYS = ['hair_styling', 'hair_coloring', 'makeup', 'manicure', 'pedicure', 'facial', 'brows', 'spa_treatment'] as const;

export default function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="py-24 lg:py-40 px-6 md:px-12 lg:px-20 bg-charcoal-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-champagne-500" />
            <span className="section-label opacity-80">{t('services.label')}</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-cormorant font-light text-5xl md:text-7xl text-white leading-none">
              {t('services.title')}
            </h2>
            <p className="font-manrope font-light text-charcoal-300 max-w-xs leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-700">
          {SERVICE_KEYS.map((key, i) => {
            const Icon = ServiceIcons[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="group relative bg-charcoal-800 p-8 flex flex-col gap-6 cursor-default hover:bg-charcoal-700 transition-colors duration-500"
              >
                {/* Icon */}
                <div className="text-champagne-500 group-hover:text-champagne-300 transition-colors duration-500 group-hover:scale-110 transform transition-transform">
                  <Icon />
                </div>

                {/* Name */}
                <div>
                  <h3 className="font-cormorant font-light text-2xl text-white mb-2 group-hover:text-champagne-200 transition-colors duration-300">
                    {t(`services.items.${key}.name`)}
                  </h3>
                  <p className="font-manrope font-light text-sm text-charcoal-300 leading-relaxed">
                    {t(`services.items.${key}.desc`)}
                  </p>
                </div>

                {/* Meta */}
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-charcoal-700 group-hover:border-champagne-800 transition-colors duration-300">
                  <span className="font-manrope text-xs text-charcoal-400">
                    {t(`services.items.${key}.duration`)} {t('services.duration')}
                  </span>
                  <span className="font-cormorant text-lg text-champagne-400">
                    {t('services.from')} {t(`services.items.${key}.price`)} zł
                  </span>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-champagne-500 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

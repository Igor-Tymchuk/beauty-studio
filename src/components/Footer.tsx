import { Instagram, Facebook } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';

const NAV_SECTIONS = ['services', 'team', 'portfolio', 'pricing', 'contact'] as const;

export default function Footer() {
  const { t } = useI18n();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-700 pt-16 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <span className="font-vibes text-4xl text-champagne-400">Lumière</span>
              <div className="font-manrope text-xs tracking-widest3 uppercase text-charcoal-500 mt-1">Beauty Studio</div>
            </div>
            <p className="font-manrope font-light text-sm text-charcoal-400 leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-manrope text-xs tracking-widest uppercase text-charcoal-500 mb-6">
              {t('footer.navigation')}
            </h4>
            <ul className="space-y-3">
              {NAV_SECTIONS.map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollTo(section)}
                    className="font-manrope text-sm text-charcoal-400 hover:text-champagne-400 transition-colors duration-300"
                  >
                    {t(`nav.${section}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-manrope text-xs tracking-widest uppercase text-charcoal-500 mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="font-manrope text-sm text-charcoal-400">{t('contact.address')}</li>
              <li>
                <a href={`tel:${t('contact.phone')}`} className="font-manrope text-sm text-charcoal-400 hover:text-champagne-400 transition-colors duration-300">
                  {t('contact.phone')}
                </a>
              </li>
              <li>
                <a href={`mailto:${t('contact.email')}`} className="font-manrope text-sm text-charcoal-400 hover:text-champagne-400 transition-colors duration-300">
                  {t('contact.email')}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-manrope text-xs tracking-widest uppercase text-charcoal-500 mb-6">
              {t('footer.social')}
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 border border-charcoal-700 flex items-center justify-center text-charcoal-400 hover:border-champagne-500 hover:text-champagne-400 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-charcoal-700 flex items-center justify-center text-charcoal-400 hover:border-champagne-500 hover:text-champagne-400 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gold mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-manrope text-xs text-charcoal-600">
            &copy; {new Date().getFullYear()} Lumière Beauty Studio. {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-manrope text-xs text-charcoal-600 hover:text-champagne-500 transition-colors duration-300">
              {t('footer.privacy')}
            </a>
            <a href="#" className="font-manrope text-xs text-charcoal-600 hover:text-champagne-500 transition-colors duration-300">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

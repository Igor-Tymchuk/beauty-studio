import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useI18n } from "../hooks/useI18n";

export default function Contact() {
  const { t } = useI18n();

  const details = [
    { icon: MapPin, label: t("contact.address") },
    { icon: Phone, label: t("contact.phone") },
    { icon: Mail, label: t("contact.email") },
  ];

  const hours = [
    t("contact.hours.weekdays"),
    t("contact.hours.saturday"),
    t("contact.hours.sunday"),
  ];

  return (
    <section
      id="contact"
      className="py-24 lg:py-40 px-6 md:px-12 lg:px-20 bg-ivory-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-champagne-400" />
            <span className="section-label">{t("contact.label")}</span>
            <div className="w-12 h-px bg-champagne-400" />
          </div>
          <h2 className="font-cormorant font-light text-6xl md:text-8xl lg:text-9xl text-charcoal-800 leading-none mb-2">
            {t("contact.title")}
          </h2>
          <h2 className="font-cormorant font-light text-6xl md:text-8xl lg:text-9xl gold-text leading-none mb-10">
            {t("contact.title2")}
          </h2>
          <button
            onClick={() =>
              document
                .getElementById("booking")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary text-xs"
          >
            {t("nav.book")}
          </button>
        </motion.div>

        {/* Contact info grid */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Details */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {details.map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-nude-200 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-champagne-500" />
                  </div>
                  <span className="font-manrope text-charcoal-600 mt-2.5">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Clock size={16} className="text-champagne-500" />
              <span className="font-manrope text-xs tracking-widest uppercase text-charcoal-500">
                {t("contact.hours_title")}
              </span>
            </div>
            <div className="space-y-4">
              {hours.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-3 border-b border-nude-100 last:border-0"
                >
                  <div className="w-2 h-2 rounded-full bg-champagne-400 flex-shrink-0" />
                  <span className="font-manrope text-sm text-charcoal-600">
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-16 h-64 bg-charcoal-100 relative overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={32} className="text-champagne-500 mx-auto mb-3" />
              <p className="font-cormorant text-2xl text-charcoal-500">
                {t("contact.address")}
              </p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#1C1C1A"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

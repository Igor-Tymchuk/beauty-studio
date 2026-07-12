import { motion } from "framer-motion";
import { useI18n } from "../hooks/useI18n";

const RITUAL_IMG = "./pexels-photo-3997380.jpg";

const STEP_KEYS = ["1", "2", "3", "4", "5"] as const;

export default function BeautyRitual() {
  const { t } = useI18n();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 lg:py-40 bg-charcoal-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-champagne-500" />
              <span className="section-label opacity-80">
                {t("ritual.label")}
              </span>
            </div>
            <h2 className="font-cormorant font-light text-5xl md:text-6xl text-white leading-none mb-2">
              {t("ritual.title")}
            </h2>
            <h2 className="font-cormorant font-light text-5xl md:text-6xl gold-text leading-none mb-10">
              {t("ritual.title2")}
            </h2>
            <p className="font-manrope font-light text-charcoal-300 leading-relaxed mb-12">
              {t("ritual.sub")}
            </p>

            {/* Steps */}
            <div className="space-y-0">
              {STEP_KEYS.map((key, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group flex gap-6 py-5 border-b border-charcoal-700 last:border-0 hover:border-champagne-800 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 border border-champagne-700 group-hover:border-champagne-500 flex items-center justify-center transition-colors duration-300">
                    <span className="font-cormorant text-sm text-champagne-500 font-light">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-cormorant font-light text-xl text-white mb-1 group-hover:text-champagne-200 transition-colors duration-300">
                      {t(`ritual.steps.${key}.title`)}
                    </h4>
                    <p className="font-manrope font-light text-sm text-charcoal-300 leading-relaxed">
                      {t(`ritual.steps.${key}.desc`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("booking")}
              className="btn-primary mt-10"
            >
              {t("ritual.cta")}
            </motion.button>
          </motion.div>

          {/* Right - image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={RITUAL_IMG}
                alt="Luxury Hair Ritual"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 to-transparent" />
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-champagne-400/60" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-champagne-400/60" />
            </div>
            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 glass-panel-dark p-6 max-w-[220px]"
            >
              <div className="font-vibes text-2xl text-champagne-400 mb-1">
                Experience
              </div>
              <div className="font-manrope text-xs text-charcoal-300 leading-relaxed">
                A journey crafted entirely for you
              </div>
              <div className="divider-gold mt-4" />
              <div className="font-cormorant text-lg text-white mt-3">
                120 min
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

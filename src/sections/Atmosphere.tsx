import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "../hooks/useI18n";

const ATMOSPHERE_IMAGES = [
  "./pexels-photo-3997391.jpg",
  "./pexels-photo-3993449.jpg",
  "./pexels-photo-4202925.jpg",
  "./pexels-photo-3985360.jpg",
];

export default function Atmosphere() {
  const { t } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={ref} className="py-24 lg:py-40 bg-ivory-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-champagne-500" />
              <span className="section-label">{t("atmosphere.label")}</span>
            </div>
            <h2 className="heading-xl text-charcoal-800 leading-none mb-2">
              {t("atmosphere.title")}
            </h2>
            <h2 className="heading-xl gold-text leading-none mb-10">
              {t("atmosphere.title2")}
            </h2>
            <p className="body-text max-w-md mb-10">{t("atmosphere.sub")}</p>

            {/* Quote */}
            <div className="relative pl-8 border-l-2 border-champagne-400">
              <span className="font-vibes text-4xl text-champagne-500 absolute -top-3 -left-2">
                &ldquo;
              </span>
              <blockquote className="font-cormorant font-light text-2xl text-charcoal-600 italic leading-relaxed">
                {t("atmosphere.quote")}
              </blockquote>
            </div>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {[
                "Private consultation rooms",
                "Premium product bar",
                "Complimentary refreshments",
                "Relaxation lounge",
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <div className="w-4 h-px bg-champagne-500 flex-shrink-0" />
                  <span className="font-manrope text-xs text-charcoal-500">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - image grid */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <motion.div style={{ y: y1 }} className="flex flex-col gap-4">
              <div className="overflow-hidden">
                <img
                  src={ATMOSPHERE_IMAGES[0]}
                  alt="Salon atmosphere"
                  className="w-full object-cover aspect-[3/4]"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={ATMOSPHERE_IMAGES[1]}
                  alt="Salon detail"
                  className="w-full object-cover aspect-square"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <motion.div style={{ y: y2 }} className="flex flex-col gap-4 pt-12">
              <div className="overflow-hidden">
                <img
                  src={ATMOSPHERE_IMAGES[2]}
                  alt="Salon interior"
                  className="w-full object-cover aspect-square"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={ATMOSPHERE_IMAGES[3]}
                  alt="Beauty products"
                  className="w-full object-cover aspect-[3/4]"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

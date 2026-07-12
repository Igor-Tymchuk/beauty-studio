import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useI18n } from "../hooks/useI18n";

const HERO_IMAGES = ["./pexels-photo-3993449.jpg"];

export default function Hero() {
  const { t } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.08]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen min-h-[700px] overflow-hidden"
    >
      {/* Parallax image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={HERO_IMAGES[0]}
          alt="Luxury beauty salon"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/70 via-charcoal-900/40 to-charcoal-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/50 to-transparent" />
      </motion.div>

      {/* Decorative rings */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute top-1/4 right-[10%] w-80 h-80 rounded-full border border-champagne-400"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 2, delay: 2 }}
          className="absolute top-[15%] right-[12%] w-48 h-48 rounded-full border border-champagne-300"
        />
      </div>

      {/* Main content wrapper — flex column fills full height */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full"
      >
        {/* Spacer for header */}
        <div className="flex-none pt-28 md:pt-32" />

        {/* Center content — grows to fill remaining space above stats */}
        <div className="flex-1 flex flex-col justify-center min-h-0">
          <div className="max-w-3xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-champagne-400" />
              <span className="section-label text-champagne-300 opacity-90">
                {t("hero.label")}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="font-cormorant font-light leading-none mb-6"
            >
              <span className="block text-5xl md:text-7xl lg:text-8xl text-white">
                {t("hero.headline1")}
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl gold-text mt-1">
                {t("hero.headline2")}
              </span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="origin-left w-24 h-px bg-champagne-500 mb-8"
            />

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="font-manrope font-light text-base md:text-lg text-ivory-300 max-w-xl leading-relaxed mb-10"
            >
              {t("hero.sub")}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <button
                onClick={() => scrollTo("booking")}
                className="btn-primary text-xs"
              >
                {t("hero.cta1")}
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="btn-ghost text-xs !text-ivory-200 !border-ivory-400/40 hover:!border-champagne-400 hover:!text-champagne-300"
              >
                {t("hero.cta2")}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom row — stats + scroll, always at bottom */}
        <div className="flex-none flex items-end justify-between pb-8 md:pb-10">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex items-center gap-8 sm:gap-12"
          >
            {[
              { num: "8+", label: "Years of Excellence" },
              { num: "2k+", label: "Happy Clients" },
              { num: "15", label: "Expert Masters" },
            ].map((stat) => (
              <div key={stat.num} className="flex flex-col">
                <span className="font-cormorant text-2xl md:text-3xl font-light text-champagne-300">
                  {stat.num}
                </span>
                <span className="font-manrope text-[10px] md:text-xs tracking-wider text-ivory-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            onClick={() => scrollTo("journey")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex flex-col items-center gap-2 group"
          >
            <span className="hidden sm:block font-manrope text-xs tracking-widest uppercase text-ivory-400 group-hover:text-champagne-300 transition-colors duration-300">
              {t("hero.scroll")}
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={16} className="text-champagne-400" />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>

      {/* Side text — decorative */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 2, duration: 1 }}
        className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3 pointer-events-none"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        <span className="font-manrope text-xs tracking-widest3 uppercase text-ivory-400">
          Beauty — Confidence — Elegance
        </span>
        <div className="w-px h-16 bg-champagne-500/40" />
      </motion.div>
    </section>
  );
}

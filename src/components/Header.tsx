import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "../hooks/useI18n";

const NAV_SECTIONS = [
  "services",
  "team",
  "portfolio",
  "pricing",
  "contact",
] as const;

// Burger → X morphing SVG
function BurgerIcon({ open }: { open: boolean }) {
  const t = {
    duration: 0.38,
    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  };
  const state = open ? "open" : "closed";

  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      aria-hidden="true"
      overflow="visible"
    >
      <motion.rect
        x="0"
        y="0"
        width="22"
        height="2"
        rx="1"
        fill="currentColor"
        variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 7 } }}
        animate={state}
        initial={false}
        style={{ originX: "11px", originY: "1px" }}
        transition={t}
      />
      <motion.rect
        x="0"
        y="7"
        width="22"
        height="2"
        rx="1"
        fill="currentColor"
        variants={{
          closed: { opacity: 1, scaleX: 1 },
          open: { opacity: 0, scaleX: 0 },
        }}
        animate={state}
        initial={false}
        style={{ originX: "11px", originY: "8px" }}
        transition={t}
      />
      <motion.rect
        x="0"
        y="14"
        width="22"
        height="2"
        rx="1"
        fill="currentColor"
        variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -7 } }}
        animate={state}
        initial={false}
        style={{ originX: "11px", originY: "1px" }}
        transition={t}
      />
    </svg>
  );
}

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(
      () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
      350,
    );
  };

  const langs = [
    { code: "en", label: "EN", full: "English" },
    { code: "uk", label: "УКР", full: "Українська" },
    { code: "pl", label: "PL", full: "Polski" },
  ] as const;

  // Burger sits at top-5 right-6 with p-2, icon 22×16
  // Circle origin: from right = 24+8+11=43px → calc(100%-43px), from top = 20+8+8=36px
  const CLIP_ORIGIN = "calc(100% - 43px) 36px";

  return (
    <>
      {/* ── Header bar ─────────────────────────────────────────── */}
      {/* z-50; gets covered by the menu overlay at z-[100]        */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "glass-panel shadow-luxury py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() =>
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col leading-none"
          >
            <span
              className={`font-vibes text-3xl transition-colors duration-500 ${
                scrolled ? "text-champagne-500" : "text-champagne-300"
              }`}
            >
              Lumière
            </span>
            <span
              className={`font-manrope text-[9px] tracking-widest3 uppercase transition-colors duration-500 ${
                scrolled ? "text-charcoal-400" : "text-ivory-300"
              }`}
            >
              Beauty Studio
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_SECTIONS.map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={`font-manrope text-xs tracking-widest uppercase transition-all duration-300 relative group ${
                  scrolled
                    ? "text-charcoal-500 hover:text-charcoal-800"
                    : "text-ivory-300 hover:text-white"
                }`}
              >
                {t(`nav.${section}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-champagne-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right — desktop only controls + mobile spacer */}
          <div className="flex items-center gap-4">
            {/* Language */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`font-manrope text-xs tracking-widest uppercase flex items-center gap-1.5 transition-colors duration-300 ${
                  scrolled
                    ? "text-charcoal-400 hover:text-champagne-500"
                    : "text-ivory-300 hover:text-white"
                }`}
              >
                {langs.find((l) => l.code === lang)?.label}
                <motion.span
                  animate={{ rotate: langOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[8px] opacity-60"
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-3 right-0 glass-panel rounded-sm overflow-hidden min-w-[140px] shadow-luxury"
                  >
                    {langs.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setLangOpen(false);
                        }}
                        className={`w-full text-left px-5 py-3 font-manrope text-xs tracking-widest uppercase transition-colors duration-200 flex items-center justify-between ${
                          lang === l.code
                            ? "text-champagne-600 bg-champagne-50"
                            : "text-charcoal-500 hover:text-charcoal-800 hover:bg-ivory-100"
                        }`}
                      >
                        <span>{l.full}</span>
                        {lang === l.code && (
                          <span className="w-1 h-1 rounded-full bg-champagne-500" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Book CTA */}
            <button
              onClick={() => scrollTo("booking")}
              className="hidden md:flex btn-primary text-xs"
            >
              {t("nav.book")}
            </button>

            {/* Mobile spacer — matches burger button width so logo stays left-aligned */}
            <div className="lg:hidden w-9" />
          </div>
        </div>
      </motion.header>

      {/* ── Burger button ───────────────────────────────────────── */}
      {/* Independent fixed element — z-[200] is above everything  */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`fixed top-5 right-6 z-[200] lg:hidden p-2 transition-colors duration-300 ${
          menuOpen
            ? "text-white"
            : scrolled
              ? "text-charcoal-700"
              : "text-white"
        }`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <BurgerIcon open={menuOpen} />
      </button>

      {/* ── Mobile menu overlay ─────────────────────────────────── */}
      {/* z-[100] — covers the header (z-50) completely             */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: `circle(0% at ${CLIP_ORIGIN})` }}
            animate={{ clipPath: `circle(150% at ${CLIP_ORIGIN})` }}
            exit={{ clipPath: `circle(0% at ${CLIP_ORIGIN})` }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[100] bg-charcoal-900 flex flex-col overflow-hidden"
          >
            {/* ── Content anchored to the BOTTOM ── */}
            <div className="flex flex-col justify-end h-full px-10 sm:px-14 pb-14 sm:pb-20 gap-4">
              {/* Nav links */}
              <nav className="flex flex-col gap-3">
                {NAV_SECTIONS.map((section, i) => (
                  <motion.button
                    key={section}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 + i * 0.07, duration: 0.38 }}
                    onClick={() => scrollTo(section)}
                    className="text-left font-cormorant text-2xl sm:text-3xl font-light text-ivory-200 hover:text-champagne-400 transition-colors duration-300"
                  >
                    {t(`nav.${section}`)}
                  </motion.button>
                ))}
              </nav>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.55, duration: 0.4, ease: "easeOut" }}
                className="origin-left divider-gold opacity-30 my-1"
              />

              {/* Language + CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.62, duration: 0.35 }}
                className="flex items-center gap-4 flex-wrap"
              >
                {(["en", "uk", "pl"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`font-manrope text-xs tracking-widest uppercase px-3 py-1.5 border transition-colors duration-300 ${
                      lang === l
                        ? "border-champagne-500 text-champagne-400"
                        : "border-charcoal-600 text-charcoal-400 hover:border-charcoal-400"
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}

                <button
                  onClick={() => scrollTo("booking")}
                  className="btn-primary text-xs ml-2"
                >
                  {t("nav.book")}
                </button>
              </motion.div>
            </div>

            {/* Watermark */}
            <div className="absolute top-10 left-10 opacity-[0.04] pointer-events-none select-none">
              <span className="font-vibes text-8xl text-champagne-200">
                Lumière
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for lang dropdown */}
      {langOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setLangOpen(false)}
        />
      )}
    </>
  );
}

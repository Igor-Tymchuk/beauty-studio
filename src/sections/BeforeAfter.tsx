import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useI18n } from "../hooks/useI18n";

const BEFORE_IMG = "./pexels-photo-3738381.jpg";
const AFTER_IMG = "./pexels-photo-3997391.jpg";

export default function BeforeAfter() {
  const { t } = useI18n();
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => {
    setDragging(true);
    const onMove = (e: MouseEvent) => updatePosition(e.clientX);
    const onUp = () => {
      setDragging(false);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const onTouchStart = (_e: React.TouchEvent) => {
    setDragging(true);
    const onMove = (ev: TouchEvent) => updatePosition(ev.touches[0].clientX);
    const onEnd = () => {
      setDragging(false);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onEnd);
  };

  return (
    <section className="py-24 lg:py-40 px-6 md:px-12 lg:px-20 bg-ivory-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-champagne-500" />
            <span className="section-label">{t("before_after.label")}</span>
            <div className="w-12 h-px bg-champagne-500" />
          </div>
          <h2 className="heading-lg text-charcoal-800 mb-2">
            {t("before_after.title")}
          </h2>
          <h2 className="heading-lg gold-text mb-6">
            {t("before_after.title2")}
          </h2>
          <p className="body-text max-w-md mx-auto">{t("before_after.sub")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="relative max-w-3xl mx-auto aspect-[3/4] md:aspect-[4/3] overflow-hidden select-none rounded-sm shadow-luxury-lg cursor-ew-resize"
          ref={containerRef}
        >
          {/* After image (full) */}
          <img
            src={AFTER_IMG}
            alt="After"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Before image (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <img
              src={BEFORE_IMG}
              alt="Before"
              className="absolute inset-0 h-full object-cover"
              style={{ width: `${100 / (position / 100)}%` }}
            />
          </div>

          {/* Labels */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-6 left-6 glass-panel-dark px-4 py-2">
              <span className="font-manrope text-xs tracking-widest uppercase text-ivory-200">
                {t("before_after.before")}
              </span>
            </div>
            <div className="absolute top-6 right-6 glass-panel-dark px-4 py-2">
              <span className="font-manrope text-xs tracking-widest uppercase text-champagne-300">
                {t("before_after.after")}
              </span>
            </div>
          </div>

          {/* Divider line */}
          <div
            className="absolute inset-y-0 w-px bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.5)] pointer-events-none"
            style={{ left: `${position}%` }}
          />

          {/* Handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
            style={{ left: `${position}%` }}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
          >
            <div
              className={`w-12 h-12 rounded-full bg-white shadow-luxury flex items-center justify-center transition-transform duration-200 ${dragging ? "scale-110" : "scale-100"}`}
            >
              <div className="flex items-center gap-1">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                  <path
                    d="M5 1L1 6L5 11"
                    stroke="#C9973A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                  <path
                    d="M3 1L7 6L3 11"
                    stroke="#C9973A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

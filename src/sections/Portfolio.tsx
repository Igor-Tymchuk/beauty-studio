import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { useI18n } from "../hooks/useI18n";

const GALLERY = [
  {
    id: 1,
    category: "Makeup",
    src: "./pexels-photo-3997391.jpg",
    span: "row-span-2",
  },
  {
    id: 2,
    category: "Atmosphere",
    src: "./pexels-photo-3762940.jpg",
    span: "",
  },
  { id: 3, category: "Hair", src: "./pexels-photo-4202925.jpg", span: "" },
  {
    id: 4,
    category: "Hair",
    src: "./pexels-507425.jpg",
    span: "",
  },
  { id: 5, category: "Makeup", src: "./pexels-photo-3738381.jpg", span: "" },
  {
    id: 6,
    category: "Makeup",
    src: "./pexels-photo-3985360.jpg",
    span: "row-span-2",
  },
  { id: 7, category: "Hair", src: "./pexels-photo-3993444.jpg", span: "" },
  {
    id: 8,
    category: "Nails",
    src: "./pexels-photo-3997380.jpg",
    span: "",
  },
  { id: 9, category: "Nails", src: "./pexels-photo-3997387.jpg", span: "" },
];

export default function Portfolio() {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const categories = t("portfolio.categories") as unknown as string[];

  const filtered =
    activeCategory === "All" || categories.indexOf(activeCategory) === 0
      ? GALLERY
      : GALLERY.filter(
          (img) =>
            img.category ===
            ["All", "Hair", "Makeup", "Nails", "Atmosphere"][
              categories.indexOf(activeCategory)
            ],
        );

  return (
    <section
      id="portfolio"
      className="py-24 lg:py-40 px-6 md:px-12 lg:px-20 bg-ivory-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-champagne-500" />
            <span className="section-label">{t("portfolio.label")}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="heading-xl text-charcoal-800 leading-none">
              {t("portfolio.title")}
              <br />
              <span className="gold-text">{t("portfolio.title2")}</span>
            </h2>
            {/* Category filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-manrope text-xs tracking-widest uppercase px-4 py-2 transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-champagne-500 text-white"
                      : "border border-nude-300 text-charcoal-400 hover:border-champagne-400 hover:text-charcoal-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative group overflow-hidden cursor-pointer break-inside-avoid mb-4"
                onClick={() => setLightboxImg(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.category}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/40 transition-colors duration-500 flex items-center justify-center">
                  <ZoomIn
                    size={28}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-manrope text-xs tracking-widest uppercase text-champagne-300">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-charcoal-900/95 flex items-center justify-center p-6"
            onClick={() => setLightboxImg(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              src={lightboxImg}
              alt="Portfolio"
              className="max-w-full max-h-[90vh] object-contain shadow-luxury-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white hover:text-champagne-400 transition-colors duration-300"
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

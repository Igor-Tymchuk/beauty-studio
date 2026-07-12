import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "../hooks/useI18n";

const STAGE_IMAGES = [
  "./pexels-photo-3762940.jpg",
  "./pexels-photo-3985360.jpg",
  "./pexels-photo-3993444.jpg",
  "./pexels-photo-3997380.jpg",
];

function StageCard({
  index,
  image,
  tag,
  text,
  isEven,
}: {
  index: number;
  image: string;
  tag: string;
  text: string;
  isEven: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.6],
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={`flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20 mb-24 lg:mb-40`}
    >
      {/* Image */}
      <div className="relative w-full lg:w-5/12 overflow-hidden aspect-[3/4] max-h-[600px]">
        <motion.img
          style={{ y }}
          src={image}
          alt={tag}
          className="w-full h-full object-cover will-change-transform"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
        {/* Stage number overlay */}
        <div className="absolute bottom-6 left-6">
          <span className="font-cormorant text-6xl font-light text-white/20 leading-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        {/* Gold corner accent */}
        <div
          className={`absolute top-0 ${isEven ? "right-0" : "left-0"} w-16 h-16 border-t-2 border-champagne-400/60 ${isEven ? "border-r-2" : "border-l-2"}`}
        />
      </div>

      {/* Text */}
      <div className={`w-full lg:w-7/12 ${isEven ? "lg:pr-8" : "lg:pl-8"}`}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-champagne-500" />
            <span className="section-label">{tag}</span>
          </div>
          <blockquote className="font-cormorant font-light text-3xl md:text-4xl lg:text-5xl text-charcoal-700 leading-tight italic">
            &ldquo;{text}&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function TransformationJourney() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);

  const stages = [
    { tag: t("journey.stage1.tag"), text: t("journey.stage1.text") },
    { tag: t("journey.stage2.tag"), text: t("journey.stage2.text") },
    { tag: t("journey.stage3.tag"), text: t("journey.stage3.text") },
    { tag: t("journey.stage4.tag"), text: t("journey.stage4.text") },
  ];

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="py-24 lg:py-40 px-6 md:px-12 lg:px-20 bg-ivory-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-24 lg:mb-40"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-champagne-400" />
            <span className="section-label">{t("journey.label")}</span>
            <div className="w-12 h-px bg-champagne-400" />
          </div>
          <h2 className="heading-xl text-charcoal-800 mb-2">
            {t("journey.title")}
          </h2>
          <h2 className="heading-xl gold-text">{t("journey.subtitle")}</h2>
        </motion.div>

        {/* Stages */}
        {stages.map((stage, i) => (
          <StageCard
            key={i}
            index={i}
            image={STAGE_IMAGES[i]}
            tag={stage.tag}
            text={stage.text}
            isEven={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useI18n } from "../hooks/useI18n";

const TEAM_IMAGES = [
  "./pexels-photo-3764119.jpg",
  "./pexels-photo-3780146.jpg",
  "./pexels-photo-3771807.jpg",
  "./pexels-photo-3807571.jpg",
];

const MEMBER_KEYS = ["1", "2", "3", "4"] as const;

export default function Team() {
  const { t } = useI18n();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="team"
      className="py-24 lg:py-40 px-6 md:px-12 lg:px-20 bg-ivory-50"
    >
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
            <span className="section-label">{t("team.label")}</span>
          </div>
          <h2 className="heading-xl text-charcoal-800 leading-none">
            {t("team.title")}
            <br />
            <span className="gold-text">{t("team.title2")}</span>
          </h2>
          <p className="body-text max-w-lg mt-6">{t("team.sub")}</p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MEMBER_KEYS.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group"
            >
              {/* Photo */}
              <div className="relative overflow-hidden aspect-[3/4] mb-6">
                <img
                  src={TEAM_IMAGES[i]}
                  alt={t(`team.members.${key}.name`)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Hover CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button
                    onClick={() => scrollTo("booking")}
                    className="w-full btn-primary justify-center text-xs"
                  >
                    {t("team.book")}{" "}
                    {t(`team.members.${key}.name`).split(" ")[0]}
                  </button>
                </div>
                {/* Gold corner */}
                <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-champagne-400/60" />
              </div>

              {/* Info */}
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-cormorant font-light text-2xl text-charcoal-800">
                    {t(`team.members.${key}.name`)}
                  </h3>
                  {/* <span className="font-cormorant text-xl text-champagne-500">
                    {t(`team.members.${key}.exp`)}
                  </span> */}
                </div>
                <p className="font-manrope text-xs tracking-wider text-charcoal-400 uppercase mb-1">
                  {t(`team.members.${key}.role`)}
                </p>
                <p className="font-manrope text-xs text-champagne-600">
                  {t(`team.members.${key}.exp`)} {t("team.experience")}
                </p>

                {/* Specialties */}
                <div className="divider-gold my-4" />
                <div className="flex flex-wrap gap-2">
                  {(
                    t(`team.members.${key}.specialties`) as unknown as string[]
                  ).map((spec: string) => (
                    <span
                      key={spec}
                      className="font-manrope text-xs text-charcoal-400 border border-nude-200 px-2 py-1"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

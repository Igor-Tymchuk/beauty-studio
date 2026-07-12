import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Lock } from "lucide-react";
import { useI18n } from "../hooks/useI18n";

const SERVICES_LIST = [
  "hair_styling",
  "hair_coloring",
  "makeup",
  "manicure",
  "pedicure",
  "facial",
  "brows",
  "spa_treatment",
];

export default function Booking() {
  const { t } = useI18n();
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: today,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set =
    (field: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: "",
        phone: "",
        service: "",
        date: new Date().toISOString().split("T")[0],
        message: "",
      });
    }, 5000);
  };

  const inputClass =
    "w-full px-0 py-4 font-manrope text-sm border-b border-charcoal-700 bg-transparent text-white placeholder-charcoal-500 focus:outline-none focus:border-champagne-500 transition-colors duration-300";
  const labelClass =
    "font-manrope text-xs tracking-widest uppercase text-charcoal-400 mb-2 block";

  return (
    <section
      id="booking"
      className="py-24 lg:py-40 px-6 md:px-12 lg:px-20 bg-charcoal-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-champagne-500" />
              <span className="section-label opacity-80">
                {t("booking.label")}
              </span>
            </div>
            <h2 className="font-cormorant font-light text-5xl md:text-7xl text-white leading-none mb-2">
              {t("booking.title")}
            </h2>
            <h2 className="font-cormorant font-light text-5xl md:text-7xl gold-text leading-none mb-10">
              {t("booking.title2")}
            </h2>
            <p className="font-manrope font-light text-charcoal-300 max-w-sm leading-relaxed mb-12">
              {t("booking.sub")}
            </p>

            {/* Contact options */}
            <div className="space-y-4 mb-12">
              <p className="font-manrope text-xs tracking-widest uppercase text-charcoal-500">
                {t("booking.or")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+48123456789"
                  className="flex items-center gap-3 px-6 py-4 border border-charcoal-600 text-white hover:border-champagne-500 hover:text-champagne-300 transition-all duration-300 group"
                >
                  <Phone
                    size={16}
                    className="text-champagne-500 group-hover:text-champagne-300 transition-colors duration-300"
                  />
                  <span className="font-manrope text-sm">+48 123 456 789</span>
                </a>
                <a
                  href="https://wa.me/48123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 border border-charcoal-600 text-white hover:border-champagne-500 hover:text-champagne-300 transition-all duration-300 group"
                >
                  <MessageCircle
                    size={16}
                    className="text-champagne-500 group-hover:text-champagne-300 transition-colors duration-300"
                  />
                  <span className="font-manrope text-sm">
                    {t("booking.whatsapp")}
                  </span>
                </a>
              </div>
            </div>

            {/* Privacy note */}
            <div className="flex items-start gap-3 text-charcoal-500">
              <Lock
                size={14}
                className="mt-0.5 flex-shrink-0 text-champagne-700"
              />
              <p className="font-manrope text-xs leading-relaxed">
                {t("booking.privacy")}
              </p>
            </div>
          </motion.div>

          {/* Right - form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-16 h-16 border border-champagne-500 flex items-center justify-center mb-8">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9973A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-cormorant text-3xl font-light text-white mb-4">
                  Thank you
                </h3>
                <p className="font-manrope text-sm text-charcoal-300 max-w-sm leading-relaxed">
                  {t("booking.success")}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass}>{t("booking.name")}</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder={t("booking.name_placeholder")}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{t("booking.phone")}</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder={t("booking.phone_placeholder")}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass}>{t("booking.service")}</label>
                    <select
                      required
                      value={form.service}
                      onChange={set("service")}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled className="bg-charcoal-800">
                        {t("booking.service_placeholder")}
                      </option>
                      {SERVICES_LIST.map((key) => (
                        <option
                          key={key}
                          value={key}
                          className="bg-charcoal-800"
                        >
                          {t(`services.items.${key}.name`)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>{t("booking.date")}</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={set("date")}
                      className={`${inputClass} cursor-pointer`}
                      style={{ colorScheme: "dark" }}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{t("booking.message")}</label>
                  <textarea
                    value={form.message}
                    onChange={set("message")}
                    placeholder={t("booking.message_placeholder")}
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="btn-primary w-full justify-center text-xs py-5"
                >
                  {t("booking.submit")}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

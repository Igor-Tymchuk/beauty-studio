import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";

import en from "../locales/en.json";
import uk from "../locales/uk.json";
import pl from "../locales/pl.json";

type Language = "en" | "uk" | "pl";

const locales: Record<Language, typeof en> = { en, uk, pl };

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  return (
    (path.split(".").reduce((acc: unknown, key) => {
      if (acc && typeof acc === "object") {
        return (acc as Record<string, unknown>)[key];
      }
      return key;
    }, obj) as string) ?? path
  );
}

interface I18nContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
  locale: typeof en;
}

const I18nContext = createContext<I18nContextType | null>(null);

const STORAGE_KEY = "lumiere_lang";

const SUPPORTED_LANGUAGES: Language[] = ["en", "uk", "pl"];

function getBrowserLanguage(): Language {
  const browserLanguages = navigator.languages || [navigator.language];

  for (const browserLang of browserLanguages) {
    const lang = browserLang.toLowerCase().split("-")[0] as Language;

    if (SUPPORTED_LANGUAGES.includes(lang)) {
      return lang;
    }
  }

  return "en";
}

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved && SUPPORTED_LANGUAGES.includes(saved as Language)) {
      return saved as Language;
    }

    const browserLang = getBrowserLanguage();

    // зберігаємо автоматично визначену мову
    localStorage.setItem(STORAGE_KEY, browserLang);

    return browserLang;
  } catch {
    return "en";
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  const setLang = useCallback((l: Language) => {
    localStorage.setItem(STORAGE_KEY, l);
    setLangState(l);
  }, []);

  const t = useCallback(
    (key: string) => {
      return getNestedValue(
        locales[lang] as unknown as Record<string, unknown>,
        key,
      );
    },
    [lang],
  );

  return (
    <I18nContext.Provider
      value={{
        lang,
        setLang,
        t,
        locale: locales[lang],
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);

  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return ctx;
}

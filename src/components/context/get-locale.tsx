import React, { createContext, useState } from "react";

type Locale = {
  default?: boolean;
  label: string;
  locale: string;
};

export const locales: Locale[] = [
  {
    default: true,
    label: `Slovenian`,
    locale: `sl-SI`,
  },
  {
    label: `English`,
    locale: `en-US`,
  },
];

type LocaleContextType = {
  currentLocale: Locale["label"];
  updateLocale: (locale: Locale["label"]) => void;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

const defaultLocale = locales.find((locale) => locale.default);

function LocaleProvider({ children, locale = defaultLocale?.label }) {
  const [currentLocale, setCurrentLocale] = useState<Locale["label"]>(
    locale || ""
  );

  const updateLocale = (locale: Locale["label"]) => setCurrentLocale(locale);

  return (
    <LocaleContext.Provider
      value={{
        currentLocale,
        updateLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export { LocaleProvider, LocaleContext as default };

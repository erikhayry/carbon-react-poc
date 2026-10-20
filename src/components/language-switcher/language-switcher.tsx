import { Select, SelectItem } from "@carbon/react";
import { m } from "../../paraglide/messages";
import { getLocale, locales, setLocale } from "../../paraglide/runtime";

// Each language is named in its own language, whichever locale is active
const languageNames: Record<(typeof locales)[number], () => string> = {
  en: () => m.language_name_en(),
  sv: () => m.language_name_sv(),
};

export const LanguageSwitcher = () => {
  return (
    <Select
      id="language-switcher"
      labelText={m.language_switcher_label()}
      inline
      size="sm"
      value={getLocale()}
      onChange={(event) => setLocale(event.target.value as (typeof locales)[number])}
    >
      {locales.map((locale) => (
        <SelectItem key={locale} value={locale} text={languageNames[locale]()} />
      ))}
    </Select>
  );
};

import { Select, SelectItem } from "@carbon/react";
import { m } from "@/paraglide/messages";
import { getLocale, locales, setLocale } from "@/paraglide/runtime";
import { LocaleSchema, type Locale } from "@/types/locale";

// Each language is named in its own language, whichever locale is active
const languageNames: Record<Locale, () => string> = {
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
      onChange={(event) => setLocale(LocaleSchema.parse(event.target.value))}
    >
      {locales.map((locale) => (
        <SelectItem key={locale} value={locale} text={languageNames[locale]()} />
      ))}
    </Select>
  );
};

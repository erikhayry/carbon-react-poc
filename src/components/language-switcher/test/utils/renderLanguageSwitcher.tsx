import { LanguageSwitcher } from "@/components/language-switcher/language-switcher";
import { m } from "@/paraglide/messages";
import { render } from "@testing-library/react";

export function renderLanguageSwitcher() {
  const { getByRole } = render(<LanguageSwitcher />);

  const getSelect = () => getByRole("combobox", { name: m.language_switcher_label() });
  const getOption = (name: string) => getByRole("option", { name });

  return {
    getSelect,
    getOption,
  };
}

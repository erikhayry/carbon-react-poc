import { baseLocale } from "../../../paraglide/runtime";
import { m } from "../../../paraglide/messages";
import { renderLanguageSwitcher } from "./utils/renderLanguageSwitcher";

describe("LanguageSwitcher", () => {
  it("lists all locales with the current one selected", () => {
    const { getSelect, getOption } = renderLanguageSwitcher();

    expect(getSelect()).toHaveValue(baseLocale);
    expect(getOption(m.language_name_en())).toBeInTheDocument();
    expect(getOption(m.language_name_sv())).toBeInTheDocument();
  });
});

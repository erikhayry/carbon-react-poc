import { render, screen } from "@testing-library/react";
import { LanguageSwitcher } from "./language-switcher";

describe("LanguageSwitcher", () => {
  it("lists all locales with the current one selected", () => {
    render(<LanguageSwitcher />);
    const select = screen.getByRole("combobox", { name: "Language" });

    expect(select).toHaveValue("en");
    expect(screen.getByRole("option", { name: "English" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Svenska" })).toBeInTheDocument();
  });
});

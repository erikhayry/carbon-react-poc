import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Heading } from "@carbon/react";
import { LanguageSwitcher } from "../components/language-switcher/language-switcher";
import { m } from "../paraglide/messages";

const RootLayout = () => {
  return (
    <>
      <Heading>{m.app_title()}</Heading>
      <nav aria-label={m.nav_label()}>
        <Link to="/">{m.nav_home()}</Link> <Link to="/about">{m.nav_about()}</Link>{" "}
        <Link to="/cards/$cardId" params={{ cardId: "42" }}>
          {m.nav_card({ cardId: "42" })}
        </Link>
      </nav>
      <LanguageSwitcher />
      <Outlet />
    </>
  );
};

const NotFound = () => {
  return <p>{m.not_found()}</p>;
};

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

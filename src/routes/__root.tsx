import { Heading, Link, Stack, unstable_Text as Text } from "@carbon/react";
import { Outlet, createLink, createRootRoute } from "@tanstack/react-router";
import { LanguageSwitcher } from "@/components/language-switcher/language-switcher";
import { m } from "@/paraglide/messages";

// Carbon's Link renders the anchor; TanStack's createLink keeps `to`/`params` typed
const NavLink = createLink(Link);

const RootLayout = () => {
  return (
    <Stack gap={5}>
      <Heading>{m.app_title()}</Heading>
      <Stack as="nav" aria-label={m.nav_label()} orientation="horizontal" gap={5}>
        <NavLink to="/">{m.nav_home()}</NavLink>
        <NavLink to="/about">{m.nav_about()}</NavLink>
        <NavLink to="/cards/$cardId" params={{ cardId: "42" }}>
          {m.nav_card({ cardId: "42" })}
        </NavLink>
      </Stack>
      <LanguageSwitcher />
      <Outlet />
    </Stack>
  );
};

const NotFound = () => {
  return <Text as="p">{m.not_found()}</Text>;
};

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

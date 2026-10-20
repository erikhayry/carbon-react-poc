import { Heading, Stack, unstable_Text as Text } from "@carbon/react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { LanguageSwitcher } from "@/components/language-switcher/language-switcher";
import { m } from "@/paraglide/messages";

const RootLayout = () => {
  return (
    <Stack gap={5}>
      <Heading>{m.app_title()}</Heading>
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

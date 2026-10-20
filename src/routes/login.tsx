import { Heading, Section } from "@carbon/react";
import { createFileRoute } from "@tanstack/react-router";
import { m } from "@/paraglide/messages";

const Login = () => {
  return (
    <Section>
      <Heading>{m.login_title()}</Heading>
    </Section>
  );
};

export const Route = createFileRoute("/login")({
  component: Login,
});

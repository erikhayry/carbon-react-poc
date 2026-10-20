import { Heading, Section } from "@carbon/react";
import { createFileRoute } from "@tanstack/react-router";
import { m } from "@/paraglide/messages";

const Landing = () => {
  return (
    <Section>
      <Heading>{m.landing_title()}</Heading>
    </Section>
  );
};

export const Route = createFileRoute("/")({
  component: Landing,
});

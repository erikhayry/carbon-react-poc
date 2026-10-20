import { Heading, Section } from "@carbon/react";
import { createFileRoute } from "@tanstack/react-router";
import { m } from "@/paraglide/messages";

function Home() {
  return (
    <Section>
      <Heading>{m.get_started()}</Heading>
    </Section>
  );
}

export const Route = createFileRoute("/")({
  component: Home,
});

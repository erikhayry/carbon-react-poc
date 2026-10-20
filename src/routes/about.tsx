import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@carbon/react";
import { Card } from "@/components/card/card";
import { m } from "@/paraglide/messages";

const About = () => {
  return (
    <Section>
      <Card title={m.about_title()}>
        <p>{m.about_body()}</p>
      </Card>
    </Section>
  );
};

export const Route = createFileRoute("/about")({
  component: About,
});

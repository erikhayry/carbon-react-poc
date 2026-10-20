import { Section, unstable_Text as Text } from "@carbon/react";
import { Card } from "@/components/card/card";
import { createFileRoute } from "@tanstack/react-router";
import { m } from "@/paraglide/messages";

const About = () => {
  return (
    <Section>
      <Card title={m.about_title()}>
        <Text as="p">{m.about_body()}</Text>
      </Card>
    </Section>
  );
};

export const Route = createFileRoute("/about")({
  component: About,
});

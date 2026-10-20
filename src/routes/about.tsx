import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@carbon/react";
import { Card } from "../components/card/card";

const About = () => {
  return (
    <Section>
      <Card title="About">
        <p>This page is rendered from src/routes/about.tsx</p>
      </Card>
    </Section>
  );
};

export const Route = createFileRoute("/about")({
  component: About,
});

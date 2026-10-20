import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@carbon/react";
import { Card } from "../../components/card/card";

const CardPage = () => {
  const { cardId } = Route.useParams();

  return (
    <Section>
      <Card title={`Card ${cardId}`}>
        <p>This page is rendered from src/routes/cards/$cardId.tsx</p>
      </Card>
    </Section>
  );
};

export const Route = createFileRoute("/cards/$cardId")({
  component: CardPage,
});

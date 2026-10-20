import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@carbon/react";
import { Card } from "@/components/card/card";
import { m } from "@/paraglide/messages";

const CardPage = () => {
  const { cardId } = Route.useParams();

  return (
    <Section>
      <Card title={m.card_title({ cardId })}>
        <p>{m.card_body()}</p>
      </Card>
    </Section>
  );
};

export const Route = createFileRoute("/cards/$cardId")({
  component: CardPage,
});

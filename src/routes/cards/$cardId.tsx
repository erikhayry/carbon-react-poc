import { createFileRoute } from "@tanstack/react-router";
import { Section, unstable_Text as Text } from "@carbon/react";
import { Card } from "@/components/card/card";
import { m } from "@/paraglide/messages";

const CardPage = () => {
  const { cardId } = Route.useParams();

  return (
    <Section>
      <Card title={m.card_title({ cardId })}>
        <Text as="p">{m.card_body()}</Text>
      </Card>
    </Section>
  );
};

export const Route = createFileRoute("/cards/$cardId")({
  component: CardPage,
});

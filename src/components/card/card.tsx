import { Section, Heading, Tile, Stack } from "@carbon/react";
import type { CardProps } from "@/components/card/cardType";

export const Card = ({ title, children }: CardProps) => {
  return (
    <Tile>
      <Section>
        <Stack gap={3}>
          <Heading>{title}</Heading>
          {children}
        </Stack>
      </Section>
    </Tile>
  );
};

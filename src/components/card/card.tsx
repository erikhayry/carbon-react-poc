import { Section, Heading, Tile } from "@carbon/react";
import type { CardProps } from "./cardType";

export const Card = ({ title, children }: CardProps) => {
  return (
    <Tile>
      <Section>
        <Heading>{title}</Heading>
        {children}
      </Section>
    </Tile>
  );
};

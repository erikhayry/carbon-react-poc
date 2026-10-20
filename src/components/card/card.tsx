import type { ReactNode } from "react";
import { Section, Heading, Tile } from "@carbon/react";

type CardProps = {
  title: string;
  children?: ReactNode;
};

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

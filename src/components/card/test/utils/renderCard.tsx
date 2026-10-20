import { render } from "@testing-library/react";
import { Card } from "../../card";
import { CardPropsMock } from "./mockCard";

export function renderCard(props = CardPropsMock) {
  const { getByRole } = render(<Card {...props} />);

  const getTitle = () => getByRole("heading", { level: 2, name: props.title });

  return {
    getTitle,
  };
}

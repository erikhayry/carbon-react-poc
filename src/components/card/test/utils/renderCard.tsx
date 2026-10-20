import { render } from "@testing-library/react";
import { Card } from "@/components/card/card";
import { CardPropsMock } from "@/components/card/test/utils/mockCard";

export function renderCard(props = CardPropsMock) {
  const { getByRole } = render(<Card {...props} />);

  const getTitle = () => getByRole("heading", { level: 2, name: props.title });

  return {
    getTitle,
  };
}

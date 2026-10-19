import { render, screen } from "@testing-library/react";
import { Card } from "./card";

describe("Card", () => {
  it("renders", () => {
    render(<Card />);
    expect(
      screen.getByRole("heading", { level: 2, name: "Card" }),
    ).toBeInTheDocument();
  });
});

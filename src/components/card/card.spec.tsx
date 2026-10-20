import { render, screen } from "@testing-library/react";
import { Card } from "./card";

describe("Card", () => {
  it("renders the title as a heading", () => {
    render(<Card title="My card" />);
    expect(
      screen.getByRole("heading", { level: 2, name: "My card" }),
    ).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <Card title="My card">
        <p>Card body</p>
      </Card>,
    );
    expect(screen.getByText("Card body")).toBeInTheDocument();
  });
});

import { renderCard } from "./utils/renderCard";

describe("Card", () => {
  it("renders the title as a heading", () => {
    const { getTitle } = renderCard();

    expect(getTitle()).toBeInTheDocument();
  });
});

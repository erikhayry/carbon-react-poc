import { renderCard } from "@/components/card/test/utils/renderCard";

describe("Card", () => {
  it("renders the title as a heading", () => {
    const { getTitle } = renderCard();

    expect(getTitle()).toBeInTheDocument();
  });
});

// Libs
import { render, screen } from "@testing-library/react";

// Components
import ListCard from "./index";

// Mocks
import { MOVIE_LIST_DATA } from "@/mocks";

describe("ListCard", () => {
  const props = {
    listCard: MOVIE_LIST_DATA,
    onClick: () => {},
    onChange: () => {},
  };

  test("Should be render list card is empty", () => {
    const { container } = render(<ListCard {...props} listCard={[]} />);
    const notFound = screen.getByText("Not found data!");
    const card = container.querySelectorAll('[role="card-list"]');

    expect(notFound).toBeInTheDocument();
    expect(card.length).toEqual(0);

    expect(container).toMatchSnapshot();
  });

  test("Should match snapshot", () => {
    const container = render(<ListCard {...props} />);

    expect(container).toMatchSnapshot();
  });
});

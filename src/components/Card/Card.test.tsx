// Libs
import { render } from "@testing-library/react";

// Components
import Card from "./index";
import { MOVIE_LIST_DATA } from "@/mocks";

describe("Card", () => {
  const props = MOVIE_LIST_DATA[0];

  test("Should match snapshot", async () => {
    const container = render(<Card {...props} />);

    expect(container).toMatchSnapshot();
  });
});

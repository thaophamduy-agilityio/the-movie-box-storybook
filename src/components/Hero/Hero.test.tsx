// Libs
import { render } from "@testing-library/react";

// Components
import Hero from "./index";

// Constants
import { FEATURED_MOVIE } from "@/constants";

describe("Select", () => {
  const props = {
    heroMovie: FEATURED_MOVIE,
  };

  test("Should match snapshot", async () => {
    const container = render(<Hero {...props} />);

    expect(container).toMatchSnapshot();
  });
});

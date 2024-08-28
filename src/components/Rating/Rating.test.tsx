// Libs
import { render } from "@testing-library/react";

// Components
import Rating from "./index";

describe("Rating", () => {
  const props = {
    reviews: 3.546,
    rating: 3.4,
  };

  it("Should match snapshot for rating reviews less than 1", () => {
    const { container } = render(<Rating {...props} reviews={0.42} />);
    expect(container).toMatchSnapshot();
  });

  it("Should match snapshot for rating reviews great than 1", () => {
    const { container } = render(<Rating {...props} reviews={4} />);
    expect(container).toMatchSnapshot();
  });

  test("Should match snapshot", () => {
    const container = render(<Rating {...props} />);

    expect(container).toMatchSnapshot();
  });
});

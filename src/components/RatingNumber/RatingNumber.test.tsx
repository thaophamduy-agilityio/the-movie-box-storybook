// Libs
import { render } from "@testing-library/react";

// Components
import RatingNumber from "./index";

// Constants
import { VARIANT_RATING } from "@/constants";

describe("RatingNumber", () => {
  const props = {
    children: 4,
  };

  it("Should match snapshot for primary rating number", () => {
    const { container } = render(<RatingNumber>4.2</RatingNumber>);
    expect(container).toMatchSnapshot();
  });

  it("Should match snapshot for secondary rating number", () => {
    const { container } = render(
      <RatingNumber variant={VARIANT_RATING.SECONDARY}>4.2</RatingNumber>,
    );
    expect(container).toMatchSnapshot();
  });

  test("Should match snapshot", () => {
    const container = render(<RatingNumber {...props} />);

    expect(container).toMatchSnapshot();
  });
});

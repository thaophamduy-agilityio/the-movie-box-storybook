// Libs
import { render } from "@testing-library/react";

// Components
import Social from "./index";

// Mocks
import { SOCIAL_SETTING } from "@/mocks";

describe("Social", () => {
  const props = {
    items: SOCIAL_SETTING
  };

  test("Should match snapshot", async () => {
    const container = render(<Social {...props} />);

    expect(container).toMatchSnapshot();
  });
});
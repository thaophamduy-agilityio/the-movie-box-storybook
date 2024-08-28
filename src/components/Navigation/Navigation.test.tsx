// Libs
import { render } from "@testing-library/react";

// Components
import Navigation from "./index";

// Mocks
import { NAVIGATION_SETTING } from "@/mocks";

describe("Navigation", () => {
  const props = {
    items: NAVIGATION_SETTING
  };

  test("Should match snapshot", async () => {
    const container = render(<Navigation {...props} />);

    expect(container).toMatchSnapshot();
  });
});
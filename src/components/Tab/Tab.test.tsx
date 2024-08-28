// Libs
import { render } from "@testing-library/react";

// Components
import Tab from "./index";

describe("Tab", () => {
  const props = {
    label: "Trending",
    children: <p>This is some content for the Trending tab.</p>,
  };

  test("Should match snapshot", () => {
    const container = render(<Tab {...props} />);

    expect(container).toMatchSnapshot();
  });
});

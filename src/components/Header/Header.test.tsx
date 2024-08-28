// Libs
import { render } from "@testing-library/react";

// Components
import Header from "./index";

describe("Select", () => {
  test("Should match snapshot", async () => {
    const container = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});

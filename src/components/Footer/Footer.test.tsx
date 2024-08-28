// Libs
import { render } from "@testing-library/react";

// Components
import Footer from "./index";

describe("Footer", () => {
  test("Should match snapshot", async () => {
    const container = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
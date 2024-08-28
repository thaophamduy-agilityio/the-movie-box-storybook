// Libs
import { render } from "@testing-library/react";

// Components
import LoadingIndicator from "./index";

describe("LoadingIndicator", () => {
  test("Should match snapshot", async () => {
    const container = render(<LoadingIndicator />);

    expect(container).toMatchSnapshot();
  });
});

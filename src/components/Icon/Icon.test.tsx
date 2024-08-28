// Libs
import { fireEvent, render } from "@testing-library/react";

// Components
import Icon from "./index";

describe("Icon", () => {
  const onClick = jest.fn();
  const props = {
    additionalClass: "icon-display-grid",
    onClick: onClick,
  };

  test("Should match snapshot", async () => {
    const container = render(<Icon {...props} />);

    expect(container).toMatchSnapshot();
  });

  it("Calls onClick callback when clicked", () => {
    const { container } = render(<Icon {...props} />);
    const icon = container.getElementsByClassName("icon-display-grid")[0];
    fireEvent.click(icon);

    expect(onClick).not.toHaveBeenCalled();
  });
});

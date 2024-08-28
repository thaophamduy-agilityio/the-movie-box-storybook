// Libs
import { fireEvent, render } from "@testing-library/react";

// Components
import Button from "./index";

// Constants
import { VARIANT_BUTTON } from "@/constants";

describe("Button", () => {
  const onClick = jest.fn();
  const props = {
    children: "Click Me",
    onClick: onClick,
  };

  test("Should match snapshot", async () => {
    const container = render(<Button {...props} />);

    expect(container).toMatchSnapshot();
  });

  it("Should match snapshot for primary button", () => {
    const { container } = render(
      <Button additionalClass="text-md" onClick={onClick}>
        Watch movie
      </Button>,
    );
    expect(container).toMatchSnapshot();
  });

  it("Should match snapshot for secondary button", () => {
    const { container } = render(
      <Button onClick={onClick} variant={VARIANT_BUTTON.SECONDARY}>
        View info
      </Button>,
    );
    expect(container).toMatchSnapshot();
  });

  it("Should match snapshot for text button", () => {
    const { container } = render(
      <Button
        additionalClass="text-md"
        onClick={onClick}
        variant={VARIANT_BUTTON.TEXT}
      >
        + Add to Wishlist
      </Button>,
    );
    expect(container).toMatchSnapshot();
  });

  it("Should match snapshot for icon button", () => {
    const { container } = render(
      <Button onClick={onClick} variant={VARIANT_BUTTON.ICON} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("Calls onClick callback when clicked", () => {
    const { getByText } = render(<Button {...props} />);
    fireEvent.click(getByText("Click Me"));

    expect(onClick).toHaveBeenCalled();
  });
});

// Libs
import { render, screen, fireEvent } from "@testing-library/react";
import { fn } from "@storybook/test";

// Components
import Select from "./index";

// Mocks
import { TAB_SELCET_GENRES } from "@/mocks";

describe("Select", () => {
  const onChange = fn();
  const props = {
    options: TAB_SELCET_GENRES,
    onChange: onChange,
  };

  test("handles change in select", () => {
    render(<Select {...props} />);

    const genre = screen.getByTestId("select");

    // Change to Option 1
    fireEvent.change(genre, { target: { value: "Genre" } });
    expect(genre.children).not.toBe("Action");
  });

  test("Should match snapshot", () => {
    const container = render(<Select {...props} />);

    expect(container).toMatchSnapshot();
  });
});

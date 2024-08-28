// Libs
import { render, screen, fireEvent } from "@testing-library/react";

// Components
import Tabs from "./index";

// Mocks
import { ITEM_TABS_DATA } from "@/mocks";

describe("Tabs", () => {
  const props = {
    children: ITEM_TABS_DATA,
    onClick: jest.fn(),
  };

  test("handles click on tab", () => {
    render(<Tabs {...props} />);

    // Initial state, Tab 1 should be active
    expect(
      screen.getByText("This is some content for the Trending tab."),
    ).toBeVisible();
    expect(
      screen.queryByText("This is some content for the Top Rated tab."),
    ).toBeNull();
    expect(
      screen.queryByText("This is some content for the New Arrivals tab."),
    ).toBeNull();
    expect(
      screen.queryByText("This is some content for the Genre tab."),
    ).toBeNull();

    // Click on Tab 2
    fireEvent.click(screen.getByTestId("tab-1"));
    expect(
      screen.queryByText("This is some content for the Trending tab."),
    ).toBeNull();
    expect(
      screen.getByText("This is some content for the Top Rated tab."),
    ).toBeVisible();
    expect(
      screen.queryByText("This is some content for the New Arrivals tab."),
    ).toBeNull();
    expect(
      screen.queryByText("This is some content for the Genre tab."),
    ).toBeNull();

    // Click on Tab 3
    fireEvent.click(screen.getByTestId("tab-2"));
    expect(
      screen.queryByText("This is some content for the Trending tab."),
    ).toBeNull();
    expect(
      screen.queryByText("This is some content for the Top Rated tab."),
    ).toBeNull();
    expect(
      screen.getByText("This is some content for the New Arrivals tab."),
    ).toBeVisible();
    expect(
      screen.queryByText("This is some content for the Genre tab."),
    ).toBeNull();

    // Click on Tab 4
    fireEvent.click(screen.getByTestId("tab-3"));
    expect(
      screen.queryByText("This is some content for the Trending tab."),
    ).toBeNull();
    expect(
      screen.queryByText("This is some content for the Top Rated tab."),
    ).toBeNull();
    expect(
      screen.queryByText("This is some content for the New Arrivals tab."),
    ).toBeNull();
    expect(
      screen.getByText("This is some content for the Genre tab."),
    ).toBeVisible();
  });

  test("Should match snapshot", () => {
    const container = render(<Tabs {...props} />);

    expect(container).toMatchSnapshot();
  });
});

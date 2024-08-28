import type { Meta, StoryObj } from "@storybook/react";
import Navigation from "./index";
import { NAVIGATION_SETTING } from "@/mocks";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Common/Navigation",
  component: Navigation,
  argTypes: {
    items: {
      description:
        "This is an array include items with a item have type NavigationProps(label: string; href: string;)",
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    items: NAVIGATION_SETTING,
  },
};
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./index";
import { VARIANT_BUTTON } from "@/constants";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Common/Button",
  component: Button,
  argTypes: {
    variant: { description: "Sets the style of the button" },
    additionalClass: { description: "Class name of the button" },
    type: { description: "Type of button" },
    children: { description: "Value of button" },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Watch movie",
    additionalClass: "text-md",
  },
};

export const Secondary: Story = {
  args: {
    children: "View info",
    variant: VARIANT_BUTTON.SECONDARY,
  },
};

export const Text: Story = {
  args: {
    children: "+ Add to Wishlist",
    additionalClass: "text-md",
    variant: VARIANT_BUTTON.TEXT,
  },
};

export const Icon: Story = {
  args: {
    variant: VARIANT_BUTTON.ICON,
  },
};

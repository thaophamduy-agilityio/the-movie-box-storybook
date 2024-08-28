// Libs
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

// Components
import Icon from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Common/Icon",
  component: Icon,
  argTypes: {
    additionalClass: { description: "Additional class of icon" },
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
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DisplayGrid: Story = {
  args: {
    additionalClass: "icon-display-grid",
  },
};
export const DisplayList: Story = {
  args: {
    additionalClass: "icon-display-list",
  },
};
export const Facebok: Story = {
  args: {
    additionalClass: "icon-facebook",
  },
};
export const Pinterest: Story = {
  args: {
    additionalClass: "icon-pinterest",
  },
};
export const Twitter: Story = {
  args: {
    additionalClass: "icon-twitter",
  },
};
export const Instagram: Story = {
  args: {
    additionalClass: "icon-instagram",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import RatingNumber from "./index";
import { VARIANT_RATING } from "@/constants";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Common/RatingNumber",
  component: RatingNumber,
  argTypes: {
    variant: { description: "Sets the style of the rating" },
    children: { description: "Value of rating" },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
} satisfies Meta<typeof RatingNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: 4,
  },
};

export const Primary: Story = {
  args: {
    children: 4.2,
  },
};

export const Secondary: Story = {
  args: {
    children: 3.4,
    variant: VARIANT_RATING.SECONDARY,
  },
};

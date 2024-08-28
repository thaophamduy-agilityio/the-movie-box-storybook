// Libs
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

// Components
import Select from "../Select";

// Mocks
import { TAB_SELCET_GENRES } from "@/mocks";

const onChange = fn();

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Common/Select",
  component: Select,
  argTypes: {
    options: { description: "Option of select" },
    onChange: { description: "onChange of select" },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    options: TAB_SELCET_GENRES,
    onChange: onChange,
  },
};

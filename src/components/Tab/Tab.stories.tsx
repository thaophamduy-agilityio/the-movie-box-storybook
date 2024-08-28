// Libs
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

// Components
import Tab from "./index";
import Select from "../Select";

// Mocks
import { TAB_SELCET_GENRES } from "@/mocks";

const onChange = fn();

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Common/Tab",
  component: Tab,
  argTypes: {
    label: { description: "Label of tab" },
    children: { description: "Content of tab" },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Trending",
    children: <p>This is some content for the Trending tab.</p>,
  },
};

export const Secondary: Story = {
  args: {
    label: <Select options={TAB_SELCET_GENRES} onChange={onChange} />,
    children: <p>This is some content for the Genres tab.</p>,
  },
};

// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import Image from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Common/Image",
  component: Image,
  argTypes: {
    imageSrc: { description: "Source of image" },
    altText: { description: "Alt of image" },
    size: { description: "Size of image" },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    imageSrc: "src/assets/images/movies/logan.webp",
    altText: "Logan",
    size: {
      width: 146,
      height: 185,
    },
  },
};

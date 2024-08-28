// Libs
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

// Components
import ListCard from "./index";

// Mocks
import { MOVIE_LIST_DATA } from "@/mocks";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Common/ListCard",
  component: ListCard,
  argTypes: {
    listCard: {
      description:
        "This is an array include movies with a movie have type ListCardProps(id: number; publicYear?: number; imgSrc: string; title: string; genre: string; rating: number;)",
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
} satisfies Meta<typeof ListCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    listCard: MOVIE_LIST_DATA,
    onChange: fn(),
  },
};

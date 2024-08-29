// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import Card from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Common/Card",
  component: Card,
  argTypes: {
    publicYear: { description: "Public year of movie" },
    imgSrc: { description: "Image source of movie" },
    title: { description: "Title of movie" },
    genres: { description: "Genres of movie" },
    rating: { description: "Rating of movie" },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    publicYear: 2017,
    imgSrc: "/images/movies/logan.webp",
    title: "Logan",
    genres: ["Action", "Adventure", "Fantasy"],
    rating: 4.2,
  },
};

// Libs
import { fn } from "@storybook/test";

// Components
import Select from "@/components/Select";
import Tab from "@/components/Tab";

const onChange = fn();

export const TAB_SELCET_GENRES = [
  "Genre",
  "Action",
  "Adventure",
  "Animation",
  "Fantasy",
  "Drama",
  "Family",
  "Roman",
  "Sci-Fi",
  "Thriller",
];

export const ITEM_TABS_DATA = [
  <Tab
    label="Trending"
    children={<p>This is some content for the Trending tab.</p>}
  />,
  <Tab
    label="Top Rated"
    children={<p>This is some content for the Top Rated tab.</p>}
  />,
  <Tab
    label="New Arrivals"
    children={<p>This is some content for the New Arrivals tab.</p>}
  />,
  <Tab
    label={<Select options={TAB_SELCET_GENRES} onChange={onChange} />}
    children="This is some content for the Genre tab."
  />,
];

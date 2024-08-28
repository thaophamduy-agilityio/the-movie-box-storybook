// Components
import Icon from "@/components/Icon";

// Types
import { ISocial } from "@/types";

export const SOCIAL_SETTING: ISocial[] = [
  {
    id: "facebook",
    icon: <Icon additionalClass="icon-facebook" onClick={(): void => {}} />,
    href: "/",
  },
  {
    id: "pinterest",
    icon: <Icon additionalClass="icon-pinterest" onClick={(): void => {}} />,
    href: "/",
  },
  {
    id: "twitter",
    icon: <Icon additionalClass="icon-twitter" onClick={(): void => {}} />,
    href: "/",
  },
  {
    id: "instagram",
    icon: <Icon additionalClass="icon-instagram" onClick={(): void => {}} />,
    href: "/",
  },
];

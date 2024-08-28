// Types
import { ISocial } from "@/types";

interface SocialProps {
  items: ISocial[];
}

const Social = ({ items }: SocialProps) => {
  return (
    <ul>
      {items.map(({ id, icon, href }) => (
        <li
          key={id}
          className="text-md text-card-genre capitalize inline-block pl-0.5"
        >
          <a aria-label={id} href={href}>
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;

// Types
import { INavigation } from "@/types";

interface NavigationProps {
  items: INavigation[];
}

const Navigation = ({ items }: NavigationProps) => {
  return (
    <ul>
      {items.map(({ label, href }) => (
        <li
          key={label}
          className="text-md text-gray-dark capitalize inline-block pl-4"
        >
          <a aria-label={label} href={href}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;

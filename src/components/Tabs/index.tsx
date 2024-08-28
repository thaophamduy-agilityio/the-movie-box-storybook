// Libs
import { ReactElement, ReactNode, useState } from "react";

// Components
import { Icon } from "@/components";

interface TabsProps {
  children: ReactNode[];
}

const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (id: number): void => {
    setActiveTab(id);
  };

  const handleDisplayMovie = (): void => {
    // Handle display movie as grid or list
  };

  const tabClasses = `tab inline-block cursor-pointer text-gray-dark text-lg capitalize px-4 py-2`;
  const tabActiveClasses = `text-tab-active border-tab-active border-b-2`;

  return (
    <div className="tabs relative">
      <div className="w-full flex justify-between items-center border-b border-tab">
        <ul className="tab-list -mb-px">
          {children.map((child: ReactNode, index: number) => (
            <li
              key={index}
              data-testid={`tab-${index}`}
              className={`${tabClasses} ${index === activeTab ? `${tabActiveClasses}` : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {(child as ReactElement).props.label}
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <Icon
            additionalClass="icon-display-grid active"
            onClick={handleDisplayMovie}
          />
          <Icon
            additionalClass="icon-display-list"
            onClick={handleDisplayMovie}
          />
        </div>
      </div>
      <div className="tab-content mt-3">{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;

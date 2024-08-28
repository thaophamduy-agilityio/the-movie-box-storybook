import { ReactNode } from "react";

interface TabProps {
  label: ReactNode;
  children: ReactNode;
}

const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};

export default Tab;

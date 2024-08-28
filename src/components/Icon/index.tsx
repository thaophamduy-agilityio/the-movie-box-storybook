interface IconProps {
  additionalClass: string;
  onClick: () => void;
}

const Icon = ({ additionalClass }: IconProps) => {
  return (
    <i className={`inline-block w-4 h-4 cursor-pointer ${additionalClass}`} />
  );
};

export default Icon;

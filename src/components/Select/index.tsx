// Select.tsx
import { useState, ChangeEvent } from "react";

interface SelectProps {
  options: string[];
  onChange: (value: string) => void;
}

const Select = ({ options, onChange }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value: string = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <select
      id="genre"
      aria-label="genre"
      data-testid="select"
      className="bg-transparent text-gray-dark text-lg rounded-none outline-0"
      value={selectedOption}
      onChange={handleChange}
    >
      {options.map((option: string, index: number) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;

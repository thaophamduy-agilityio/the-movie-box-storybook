// Libs
import { ReactNode } from "react";

// Constant
import { VARIANT_BUTTON } from "@/constants";
interface ButtonProps {
  variant?:
    | VARIANT_BUTTON.PRIMARY
    | VARIANT_BUTTON.SECONDARY
    | VARIANT_BUTTON.TEXT
    | VARIANT_BUTTON.ICON;
  additionalClass?: string;
  children?: string | ReactNode;
  onClick: () => void;
  type?: "submit" | "reset" | "button";
}

const Button = ({
  additionalClass,
  variant,
  children,
  type = "button",
  onClick,
  ...props
}: ButtonProps) => {
  const renderTypeVariant = (variant: string | undefined) => {
    switch (variant) {
      case VARIANT_BUTTON.SECONDARY:
        return "text-white text-md py-1 px-3.5 mx-1 rounded-sm border border-white uppercase";

      case VARIANT_BUTTON.TEXT:
        return "text-white mx-2 uppercase";

      case VARIANT_BUTTON.ICON:
        return "icon-search mx-1";

      default:
        return "bg-btn text-white py-1 px-3.5 mx-1 rounded-sm border border-transparent uppercase";
    }
  };

  return (
    <button
      aria-label={children === "" ? `search` : `${children}`}
      className={`${renderTypeVariant(variant)} ${additionalClass}`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

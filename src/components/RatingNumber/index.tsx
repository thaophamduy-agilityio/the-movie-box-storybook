// Libs
import { ReactNode } from "react";

// Constant
import { VARIANT_RATING } from "@/constants";

interface RatingNumberProps {
  variant?: VARIANT_RATING.PRIMARY | VARIANT_RATING.SECONDARY;
  children: number | ReactNode;
}

const RatingNumber = ({ variant, children, ...props }: RatingNumberProps) => {
  const renderTypeVariant = (variant: string | undefined) => {
    switch (variant) {
      case VARIANT_RATING.SECONDARY:
        return "text-xs text-white px-0.5 rounded-sm border border-rating self-center";

      default:
        return "text-sm text-pink py-0.5 px-1 rounded-sm border self-center";
    }
  };

  return (
    <span className={renderTypeVariant(variant)} {...props}>
      {children}
    </span>
  );
};

export default RatingNumber;

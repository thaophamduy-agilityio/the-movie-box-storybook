// Components
import { RatingNumber } from "@/components";

// Constant
import { VARIANT_RATING } from "@/constants";

const Rating = ({
  reviews,
  rating,
}: {
  reviews: number | undefined;
  rating: number | undefined;
}) => {
  return (
    <div className="bg-rating rounded border border-rating leading-none inline-block">
      <div className="px-2 pb-1">
        <p>
          <span className="text-white text-md mr-1">Rating</span>
          <span className="text-white text-xs opacity-50">
            based on {reviews} review{reviews && reviews > 1 ? "s" : ""}
          </span>
        </p>
        <div>
          <img
            className="inline-block mr-1.5"
            src="/images/rating-icon.svg"
            width={71}
            height={10}
            alt="star"
          />
          <RatingNumber variant={VARIANT_RATING.SECONDARY} children={rating} />
        </div>
      </div>
    </div>
  );
};

export default Rating;

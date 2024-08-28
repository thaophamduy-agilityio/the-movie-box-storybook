// Components
import { RatingNumber, Image } from "@/components";

// Utils
import { joinString } from "@/utils";

interface CardProps {
  publicYear?: number;
  imgSrc?: string;
  title: string;
  genres: string[];
  rating: number;
}

const Card = ({ publicYear, imgSrc, title, genres, rating }: CardProps) => {
  return (
    <li className="relative bg-white shadow-movie-card cursor-pointer">
      <figure className="relative">
        <Image
          size={{
            width: 146,
            height: 185,
          }}
          imageSrc={imgSrc}
          altText={title}
        />
        <p className="text-lg text-gray absolute left-3 bottom-11">
          {publicYear}
        </p>
        <figcaption className="flex justify-between items-center p-2">
          <div className="mr-2">
            <h2 className="text-card-title text-xl truncate max-w-24 leading-none">
              {title}
            </h2>
            <p className="text-card-genre text-md">{joinString(genres)}</p>
          </div>
          <RatingNumber children={rating} />
        </figcaption>
      </figure>
    </li>
  );
};

export default Card;

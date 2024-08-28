// Components
import { Button, Rating } from "@/components";

// Constant
import { VARIANT_BUTTON } from "@/constants";

// Types
import { MovieInfoData } from "@/types";

interface HeroProps {
  heroMovie: MovieInfoData;
}

const Hero = ({ heroMovie }: HeroProps) => {
  /**
   * Handle on click
   * @param {function} handleOnClick
   */
  const handleOnClick = (): void => {
    // Handle on click here
  };

  const { imgSrc, title, genres, duration, reviews, rating } = heroMovie;

  return (
    <div
      className="relative flex items-end -top-10 h-80 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className="w-full h-80 bg-gradient-to-b absolute top-0 left-0"></div>
      <div className="relative w-full flex justify-between items-end px-10 py-4">
        <div className="hero-info">
          <div className="text-white text-4xl leading-tight uppercase">
            {title}
          </div>
          <div className="flex text-white text-md capitalize opacity-50">
            <div className="movie-genre border border-transparent border-r-white leading-none">
              {genres.map((genre, id) => (
                <span key={id} className="mr-3">
                  {genre}
                </span>
              ))}
            </div>
            <div className="movie-duration ml-3">Duration: {duration}</div>
          </div>
          <div className="flex items-center mt-4">
            <Button additionalClass="text-md" onClick={handleOnClick}>
              Watch movie
            </Button>
            <Button
              additionalClass="opacity-90"
              variant={VARIANT_BUTTON.SECONDARY}
              onClick={handleOnClick}
            >
              View info
            </Button>
            <Button
              additionalClass="text-md opacity-80"
              variant={VARIANT_BUTTON.TEXT}
              onClick={handleOnClick}
            >
              + Add to Wishlist
            </Button>
          </div>
        </div>
        <Rating reviews={reviews} rating={rating} />
      </div>
    </div>
  );
};

export default Hero;

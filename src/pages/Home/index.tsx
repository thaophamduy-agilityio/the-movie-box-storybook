// Libs
import { useEffect, useState } from "react";

// Components
import { Header, Hero, ListCard, Footer } from "@/components";

// Types
import { MovieInfoData } from "@/types";

// Constants
import { FETCH_MESSAGES, FEATURED_MOVIE } from "@/constants";

// Sservices
import { getMovies } from "@/services";

// Styles
import "src/assets/styles/app.css";

const Home = () => {
  const [listMovies, setListMovies] = useState<MovieInfoData[]>([]);
  const [error, setError] = useState("");

  /**
   * Get data from API and set to list movies
   *
   */
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        setListMovies(data || []);
      } catch (err) {
        setError(FETCH_MESSAGES.ERROR);
      }
    };
    fetchMovies();
  }, []);
  /**
   * Handle on change list card
   * @param {function} handleChangeListCard
   */

  const handleChangeListCard = (): void => {
    // Handle on change here
  };

  const heroMovie =
    listMovies.find((item) => item.isHeroMovie === true) || FEATURED_MOVIE;

  return (
    <div className="home-page h-screen">
      <Header />
      <Hero heroMovie={heroMovie} />
      {error && (
        <div className="relative h-10 py-2 px-4 bg-main -top-10">{error}</div>
      )}
      <ListCard listCard={listMovies} onChange={handleChangeListCard} />
      <Footer />
    </div>
  );
};

export default Home;

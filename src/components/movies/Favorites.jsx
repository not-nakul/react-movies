import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import WideContainer from "../UI/WideContainer";
import MovieCard from "./MovieCard";

import classes from "./Favorites.module.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <WideContainer>
      <div className={classes["favorites"]}>
        <Link to="/">
          <button className={classes["back-btn"]}>Go back</button>
        </Link>

        <h1>Your favorites</h1>

        {favorites.length > 0 ? (
          <div className={classes["favorites-container"]}>
            {favorites?.map((movie, index) => (
              <Link to={`/movie/${movie?.Title}`} key={index}>
                <MovieCard
                  title={movie?.Title}
                  poster={movie?.Poster}
                  year={movie?.Year}
                  type={movie?.Type}
                  isTopMovie={true}
                />
              </Link>
            ))}
          </div>
        ) : (
          <p>Seems like you have not added any favorites yet...</p>
        )}
      </div>
    </WideContainer>
  );
}

export default Favorites;

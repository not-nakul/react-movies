import classes from "./MovieCard.module.css";

import heart from "../../assets/heart-icon.png";
import heartFilled from "../../assets/heart-icon-filled.png";

function MovieCard({
  title,
  poster,
  year,
  type,
  movie,
  addToFavorites,
  removeFromFavorites,
  isFavorite,
  isTopMovie = false,
}) {
  return (
    <div className={classes["card-container"]}>
      {!isTopMovie && (
        <>
          {isFavorite ? (
            <button
              className={classes["fav-container"]}
              onClick={(e) => {
                e.preventDefault();
                removeFromFavorites(movie);
              }}
            >
              {<img src={heartFilled} alt="Heart Filled" />}
            </button>
          ) : (
            <button
              className={classes["fav-container"]}
              onClick={(e) => {
                e.preventDefault();
                addToFavorites(movie);
              }}
            >
              {<img src={heart} alt="Heart" />}
            </button>
          )}
        </>
      )}

      <img src={poster} alt={title} className={classes["poster"]} />

      <div className={classes["card-overlay"]}>
        <div className={classes["card-content"]}>
          <h2 className={classes["card-heading"]}>{title}</h2>

          <div className={classes["card-para"]}>
            <p>{year}</p>
            <span>•</span>
            <p>{type?.charAt(0).toUpperCase() + type?.slice(1)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

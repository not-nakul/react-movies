import classes from "./MovieCard.module.css";

function MovieCard({ title, poster, year, type }) {
  return (
    <div className={classes["card-container"]}>
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

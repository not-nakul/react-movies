import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import WideContainer from "../UI/WideContainer";

import classes from "./MovieDetails.module.css";

import starIcon from "../../assets/star-icon.png";
import ShimmerDetails from "../UI/ShimmerDetails";

function MovieDetails() {
  const { title } = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function fetchDetails() {
    setIsLoading(true);

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=c328e87b&t=${title}`
    );
    if (!response.ok) {
      return new Error("Something unexpected happened!");
    }

    const data = await response.json();
    setDetails(data);
    setIsLoading(false);
  }

  useEffect(() => {
    try {
      fetchDetails();
    } catch (err) {
      console.log(err?.message);
    }
  }, [title]);

  return (
    <WideContainer>
      <div className={classes["details-container"]}>
        <Link to="/">
          <button className={classes["back-btn"]}>Go back</button>
        </Link>

        {isLoading ? (
          <div className={classes["details"]}>
            <ShimmerDetails />
          </div>
        ) : (
          <div className={classes["details"]}>
            <img
              src={details?.Poster}
              alt="Poster"
              className={classes["poster"]}
            />

            <div className={classes["details-content"]}>
              <header className={classes["header"]}>
                <div className={classes["title"]}>
                  <h1>{details?.Title}</h1>
                  <span>•</span>
                  <p>{details?.Year}</p>
                  <span>•</span>
                  <div className={classes["rating"]}>
                    <img src={starIcon} alt="Star" />
                    <p>{details?.imdbRating}</p>
                  </div>
                </div>

                <div className={classes["genre-list"]}>
                  {details?.Genre?.split(", ").map((genre, index) => (
                    <div className={classes["genre"]} key={index}>
                      <p>{genre}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p>{details?.Plot}</p>
                </div>
              </header>

              <section>
                <h2>Cast</h2>

                <div className={classes["cast-list"]}>
                  <span>Actors</span>
                  <p>{details.Actors}</p>
                </div>
                <div className={classes["cast-list"]}>
                  <span>Director</span>
                  <p>{details.Director}</p>
                </div>
                <div className={classes["cast-list"]}>
                  <span>Writer</span>
                  <p>{details.Writer}</p>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </WideContainer>
  );
}

export default MovieDetails;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMovies } from "../../utils/use-movies.hook";

import MovieCard from "./MovieCard";

import WideContainer from "../UI/WideContainer";
import ShimmerCard from "../UI/ShimmerCard";

import classes from "./Movies.module.css";

import searchIcon from "../../assets/search-icon.png";

function Movies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);

  function searchHandler(e) {
    const query = e.target.value;
    setSearchQuery(query);
    setCurrentPage(1);
  }

  const { movies, isLoading, totalResults } = useMovies(
    searchQuery,
    currentPage
  );

  const pages = Math.ceil(totalResults / 10);

  function pageHandler(e) {
    const value = e.target.value;
    if (value < 0 || value > pages) return;
    setCurrentPage(value);
  }

  function previousPageHandler() {
    if (currentPage === 1) return;
    setCurrentPage((current) => parseInt(current) - 1);
  }

  function nextPageHandler() {
    if (currentPage === pages) return;
    setCurrentPage((current) => parseInt(current) + 1);
  }

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    const newFavorites = [...favorites, movie];
    setFavorites(newFavorites);
  };

  const removeFromFavorites = (movie) => {
    const newFavorites = favorites.filter(
      (fav) => fav?.imdbID !== movie?.imdbID
    );
    setFavorites(newFavorites);
  };

  const isFavorite = (movie) => {
    return favorites.some((fav) => fav?.imdbID === movie?.imdbID);
  };

  return (
    <WideContainer>
      <div className={classes["input-container"]}>
        <label htmlFor="searchBar">
          <img
            src={searchIcon}
            alt="Search"
            className={classes["search-icon"]}
          />
        </label>
        <input
          type="search"
          id="searchBar"
          placeholder="What are you watching today?"
          value={searchQuery}
          onChange={searchHandler}
          className={classes["search-bar"]}
        />
      </div>

      {searchQuery && !movies && !isLoading && (
        <p className={classes["error-text"]}>
          <span>*</span>No movies found for the specified search, please try
          again!
        </p>
      )}

      {isLoading ? (
        <div className={classes["movies-container"]}>
          {[...Array(10)].map((item, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      ) : (
        <div className={classes["movies-container"]}>
          {movies?.map((movie, index) => (
            <Link to={`/movie/${movie?.Title}`} key={index}>
              <MovieCard
                title={movie?.Title}
                poster={movie?.Poster}
                year={movie?.Year}
                type={movie?.Type}
                movie={movie}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                isFavorite={isFavorite(movie)}
              />
            </Link>
          ))}
        </div>
      )}

      {pages > 0 && (
        <ul className={classes["pagination-container"]}>
          <li>
            <button onClick={previousPageHandler} disabled={currentPage == 1}>
              Previous
            </button>
          </li>

          <li>
            <button onClick={nextPageHandler} disabled={currentPage == pages}>
              Next
            </button>
          </li>

          <li>
            <label>
              Page
              <input
                type="number"
                min="1"
                max={pages}
                value={currentPage}
                onChange={pageHandler}
              />
              <span>out of {pages}</span>
            </label>
          </li>
        </ul>
      )}
    </WideContainer>
  );
}

export default Movies;

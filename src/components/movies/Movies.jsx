import { useState } from "react";
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

  function searchHandler(e) {
    const query = e.target.value;
    setSearchQuery(query);
    setCurrentPage(1);
  }

  const { movies, isLoading, totalResults } = useMovies(
    searchQuery,
    currentPage
  );

  console.log(movies);

  const pages = Math.ceil(totalResults / 10);

  function pageHandler(e) {
    const value = e.target.value;
    if (value < 0 || value > pages) return;
    setCurrentPage(value);
    console.log(value);
  }

  function previousPageHandler() {
    if (currentPage === 1) return;
    setCurrentPage((current) => current - 1);
  }

  function nextPageHandler() {
    if (currentPage === pages) return;
    setCurrentPage((current) => current + 1);
  }

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

      {isLoading ? (
        <div className={classes["movies-container"]}>
          {[...Array(10)].map((item) => (
            <ShimmerCard />
          ))}
        </div>
      ) : (
        <div className={classes["movies-container"]}>
          {movies?.map((movie, index) => (
            <Link to={`/movie/${movie.Title}`}>
              <MovieCard
                key={index}
                title={movie.Title}
                poster={movie.Poster}
                year={movie.Year}
                type={movie.Type}
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

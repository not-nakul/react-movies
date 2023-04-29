import { useState, useEffect } from "react";
import { useDebounce } from "./use-debounce.hook";

export function useMovies(query, page) {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMovies() {
    setIsLoading(true);

    if (query.trim() === "") {
      setMovies([]);
      setTotalResults("");
      setIsLoading(false);
      return;
    }

    if (page === "" || page < 1) {
      setIsLoading(false);
      return;
    }

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=c328e87b&s=${query.trim()}&page=${page}`
    );
    if (!response.ok) {
      return new Error("Something unexpected happened!");
    }

    const data = await response.json();
    setMovies(data?.Search);
    setTotalResults(Number(data?.totalResults));
    setIsLoading(false);
  }

  const debouncedSearch = useDebounce(query, 500);
  useEffect(() => {
    try {
      fetchMovies();
    } catch (err) {
      console.log(err?.message);
    }
  }, [debouncedSearch, page]);

  return { movies, totalResults, isLoading };
}

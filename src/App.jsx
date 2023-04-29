import Header from "./components/header/Header";
import TopMovies from "./components/movies/TopMovies";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <TopMovies />
      <Outlet />
    </>
  );
}

export default App;

import WideContainer from "../UI/WideContainer";
import classes from "./Header.module.css";

import githubLogo from "../../assets/github.png";

function Header() {
  return (
    <header className={classes["header"]}>
      <WideContainer>
        <div className={classes["heading-container"]}>
          <h1 className={classes["heading"]}>React Movies</h1>

          <a
            href="https://github.com/not-nakul/react-movies"
            target="_blank"
            className={classes["nav-link"]}
          >
            <p>Code</p>
            <img src={githubLogo} alt="Github" />
          </a>
        </div>
      </WideContainer>
    </header>
  );
}

export default Header;

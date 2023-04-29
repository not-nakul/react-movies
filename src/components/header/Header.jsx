import WideContainer from "../UI/WideContainer";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes["header"]}>
      <WideContainer>
        <div className={classes["heading-container"]}>
          <h1 className={classes["heading"]}>React Movies</h1>
        </div>
      </WideContainer>
    </header>
  );
}

export default Header;

import classes from "./WideContainer.module.css";

function WideContainer({ children }) {
  return <section className={classes["wide-container"]}>{children}</section>;
}

export default WideContainer;

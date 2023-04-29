import classes from "./ShimmerDetails.module.css";

import dummyPoster from "../../assets/dummy-poster.jpg";

function ShimmerDetails() {
  return (
    <>
      <img
        src={dummyPoster}
        alt="Poster"
        className={classes["shimmer-poster"]}
      />

      <div className={classes["shimmer-content"]}>
        <div className={classes["shimmer-heading"]}></div>
        <div className={classes["shimmer-heading-end"]}></div>
        <div className={classes["shimmer-text"]}></div>
        <div className={classes["shimmer-text"]}></div>
        <div className={classes["shimmer-text"]}></div>
        <div className={classes["shimmer-text"]}></div>
        <div className={classes["shimmer-text"]}></div>
        <div className={classes["shimmer-text"]}></div>
        <div className={classes["shimmer-text-end"]}></div>
      </div>
    </>
  );
}

export default ShimmerDetails;

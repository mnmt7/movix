import React from "react";
import "./style.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const CircleRating = ({ rating }) => {
  return (
    <div className="circular-rating">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
};

export default CircleRating;

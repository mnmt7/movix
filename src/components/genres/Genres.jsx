import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

const Genres = ({ genreIds }) => {
  // console.log(genreIds)
  const { genres } = useSelector((state) => state.home);
  return (
    <div className="genres-container">
      {genreIds?.map(
        (genreId) =>
          genres[genreId] && <span key={genreId}>{genres[genreId]}</span>
      )}
    </div>
  );
};

export default Genres;

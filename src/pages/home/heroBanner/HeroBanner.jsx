import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import "./style.css";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [search, setSearch] = useState("");
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const handleEnterSearch = (event) => {
    if (event.key === "Enter" && search.length > 0) {
      navigate(`/search/${search}`);
    }
  };

  const data = useFetch("/movie/upcoming");
  console.log(data);
  console.log(url.backdrop);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 20);
    const bg = url.backdrop + data?.results?.[0]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  return (
    <div className="hero-banner">
      <img className="hero-img" src={background} />
      <div className="hero-content">
        <span className="hero-welcome">Welcome.</span>
        <span className="hero-description">
          Millions of movies, TV shows to discover. Explore now.
        </span>
        <div className="hero-form">
          <input
            className="hero-input"
            type="text"
            placeholder="Search for a movie or tv show..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyUp={handleEnterSearch}
          />
          <button className="hero-btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

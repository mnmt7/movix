import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import "./style.css";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
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

  // sets a random background image from the list of upcoming movies
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 20);
    const bg = url.backdrop + data?.results?.[randomIndex]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  return (
    <div className="hero-banner">
      <div className="hero-img">
        <Img src={background || ""} />
      </div>
      <div className="hero-opacity-layer" />
      <ContentWrapper>
        <div className="hero-content">
          <div className="hero-welcome">Welcome.</div>
          <div className="hero-description">
            Millions of movies, TV shows to discover. Explore now.
          </div>
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
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;

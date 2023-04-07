import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleEnterSearch = (event) => {
    if (event.key === "Enter" && search.length > 0) {
      navigate(`/search/${search}`);
    }
  };

  const data = useFetch("/movie/upcoming");
  console.log(data)

  return (
    <div className="heroBanner">
      <div className="contentWrapper">
        <img src={background} />
        <p>Welcome</p>
        <p>Millions of movies, TV shows to discover. Explore now.</p>
        <input
          type="text"
          placeholder="Search for a movie or tv show..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyUp={handleEnterSearch}
        />
        <button>Search</button>
      </div>
    </div>
  );
};

export default HeroBanner;

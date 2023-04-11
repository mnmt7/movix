import React, { useState } from "react";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Carousel from "../../../components/carousel/Carousel";

import useFetch from "../../../hooks/useFetch";

const TopRated = () => {
  const options = ["Movies", "TV Shows"];

  const [endpoint, setEndpoint] = useState("movie");

  const data = useFetch(`/${endpoint}/top_rated`);

  const onTabChange = (newTab, i) => {
    console.log("onTabChange");
    setEndpoint(newTab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carousel-section">
      <ContentWrapper>
        <div className="carousel-heading">
          <div className="carousel-title">Top Rated</div>
          <SwitchTabs data={options} onTabChange={onTabChange} />
        </div>
        <Carousel data={data?.results} endpoint={endpoint}/>
      </ContentWrapper>
    </div>
  );
};

export default TopRated;

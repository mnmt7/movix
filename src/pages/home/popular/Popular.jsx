import React, { useState } from "react";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Carousel from "../../../components/carousel/Carousel";

import useFetch from "../../../hooks/useFetch";

const Popular = () => {
  const options = ["Movies", "TV Shows"];

  const [endpoint, setEndpoint] = useState("movie");

  const data = useFetch(`/${endpoint}/popular`);

  const onTabChange = (newTab, i) => {
    console.log("onTabChange");
    setEndpoint(newTab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carousel-section">
      <ContentWrapper>
        <div className="carousel-heading">
          <div className="carousel-title">What's Popular</div>
          <SwitchTabs data={options} onTabChange={onTabChange} />
        </div>
        <Carousel data={data?.results} endpoint={endpoint}/>
      </ContentWrapper>
    </div>
  );
};

export default Popular;

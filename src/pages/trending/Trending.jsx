import React, { useState } from "react";
import SwitchTabs from "../../components/switchTabs/SwitchTabs";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import "./style.css";
import Carousel from "../../components/carousel/Carousel";

import useFetch from "../../hooks/useFetch"

const Trending = () => {
  const options = ["Day", "Week"];

  const [endpoint, setEndpoint] = useState("day");

  const data = useFetch(`/trending/movie/${endpoint}`);

  const [selectedOption, setSelectedOption] = useState("Day");

  const onTabChange = (newTab) => {
    setCurrentTab(newTab);
  };
  return (
    <>
      <ContentWrapper>
        <div className="carousel-heading">
          <div className="carousel-title">Trending</div>
          <SwitchTabs data={options} selectedOption={selectedOption} />
        </div>
        <Carousel data={data?.results} onTabChange={onTabChange} />
      </ContentWrapper>
    </>
  );
};

export default Trending;

// import React from 'react'
// import SwitchTabs from '../../components/switchTabs/SwitchTabs'

// const Trending = () => {
//   return (
//     <div className="carousel-section">
//       trending
//       <ContentWrapper>

//       </ContentWrapper>
//     </div>
//   )
// }

// export default Trending

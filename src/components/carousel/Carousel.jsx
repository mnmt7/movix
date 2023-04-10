import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";

import "./style.css";

const Carousel = ({ data }) => {
  const carouselContainer = useRef();
  console.log(data);

  const { url } = useSelector((state) => state.home);

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth)
        : container.scrollLeft + (container.offsetWidth);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });

    // container.scrollLeft = scrollAmount;

    // const container = carouselContainer.current;
    // container.scrollTo({
    //   behavior: "smooth",
    //   left:
    //     container.scrollLeft +
    //     ((container.offsetWidth + 20) * (dir === "left" ? -1 : 1)),
    // });
  };

  return (
    <div className="carousel-container">
      <div className="carousel-items" ref={carouselContainer}>
        <BsFillArrowLeftCircleFill
          className="left-arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="right-arrow"
          onClick={() => navigation("right")}
        />
        {data?.map((item) => {
          const src = item.poster_path
            ? url.poster + item.poster_path
            : PosterFallback;
          return (
            <div className="carousel-item" key={item.id}>
              <div className="carousel-image">
                <Img src={src} />
              </div>
              <div className="title">{item.title}</div>
              <div className="date">{dayjs(item.release_date).format("MMM D, YYYY")}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Img from "../../../components/lazyLoadImage/Img";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Genres from "../../../components/genres/Genres";

import { PlayIcon } from "../PlayBtn";

import CircleRating from "../../../components/circleRating/CircleRating";
import "./style.scss";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const DetailsBanner = () => {
  const { mediaType, id } = useParams();
  const data = useFetch(`/${mediaType}/${id}`);

  const videosData = useFetch(`/${mediaType}/${id}/videos`);
  // console.log(videosData);
  // console.log(data);

  const trailerId = videosData?.results[0]?.key;

  // console.log(data);
  const { url } = useSelector((state) => state.home);

  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(false);

  // console.log(data?.genres.map((item) => item.id));
  return (
    <div>
      <div className="details">
        <div className="bg-img">
          <Img src={url.backdrop + data?.backdrop_path || ""} />
        </div>
        <ContentWrapper>
          <div className="poster-img">
            <Img src={url.poster + data?.poster_path || ""} />
          </div>
          <div className="details-title"> {data?.original_title}</div>
          <div className="subtitle"> {data?.tagline}</div>
          <Genres genreIds={data?.genres?.map((item) => item.id)} />

          <div className="flex">
            <CircleRating rating={data?.vote_average.toFixed(1)} />

            <div
              className="playbtn"
              onClick={() => {
                setShow(true);
                setVideoId();
              }}
            >
              <PlayIcon />
              <span className="text">Watch Trailer</span>
            </div>
          </div>

          <div style={{ margin: "1.2rem 0 2rem" }}>
            <div style={{ fontSize: "1.45em", marginBottom: "0.7rem" }}>
              Overview
            </div>
            <p>{data?.overview}</p>
          </div>

          <div class="info">
            <div>
              <div>
                <span>Status: </span>
                <span style={{ color: "#ffffff71", whiteSpace: "nowrap" }}>
                  {data?.status}
                </span>
              </div>
              <div>
                <span>Release Date: </span>
                <span style={{ color: "#ffffff71", whiteSpace: "nowrap" }}>
                  {data?.release_date}
                </span>
              </div>
              <div>
                <span>Runtime: </span>
                <span style={{ color: "#ffffff71", whiteSpace: "nowrap" }}>
                  {data?.runtime}
                </span>
              </div>
            </div>
            <div>
              
            </div>
          </div>

          <VideoPopup show={show} videoId={trailerId} setShow={setShow} />
        </ContentWrapper>
      </div>
    </div>
  );
};

export default DetailsBanner;

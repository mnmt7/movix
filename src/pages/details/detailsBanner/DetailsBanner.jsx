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
const DetailsBanner = () => {
  const { mediaType, id } = useParams();
  const data = useFetch(`/${mediaType}/${id}`);

  const videosData = useFetch(`/${mediaType}/${id}/videos`);
  // console.log(videosData);

  const trailerId =  videosData?.results[0]?.key;

  // console.log(data);
  const { url } = useSelector((state) => state.home);

  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(false);

  // console.log(data?.genres.map((item) => item.id));
  return (
    <div>
      <div className="details-banner">
        <div className="poster-img">
          <Img src={url.poster + data?.poster_path || ""} />
        </div>
        <div> {data?.original_title}</div>
        <div> {data?.tagline}</div>
        <Genres genreIds={data?.genres?.map((item) => item.id)} />
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

        <div>Overview</div>
        <p>{data?.overview}</p>

        <div>
          <div>
            <span>Status:</span> {data?.status}
          </div>
          <div>
            <span>Release Date:</span> {data?.release_date}
          </div>
          <div>
            <span>Runtime:</span> {data?.runtime}
          </div>
        </div>

        <VideoPopup show={show} videoId={trailerId} setShow={setShow}/>
      </div>
    </div>
  );
};

export default DetailsBanner;

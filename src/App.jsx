import { useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils.js/api";

import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const url = useSelector((state) => state.home.url);
  const dispatch = useDispatch();

  useEffect(() => {
    getConfigFromApi();
    getGenresFromApi();
  }, []);

  async function getConfigFromApi() {
    const response = await fetchDataFromApi("/configuration");
    const configData = {
      backdrop: response.images.secure_base_url + "original",
      poster: response.images.secure_base_url + "original",
      profile: response.images.secure_base_url + "original",
    };

    dispatch(getApiConfiguration(configData));
  }

  async function getGenresFromApi() {
    const responseTv = await fetchDataFromApi(`/genre/tv/list`);
    const responseMovie = await fetchDataFromApi(`/genre/movie/list`);

    const genresTv = responseTv.genres;
    const genresMovie = responseMovie.genres;

    const genres = {};
    genresTv.map((genre) => {
      genres[genre.id] = genre.name;
    });
    genresMovie.map((genre) => {
      genres[genre.id] = genre.name;
    });

    dispatch(getGenres(genres));
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;

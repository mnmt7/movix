import { useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils.js/api";

import { getApiConfiguration } from "./store/homeSlice";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const url = useSelector((state) => state.home.url);
  const dispatch = useDispatch();

  useEffect(() => {
    apiTesting();
  }, []);

  async function apiTesting() {
    const response = await fetchDataFromApi("/configuration");
    const configData = {
      backdrop: response.images.secure_base_url + "original",
      poster: response.images.secure_base_url + "original",
      profile: response.images.secure_base_url + "original",
    }

    dispatch(getApiConfiguration(configData));
  }
  return ( 
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/search/:query" element={<Home />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
export default App;

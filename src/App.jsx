import { useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils.js/api";

import { getApiConfiguration } from "./store/homeSlice";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  const url = useSelector((state) => state.home.url);
  const dispatch = useDispatch();

  useEffect(() => {
    apiTesting();
  }, []);

  async function apiTesting() {
    const data = await fetchDataFromApi("/movie/popular");
    dispatch(getApiConfiguration(data));
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/search/:query" element={<Home />}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;

import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils.js/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataFromApi(url);
      setData(data);
    };
    fetchData();
  }, [url]);
  return data;
};

export default useFetch;

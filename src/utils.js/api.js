const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  import.meta.env.VITE_APP_TMDB_TOKEN ||
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODQ2MjFiNmE3ZWY3MmFkZTIwYmY5MDg4MWNiNGY3NSIsInN1YiI6IjY0MmZkZDNhNmRlYTNhMDA5NmRiODU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6FxC9dI74WxXT6Tg1Fe9rQiZ596pt113hC3fOVPSBXo";
// const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODQ2MjFiNmE3ZWY3MmFkZTIwYmY5MDg4MWNiNGY3NSIsInN1YiI6IjY0MmZkZDNhNmRlYTNhMDA5NmRiODU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6FxC9dI74WxXT6Tg1Fe9rQiZ596pt113hC3fOVPSBXo";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const response = await fetch(BASE_URL + url, {
      headers,
      // body: JSON.stringify(params),
    });
    const data = await response.json()
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

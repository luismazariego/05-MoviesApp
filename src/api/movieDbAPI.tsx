import axios from "axios";

const movieDbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "ad3cf525794a5e0d197f6170b3b1bdf0",
    language: "en-US",
  },
});

export default movieDbApi;
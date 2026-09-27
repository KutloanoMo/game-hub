import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "db032badd0a743bfb33f01889b9f3670" },
});

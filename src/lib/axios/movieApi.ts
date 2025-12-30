import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});
export const options = {
  method: 'GET',
  url: process.env.NEXT_PUBLIC_MOVIE_DB_API,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_DB_ACCESS_TOKEN}`
  }
};

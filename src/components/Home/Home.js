import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { API_KEY } from "../../common/apis/MovieApiKey";

import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";

  const getMovies = () => {
    movieApi
      .get(`?i=tt3896198&apikey=${API_KEY}&s=${movieText}&type=movie`)
      .then((res) => {
        dispatch(addMovies(res.data));
      });
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;

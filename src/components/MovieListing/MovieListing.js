import React from "react";
import "./MovieListing.scss";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector((state) => state.movies.movies);
  const shows = useSelector((state) => state.movies.shows);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container d-flex flex-wrap">
          {movies.Response === "True" &&
            movies.Search.map((item) => <MovieCard data={item} />)}
          {!movies.Response === "True" && (
            <div className="movies-error">
              <h3> {movies.Error} </h3>
            </div>
          )}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container d-flex flex-wrap">
          {shows.Response === "True" &&
            shows.Search.map((item) => <MovieCard data={item} />)}
          {!shows.Response === "True" && (
            <div className="movies-error">
              <h3> {shows.Error} </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;

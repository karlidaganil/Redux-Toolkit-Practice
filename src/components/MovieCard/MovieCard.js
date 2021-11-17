import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = ({ data }) => {
  return (
    <div className="card-item col-2 mb-3">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner mx-2 h-100">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom p-2">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;

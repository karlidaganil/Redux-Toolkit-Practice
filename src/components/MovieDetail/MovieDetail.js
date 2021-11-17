import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAsyncMovieOrShowDetail } from "../../features/movies/movieSlice";
import { useSelector } from "react-redux";

const MovieDetail = () => {
  const { movieID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movies.selectedMovieOrShow);
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(movieID));
  }, [movieID]);

  return <div>MovieDetail</div>;
};

export default MovieDetail;

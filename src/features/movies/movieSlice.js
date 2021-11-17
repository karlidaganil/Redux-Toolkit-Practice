import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { API_KEY } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "Movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const res = await movieApi.get(
      `?i=tt3896198&apikey=${API_KEY}&s=${movieText}&type=movie`
    );
    return res.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "Movies/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";
    const res = await movieApi.get(
      `?i=tt3896198&apikey=${API_KEY}&s=${seriesText}&type=series`
    );
    return res.data;
  }
);
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "Movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const res = await movieApi.get(`?&apikey=${API_KEY}&i=${id}&Plot=full`);
    return res.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succesfully");
      return {
        ...state,
        movies: payload,
      };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succesfully");
      return {
        ...state,
        shows: payload,
      };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succesfully");
      return {
        ...state,
        selectedMovieOrShow: payload,
      };
    },
  },
});

export const { addMovies } = movieSlice.actions;

export default movieSlice.reducer;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Home from "../src/components/Home/Home";
import MovieDetail from "../src/components/MovieDetail/MovieDetail";
import PageNotFound from "../src/components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:movieID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

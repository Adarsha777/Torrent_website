import React from "react";
import Movies from "../Pages/movies/movies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from "../Pages/categories/categories";
import Header from "../components/header/header";

function Routing(props) {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Movies />} />
          <Route path={"/movies"} element={<Movies />} />
          <Route path={"/categories"} element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;

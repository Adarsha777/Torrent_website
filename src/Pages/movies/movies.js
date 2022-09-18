import React from "react";
import Search from "../../components/search/search";
import MovieCard from "../../components/movies/movieCard";

function Movies(props) {
  const [movies, setMovies] = React.useState([]);
  return (
    <div className={"movies-wrapper"}>
      <Search
        onMoviesSearch={(data) => {
          setMovies(data);
        }}
      />
      {movies?.movies?.map((item) => (
        <MovieCard movie={item} />
      ))}
    </div>
  );
}

export default Movies;

import React from "react";
import { Card } from "@mui/material";

function MovieCard(props) {
  let movie = props?.movie;
  return (
    <Card>
      <img height={100} width={100} src={movie?.background_image} />
      {movie?.title}
    </Card>
  );
}

export default MovieCard;

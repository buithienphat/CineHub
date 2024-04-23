import { imageURL } from "@/lib/contants";
import { Movie } from "@/lib/types";
import React from "react";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  const { backdrop_path, title } = movie;
  return (
    <div className="movie-card group">
      <img
        src={`${imageURL}${backdrop_path}`}
        alt={title}
        className="thumbnail group-hover:scale-105"
      />
      <div className="border"></div>
    </div>
  );
};

export default MovieCard;

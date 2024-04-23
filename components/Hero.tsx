import { fectMovieTrending } from "@/actions/movieData";
import React from "react";
import HeroCard from "./HeroCard";

type Props = {};

const HeroSection = async (props: Props) => {
  const trendingMovie = await fectMovieTrending();
  const randomMovie = Math.floor(Math.random() * trendingMovie.length);
  const heroMovie = trendingMovie[randomMovie];

  return (
    <div>
      <HeroCard heroMovie={heroMovie} />
    </div>
  );
};

export default HeroSection;

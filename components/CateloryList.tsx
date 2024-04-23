import { Movie } from "@/lib/types";
import MovieCard from "./MovieCard";

type Props = {
  title: string;
  movies: Movie[];
};

const CateloryList = ({ title, movies }: Props) => {
  return (
    <div className="category">
      <h2 className="category-title">{title}</h2>
      <div className="movie-list">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default CateloryList;

import { fectListGenres } from "@/actions/movieData";
import CateloryList from "@/components/CateloryList";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Genre } from "@/lib/types";

type Props = {};

const Home = async (props: Props) => {
  const genres = await fectListGenres();
  const example = genres.slice(0, 2);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="all-movies">
        {example.map((genre: Genre) => {
          return (
            <CateloryList
              key={genre.id}
              title={genre.name}
              movies={genre.movies}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

import { imageURL } from "@/lib/contants";
import { Movie } from "@/lib/types";
import { InfoOutlined, PlayCircleOutline } from "@mui/icons-material";
import TextOverview from "./TextOverview";

const HeroCard = ({ heroMovie }: { heroMovie: Movie }) => {
  const { original_title, backdrop_path, title, overview } = heroMovie;

  return (
    <div className="hero">
      <div className="hero-bg">
        <img
          src={`${imageURL}${backdrop_path}`}
          alt={original_title}
          className="hero-bg-image"
        />
        <div className="overlay"></div>
      </div>
      <h1 className="hero-title">{title}</h1>
      <TextOverview overview={overview} />
      <div className="hero-btns">
        <button className="hero-btn">
          <PlayCircleOutline /> Play Now
        </button>
        <button className="hero-btn-outline">
          <InfoOutlined /> More Info
        </button>
      </div>
    </div>
  );
};

export default HeroCard;

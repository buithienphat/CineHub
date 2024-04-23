import { fectListGenres } from "@/actions/movieData";

type Props = {};

const Test = async (props: Props) => {
  const check = await fectListGenres();
  console.log("check", check);
  return <div>Test</div>;
};

export default Test;

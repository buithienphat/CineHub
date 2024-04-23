import getApiResponese from "@/lib/requests";
import { Movie } from "@/lib/types";

export const fectMovieTrending = async () => {
  try {
    const data = await getApiResponese("/trending/movie/week?language=vi");
    if (data) return data.results;
  } catch (error) {
    console.log("error", error);
  }
};

export const fectListGenres = async () => {
  try {
    const data = await getApiResponese("/genre/movie/list");

    for (const genre of data.genres) {
      const data = await getApiResponese(
        `/discover/movie?with_genres=${genre.id}`
      );
      genre.movies = data.results;
    }
    return data.genres;
  } catch (error) {
    console.log("error", error);
  }
};

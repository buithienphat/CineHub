import getApiResponese from "@/lib/requests";

export const fectMovieTrending = async () => {
  try {
    const data = await getApiResponese("/trending/movie/week?language=vi");

    if (data) return data.results;
  } catch (error) {
    console.log("error", error);
  }
};

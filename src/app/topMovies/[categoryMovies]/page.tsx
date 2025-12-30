import React from "react";
import { topMoviesAction } from "../topMoviesAction";
import { convertSymbol } from "@/helper/formatText";
import TopMoviesClient from "@/components/common/TopMoviesClient";

export async function generateMetadata({
  params,
}: {
  params: { categoryMovies: string };
}) {
  const { categoryMovies } = params;
  return {
    title: convertSymbol(categoryMovies),
  };
}
const CategoryMovies = async ({
  params,
}: {
  params: { categoryMovies: string };
}) => {
  const { categoryMovies } = params;
  const { data, error, isError } = await topMoviesAction(categoryMovies, 1);

  return (
    <main className="min-h-screen w-[95%] md:w-[80%] m-auto py-2 md:py-8">
      {isError && <p className="text-center h-[80dvh] text-red-400">{error}</p>}
      <h1 className="font-bold md:text-xl 2xl:text-lg">
        {convertSymbol(categoryMovies)} Movies
        <TopMoviesClient initialMovies={data} category={categoryMovies} />
      </h1>
    </main>
  );
};

export default CategoryMovies;

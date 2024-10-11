import React from "react";
import { topMoviesAction } from "../topMoviesAction";
import { convertSymbol } from "@/helper/formatText";
import GeneralCard from "@/components/common/cards/GeneralCard";
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
const CategoryMovies = async ({ params }: { params: { categoryMovies: string } }) => {
    const { categoryMovies } = params;
    const { data, error, isError } = await topMoviesAction(`${categoryMovies}?language=en-US&page=1`)

    return (
        <main className="min-h-screen w-[95%] md:w-[80%] m-auto py-2 md:py-8">
            {isError && (
                <p className="text-center h-[80dvh] text-red-400">{error}</p>
            )}
            <h1 className="font-bold md:text-xl 2xl:text-lg">{convertSymbol(categoryMovies)} Movies</h1>
            <article className="grid place-items-center gap-2 lg:gap-4 xl:grid-cols-5 lg:grid-cols-4 md::grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 ">
                {data && data.results.map((item) => (
                    <GeneralCard key={item.id} media={item} />
                ))}
            </article>
        </main>
    )
};

export default CategoryMovies;

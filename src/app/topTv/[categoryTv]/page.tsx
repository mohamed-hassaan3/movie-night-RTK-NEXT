import React from "react";
import { topTvAction } from "../topTvAction";
import GeneralCard from "@/components/common/cards/GeneralCard";
import { convertSymbol } from "@/helper/formatText";

export async function generateMetadata({
  params,
}: {
  params: { categoryTv: string };
}) {
  const { categoryTv } = params;
  return {
    title: convertSymbol(categoryTv),
  };
}
/* export async function generateStaticParams({params}: {params: {categoryTv: string}}){
  const {data} = await topTvAction(`${params.categoryTv}`)
  console.log('Data:', data); // Log the data object
  if (data && Array.isArray(data.results)) {
    console.log('Results:', data.results); // Log the results array
    return data.results.map(({ id }) => id);
  } else {
    console.warn('No results found or data is undefined');
    return []; // Return an empty array if data or results are not available
  }
} */
const CategoryTv = async ({ params }: { params: { categoryTv: string } }) => {
  const { categoryTv } = params;
  const { data, isError, error } = await topTvAction(
    `${categoryTv}?language=en-US&page=1`
  );

  return (
    <main className="min-h-screen w-[95%] md:w-[80%] m-auto py-2 md:py-8">
      {isError && <p className="text-center h-[80dvh] text-red-400">{error}</p>}
      <h1 className="font-bold md:text-xl 2xl:text-lg">
        {convertSymbol(categoryTv)} TV
      </h1>
      <article className="grid place-items-center gap-2 lg:gap-4 xl:grid-cols-5 lg:grid-cols-4 md::grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 ">
        {data &&
          data.results.map((item) => (
            <GeneralCard key={item.id} media={item} />
          ))}
      </article>
    </main>
  );
};

export default CategoryTv;

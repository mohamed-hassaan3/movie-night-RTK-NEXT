import React from "react";
import { topPeopleAction } from "../topPeopleAction";
import TopPeopleCard from "@/components/common/cards/TopPeopleCard";

const TopPeople = async ({params}: {params: {peopleCategory: string}}) => {
  const {peopleCategory} = params
  const { data, error, isError } = await topPeopleAction(`${peopleCategory}?language=en-US&page=1`);
// console.log(data.results.map((item) => item.known_for )) 
  return (
    <main className="min-h-screen w-[95%] md:w-[80%] m-auto py-2 md:py-8">
      {isError && <p className="text-center h-[80dvh] text-red-400">{error}</p>}
      <h1 className="font-bold md:text-xl 2xl:text-lg">Top Rated</h1>
      <article className="grid place-items-center gap-2 lg:gap-4 xl:grid-cols-5 lg:grid-cols-4 md::grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 ">
        {data &&
          data.results.map((item) => (
            <TopPeopleCard key={item.id} person={item} />
          ))}
      </article>
    </main>
  );
};

export default TopPeople;

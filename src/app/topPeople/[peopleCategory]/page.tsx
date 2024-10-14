import React from "react";
import { topPeopleAction } from "../topPeopleAction";
import TopPeopleClient from "@/components/common/TopPeopleClient";

const TopPeople = async ({
  params,
}: {
  params: { peopleCategory: string };
}) => {
  const { peopleCategory } = params;
  const { data, isError, error } = await topPeopleAction(peopleCategory, 1);

  return (
    <main className="min-h-screen w-[95%] md:w-[80%] m-auto py-2 md:py-8">
      {isError && <p className="text-center h-[80dvh] text-red-400">{error}</p>}
      <h1 className="font-bold md:text-xl 2xl:text-lg mb-6 lg:mb-3">
        Top Rated
      </h1>
      <TopPeopleClient initialData={data} category={peopleCategory} />
    </main>
  );
};

export default TopPeople;

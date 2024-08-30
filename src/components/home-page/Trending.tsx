import React from "react";
import TrendingCard from "./cards/TrendingCard";
import { TrendingProps } from "@/types";

async function getTrending() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TRENDING_DB_API}/day`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_DB_ACCESS_TOKEN}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed Fetch Data");
  }
  return response.json();
}

const Trending = async () => {
  const trendingData = await getTrending();
  console.log(trendingData.results);
  return (
    <article>
      {trendingData.results.length > 1 ? (
        <div className="flex items-center gap-6 mb-12">
          <h1 className="title">Trending</h1>
          <ul className="flex items-center text-sm border rounded-full *:rounded-full *:text-darkBlue ">
            <li className="has-[:focus]:bg-darkBlue has-[:focus]:text-lightBlue transition-all duration-700">
              <button className="px-6 py-2">Today</button>
            </li>
            <li className="has-[:focus]:bg-darkBlue has-[:focus]:text-lightBlue transition-all duration-700">
              <button className="px-6 py-2">This Week</button>
            </li>
          </ul>
        </div>
      ) : (
        <p className="text-center">No Results Found!</p>
      )}
      <div className="w-full overflow-scroll flex gap-4 items-center m-auto">
        {trendingData?.results &&
          trendingData.results?.map((trending: TrendingProps) => (
            <TrendingCard key={trending.id} trending={trending} />
          ))}
      </div>
    </article>
  );
};

export default Trending;

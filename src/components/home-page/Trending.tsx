"use client";
import React, { useCallback, useEffect, useState } from "react";
import TrendingCard from "./cards/TrendingCard";
import { TrendingProps } from "@/types";
import { getTrending } from "@/app/actions/getTrending";
interface Data {
  results: TrendingProps[];
}
const Trending = () => {
  const [trendingData, setTrendingData] = useState<Data | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const fetchTrending = useCallback(async () => {
    setIsLoading(true);
    const { data, error, isError } = await getTrending();
    if (!isError) {
      setTrendingData(data);
    } else {
      setIsError(true);
      setError(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTrending();
  }, [fetchTrending]);

  return (
    <article>
      {isLoading ? (
        "Loading..."
      ) : trendingData && trendingData.results.length > 1 ? (
        <div className="flex items-center gap-6 mb-2">
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
      {isError && error}
    </article>
  );
};

export default Trending;

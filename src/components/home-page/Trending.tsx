"use client";
import React, { useCallback, useEffect, useState } from "react";
import TrendingCard from "./cards/TrendingCard";
import { Data, TrendingProps } from "@/types";
import { getTrending } from "@/app/actions/getTrending";
import HorizontalCardSkeleton from "../common/HorizontalCardSkeleton";

const Trending = () => {
  const [trendingData, setTrendingData] = useState<Data | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [timeWindow, setTimeWindow] = useState<string>("day");

  const fetchTrending = useCallback(async (timeWindow: string) => {
    setIsLoading(true);
    const { data, error, isError } = await getTrending({ timeWindow });
    if (!isError) {
      setTrendingData(data);
    } else {
      setIsError(true);
      setError(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTrending(timeWindow);
  }, [fetchTrending, timeWindow]);

  const toggleBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = (e.target as HTMLButtonElement).value;
    setTimeWindow(value);
  };

  return (
    <article className="relative">
      {isError ? (
        <p className="text-center h-[80dvh] text-red-400">{error}</p>
      ) : (
        trendingData &&
        trendingData.results.length > 1 && (
          <div className="md:flex items-center gap-6 space-y-2 mb-2">
            <h1 className="title">Trending</h1>
            <ul className="flex items-center text-sm border rounded-full w-fit *:rounded-full *:text-darkBlue ">
              <li>
                <button
                  className={`${
                    timeWindow === "day" && "text-lightBlue bg-darkBlue"
                  } transition-all rounded-full duration-700 px-6 py-2 font-semibold`}
                  value="day"
                  onClick={toggleBtn}
                >
                  Today
                </button>
              </li>
              <li>
                <button
                  className={`${
                    timeWindow === "week" && "text-lightBlue bg-darkBlue"
                  } transition-all rounded-full duration-700 px-6 py-2 font-semibold`}
                  value="week"
                  onClick={toggleBtn}
                >
                  This Week
                </button>
              </li>
            </ul>
          </div>
        )
      )}
      <div className="absolute right-0 bottom-0 h-full w-32 bg-gradient-to-l from-white z-50 to-transparent "></div>
      <div className="w-full overflow-scroll flex gap-4 items-center m-auto pr-12">
        {isLoading && trendingData ? (
          <HorizontalCardSkeleton items={trendingData || []} />
        ) : (
          trendingData?.results &&
          trendingData.results?.map((trending: TrendingProps) => (
            <TrendingCard key={trending.id} trending={trending} />
          ))
        )}
      </div>
    </article>
  );
};

export default Trending;
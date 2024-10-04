import { getPopular } from "@/app/actions/getPopular";
import { Data, TrendingProps } from "@/types";
import React, { useCallback, useEffect, useState } from "react";
import HorizontalCardSkeleton from "../common/HorizontalCardSkeleton";
import TrendingCard from "./cards/TrendingCard";

const Popular = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [popularData, setPopularData] = useState<Data | undefined>();
  const [popularType, setPopularType] = useState("movie");

  const fetchPopular = useCallback(async (type: string) => {
    setIsLoading(true);
    const { data, isError, error } = await getPopular({ type });
    if (!isError) {
      setPopularData(data);
    } else {
      setIsError(true);
      setError(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPopular(popularType);
  }, [fetchPopular, popularType]);

  const toggleBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = (e.target as HTMLButtonElement).value;
    setPopularType(value);
  };

  return (
    <article className="relative">
      {isError ? (
        <p className="text-center h-[80dvh] text-red-400">{error}</p>
      ) : (
        popularData &&
        popularData.results.length > 1 && (
          <div className="md:flex space-y-2 items-center gap-6 mb-2">
            <h1 className="title">What&apos;s Popular</h1>
            <ul className="flex items-center text-sm border rounded-full w-fit *:rounded-full *:text-darkBlue ">
              <li>
                <button
                  className={`${
                    popularType === "movie" && "text-lightBlue bg-darkBlue"
                  } transition-all rounded-full duration-700 px-6 py-2 font-semibold`}
                  value="movie"
                  onClick={toggleBtn}
                >
                  Movie
                </button>
              </li>
              <li>
                <button
                  className={`${
                    popularType === "tv" && "text-lightBlue bg-darkBlue"
                  } transition-all rounded-full duration-700 px-6 py-2 font-semibold`}
                  value="tv"
                  onClick={toggleBtn}
                >
                  On TV
                </button>
              </li>
            </ul>
          </div>
        )
      )}
      <div className="absolute right-0 bottom-0 h-full lg:w-32 w-10 bg-gradient-to-l from-white z-50 to-transparent "></div>
      <div className="w-full overflow-scroll flex gap-4 items-center m-auto pr-12">
        {isLoading && popularData ? (
          <HorizontalCardSkeleton items={popularData || []} />
        ) : (
          popularData?.results &&
          popularData.results?.map((trending: TrendingProps) => (
            <TrendingCard key={trending.id} trending={trending} />
          ))
        )}
      </div>
    </article>
  );
};

export default Popular;
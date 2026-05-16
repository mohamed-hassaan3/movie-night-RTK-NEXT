"use client";
import { getPopular } from "@/components/home-page/popular/getPopular";
import { Data } from "@/types";
import React, { useCallback, useEffect, useState } from "react";
import HorizontalCardSkeleton from "../common/HorizontalCardSkeleton";
import CastCard from "../mediaDetails-page/cards/CastCard";

type TrendingPeopleProps = {
  initialData?: Data;
  initialError?: string;
  initialIsError?: boolean;
};

const TrendingPeople = ({
  initialData,
  initialError = "",
  initialIsError = false,
}: TrendingPeopleProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(initialIsError);
  const [error, setError] = useState(initialError);
  const [popularData, setPopularData] = useState<Data | undefined>(
    initialData
  );
  const [popularType] = useState("person");

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
    if (!popularData) {
      fetchPopular(popularType);
    }
  }, [fetchPopular, popularData, popularType]);

  return (
    <article className="relative">
      {isError ? (
        <p className="text-center h-[80dvh] text-red-400">{error}</p>
      ) : (
        popularData &&
        popularData.results.length > 1 && (
            <h1 className="title mb-6">Trending People</h1>
        )
      )}
      <div className="absolute right-0 bottom-0 h-full lg:w-32 w-10 bg-gradient-to-l from-white to-transparent "></div>
      <div className="w-full overflow-scroll flex gap-4 items-center m-auto pr-12">
        {isLoading && popularData ? (
          <HorizontalCardSkeleton items={popularData || []} />
        ) : (
          popularData?.results &&
          popularData.results?.map((trending: any) => (
            <div key={trending.id} className="pb-12">
              <CastCard cast={trending} />
            </div>
          ))
        )}
      </div>
    </article>
  );
};

export default TrendingPeople;

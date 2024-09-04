import { getPopular } from "@/app/actions/getPopular";
import { Data, TrendingProps } from "@/types";
import React, { useCallback, useEffect, useState } from "react";
import HorizontalCardSkeleton from "../common/HorizontalCardSkeleton";
import PersonCard from "../search-page/cards/PersonCard";
import CastCard from "../mediaDetails-page/cards/CastCard";

const TrendingPeople = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [popularData, setPopularData] = useState<Data | undefined>();
  const [popularType, setPopularType] = useState("person");

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

  return (
    <article>
      {isError ? (
        <p className="text-center h-[80dvh] text-red-400">{error}</p>
      ) : (
        popularData &&
        popularData.results.length > 1 && (
          <div className="flex items-center gap-6 mb-2">
            <h1 className="title">Trending People</h1>
          </div>
        )
      )}
      <div className="w-full overflow-scroll flex gap-4 items-center m-auto">
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

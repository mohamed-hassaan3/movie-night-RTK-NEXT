import React from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import { TrendingProps } from "@/types";
import Skeleton from "react-loading-skeleton";

interface Data {
  results: TrendingProps[];
}
const HorizontalCardSkeleton = ({ items }: { items: Data }) => {
  return (
    <LoadingSkeleton>
      {items &&
        items.results?.map((result: TrendingProps) => (
          <div key={result.id}
          className="min-w-[150px] h-auto my-2 rounded-lg overflow-x-scroll w-[150px] min-h-[225px]">

          <Skeleton
            className="min-w-[150px] h-auto my-2 rounded-lg overflow-x-scroll w-[150px] min-h-[225px]"
            ></Skeleton>
            </div>
        ))}
    </LoadingSkeleton>
  );
};

export default HorizontalCardSkeleton;

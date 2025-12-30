import React from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import { MediaProps } from "@/types";
import Skeleton from "react-loading-skeleton";

interface Data {
  results: MediaProps[];
}
const HorizontalCardSkeleton = ({ items }: { items: Data }) => {
  return (
    <LoadingSkeleton>
      {items &&
        items.results?.map((result: MediaProps) => (
          <div
            key={result.id}
            className="min-w-[150px] h-auto my-2 rounded-lg overflow-x-scroll w-[150px] min-h-[325px]"
          >
            <Skeleton className="min-w-[150px] h-auto my-2 rounded-lg overflow-x-scroll w-[150px] min-h-[310px]"></Skeleton>
          </div>
        ))}
    </LoadingSkeleton>
  );
};

export default HorizontalCardSkeleton;

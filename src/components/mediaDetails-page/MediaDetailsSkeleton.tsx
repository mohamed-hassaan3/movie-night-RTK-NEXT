import React from "react";
import LoadingSkeleton from "../common/LoadingSkeleton";
import Skeleton from "react-loading-skeleton";

const MediaDetailsSkeleton = () => {
  return (
    <LoadingSkeleton>
      <div className="flex flex-col gap-8 opacity-50">
        <Skeleton className="m-auto lg:p-2 w-[95%] lg:w-[80%] h-[60vh]" />
        <Skeleton className="h-[40vh] " />
      </div>
    </LoadingSkeleton>
  );
};

export default MediaDetailsSkeleton;

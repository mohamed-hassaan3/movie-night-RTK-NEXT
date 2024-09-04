import React from "react";
import LoadingSkeleton from "../common/LoadingSkeleton";
import Skeleton from "react-loading-skeleton";

const MediaDetailsSkeleton = () => {
  return (
    <LoadingSkeleton>
      <div className="flex flex-col m-auto gap-8 opacity-50 w-[80%] h-[75dvh] ">
        <Skeleton className="m-auto lg:p-2 w-[95%] lg:w-[80%] h-[40vh]" />
        <Skeleton className="h-[30vh] " />
      </div>
    </LoadingSkeleton>
  );
};

export default MediaDetailsSkeleton;

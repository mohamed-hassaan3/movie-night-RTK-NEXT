import React from "react";
import LoadingSkeleton from "../common/LoadingSkeleton";
import Skeleton from "react-loading-skeleton";

const MediaDetailsSkeleton = () => {
  return (
    <LoadingSkeleton>
      <div className="flex flex-col md:justify-center m-auto gap-8 opacity-50 w-[80%] h-screen ">
        <Skeleton className="m-auto lg:p-2 w-[95%] lg:w-[80%] md:h-[60vh] h-[30vh]" />
        <Skeleton className="md:h-[40vh] h-[30vh] " />
      </div>
    </LoadingSkeleton>
  );
};

export default MediaDetailsSkeleton;
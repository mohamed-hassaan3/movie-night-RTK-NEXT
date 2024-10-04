import React from "react";
import LoadingSkeleton from "../common/LoadingSkeleton";
import Skeleton from "react-loading-skeleton";

const PersonSkeleton = () => {
  return (
    <LoadingSkeleton>
      <div className="opacity-50 md:grid grid-cols-7 grid-rows-2 gap-6 h-screen overflow-y-hidden">
        <div className="col-span-2">
          <Skeleton className="h-[60dvh] " />
        </div>
        <div className="col-span-5 row-span-1">
          <Skeleton className=" h-[40dvh] " />
        </div>
        <div className="row-span-7 col-start-3 col-span-5">
          <Skeleton className=" h-[20dvh] " />
        </div>
      </div>
    </LoadingSkeleton>
  );
};

export default PersonSkeleton;

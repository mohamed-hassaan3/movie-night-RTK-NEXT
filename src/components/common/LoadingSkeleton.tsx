import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = ({
  children
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <SkeletonTheme baseColor={"rgb(1,180,228)"} highlightColor={"rgba(255, 255, 255, .5)"}>
      {children}
    </SkeletonTheme>
  );
};

export default LoadingSkeleton;

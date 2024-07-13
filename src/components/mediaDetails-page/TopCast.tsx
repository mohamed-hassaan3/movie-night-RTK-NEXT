import React from "react";
import CastCard from "./CastCard";

const TopCast = ({ mediaDetails }: { mediaDetails: MediaDetails }) => {
  const truncateCast = mediaDetails.credits?.cast.slice(0, 9);
  console.log("TOP CAST", truncateCast);
  return (
    <div className="">
      <h1 className="font-bold text-xl">Top Billed Cast</h1>
      <div>
        {mediaDetails.credits?.cast.length > 0 &&
          truncateCast.map((cast: any) => (
            <CastCard cast={cast} key={cast.id} />
          ))}
      </div>
    </div>
  );
};

export default TopCast;

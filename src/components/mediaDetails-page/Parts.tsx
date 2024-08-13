import React from "react";
import SearchCard from "../search-page/cards/SearchCard";

const Parts = ({ mediaDetails }: { mediaDetails: MediaDetails }) => {
  const { parts, media_type } = mediaDetails;
  return (
    <>
      {parts && (
        <div className="text-xl font-bold">
          <h1>
            {parts?.length}
            <span className="ml-2">movie{parts.length > 1 ? "s" : ""}</span>
          </h1>
          {parts?.map((part) => (
            <>
              <SearchCard key={part.id} item={part} />
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default Parts;

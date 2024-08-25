import React from "react";
import PartsCard from "./PartsCard";

const Parts = ({ collectionDetails }: { collectionDetails: MediaDetails }) => {
  const { parts } = collectionDetails;
  return (
    <>
      {parts && (
        <div className="text-xl font-bold">
          <h1>
            {parts?.length}
            <span className="ml-2">movie{parts.length > 1 ? "s" : ""}</span>
          </h1>
          {parts?.map((part) => (
              <PartsCard key={part.id} item={part} />
          ))}
        </div>
      )}
    </>
  );
};

export default Parts;

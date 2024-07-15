import React from "react";
import RecommendationCard from "./RecommendationCard";

const Recommendation = ({ mediaDetails }: { mediaDetails: MediaDetails }) => {
  console.log("recommendations", mediaDetails.recommendations?.results);
  const recommendations = mediaDetails.recommendations?.results;
  return (
    <section className="py-6 border-b">
      <h2 className="text-xl font-bold">Recommendation</h2>
      <div className="flex items-center gap-4 overflow-scroll ">
        {recommendations?.length !== 0 &&
          recommendations?.map((recommend) => (
            <RecommendationCard key={recommend.id} recommend={recommend} />
          ))}
      </div>
    </section>
  );
};

export default Recommendation;

import { formatVote } from "@/helper/formatText";
import Image from "next/image";
import React from "react";

const RecommendationCard = ({ recommend }: { recommend: Recommendations }) => {
  const { id, title, vote_average, release_date, backdrop_path } = recommend;
  return (
    <div>
      <div className="">
        <Image
          className="rounded-md min-w-[270px] mb-1"
          src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${backdrop_path}`}
          width={270}
          height={180}
          alt={title}
        />
      </div>
      <div className="[&>*]:text-sm [&>*]:text-nowrap flex justify-between items-center">
        <span className="truncate">{title}</span>
        <span>{`${formatVote(vote_average)}%`}</span>
      </div>
    </div>
  );
};

export default RecommendationCard;

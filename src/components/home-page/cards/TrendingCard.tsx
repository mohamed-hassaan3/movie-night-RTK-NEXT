"use client";
import PercentageBar from "@/components/common/PercentageBar";
import { formatDate } from "@/helper/formatText";
import { TrendingProps } from "@/types";
import Image from "next/image";
import React from "react";

const TrendingCard = ({ trending }: { trending: TrendingProps }) => {
  const { title, backdrop_path, vote_average, release_date } = trending;
  //   console.log("TITLE", Math.round(vote_average * 10));
  return (
    <div className="min-w-[150px] h-auto my-2 *:text-sm">
      <div className="relative ">
        <Image
          className="min-w[150px] min-h-[225px] object-cover my-4 rounded-lg"
          width={150}
          height={225}
          src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${backdrop_path}`}
          alt="img"
        />
        <div className="w-10 aspect-square absolute -bottom-[18px] left-0">
          <PercentageBar percentage={vote_average} />
        </div>
      </div>
      <div className="p-2 w-full h-24">
        <h3 className="font-semibold">{title}</h3>
        <p>{formatDate(release_date)}</p>
      </div>
    </div>
  );
};

export default TrendingCard;

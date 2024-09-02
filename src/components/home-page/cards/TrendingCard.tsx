"use client";
import PercentageBar from "@/components/common/PercentageBar";
import { formatDate } from "@/helper/formatText";
import { TrendingProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TrendingCard = ({ trending }: { trending: TrendingProps }) => {
  const {
    id,
    title,
    backdrop_path,
    poster_path,
    vote_average,
    release_date,
    name,
    first_air_date,
    media_type,
  } = trending;

  return (
    <Link
      href={`/mediaDetails/${media_type ? media_type : "movie"}/${id}`}
      className="min-w-[150px] h-auto my-2 *:text-sm"
    >
      <div className="relative ">
        <Image
          className="min-w[150px] min-h-[225px] object-cover my-4 rounded-lg"
          width={150}
          height={225}
          src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${
            poster_path || backdrop_path
          }`}
          alt="img"
        />
        <div className="w-12 aspect-square absolute -bottom-[18px] left-2">
          <PercentageBar percentage={vote_average} />
        </div>
      </div>
      <div className="p-2 w-full h-24">
        <h3 className="font-semibold">{title || name}</h3>
        <p>{formatDate(release_date || first_air_date)}</p>
      </div>
    </Link>
  );
};

export default TrendingCard;

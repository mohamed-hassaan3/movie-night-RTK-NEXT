"use client";
import { MediaProps } from "@/types";
import React from "react";
import PercentageBar from "../PercentageBar";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/helper/formatText";
import UNKNOWN from '../../../../public/unknown-Img.jpg'

const GeneralCard = ({ media }: { media: MediaProps }) => {
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
  } = media;

  return (
    <Link
      href={`/mediaDetails/${media_type ? media_type : "movie"}/${id}`}
      className="min-w-[180px] h-auto my-2 *:text-sm border rounded-lg shadow-lg"
    >
      <div className="relative ">
        {poster_path || backdrop_path ? (

          <Image
          className="min-w[150px] min-h-[225px] object-fill w-full mb-4 rounded-lg"
          width={150}
          height={225}
          src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${
            poster_path || backdrop_path
          }`}
          alt={name}
          />
        ) : (
          <Image
          className="min-w[150px] min-h-[225px] object-fill w-full mb-4 rounded-lg"
          width={150}
          height={225}
          src={UNKNOWN}
          alt={name}
          />
        )}
        <div className="w-12 aspect-square absolute -bottom-[18px] left-2">
          <PercentageBar percentage={vote_average} />
        </div>
      </div>
      <div className="p-2 w-full h-20">
        <h3 className="font-semibold">{title || name}</h3>
        <p>{formatDate(release_date || first_air_date)}</p>
      </div>
    </Link>
  );
};

export default GeneralCard;

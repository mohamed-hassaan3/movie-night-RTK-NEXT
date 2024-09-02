import { formatVote } from "@/helper/formatText";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendar } from "react-icons/fa";
import UNKNOWN from "../../../../public/unknown-Img.jpg";

const RecommendationCard = ({ recommend }: { recommend: Recommendations }) => {
  const {
    id,
    title,
    vote_average,
    release_date,
    backdrop_path,
    first_air_date,
    name,
    media_type
  } = recommend;
  return (
    <Link href={`/mediaDetails/${media_type ? media_type : "movie"}/${id}`}>
      <figure className="relative group/item  transition-all ease-in-out duration-700">
        {backdrop_path ? (
          <Image
            className="rounded-md min-w-[270px] mb-1"
            src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${backdrop_path}`}
            width={270}
            height={180}
            alt={"title"}
          />
        ) : (
          <Image
            className="rounded-md  h-[150px] min-w-[270px] mb-1"
            src={UNKNOWN}
            width={270}
            height={180}
            alt={"title"}
          />
        )}

        <figcaption className="absolute bottom-0 flex items-center bg-scrollerGrey w-full opacity-0 group-hover/item:opacity-100  transition-opacity duration-700 ">
          <span className="mx-2 py-2">
            <FaCalendar />
          </span>
          {release_date || first_air_date}
        </figcaption>
      </figure>
      <div className="[&>*]:text-sm [&>*]:text-nowrap flex justify-between items-center">
        <span className="truncate">{title || name}</span>
        <span>{`${formatVote(vote_average)}%`}</span>
      </div>
    </Link>
  );
};

export default RecommendationCard;

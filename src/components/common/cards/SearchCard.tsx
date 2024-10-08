import React from "react";
import { CharProps, type SearchItem } from "../../../types/index";
import Image from "next/image";
import UNKNOWN from "../../../../public/unknown-Img.jpg";
import Link from "next/link";

const SearchCard = ({ item }: { item: SearchItem }) => {
  const {
    id,
    name,
    original_name,
    original_title,
    title,
    poster_path,
    overview,
    known_for_department,
    profile_path,
    known_for,
    release_date,
    media_type
  } = item;

  return (
    <div className=" flex gap-4 h-[152px] border rounded-xl shadow-lg">
      <Link
        href={`/mediaDetails/${media_type ? media_type : "movie"}/${id}`}
        className="w-full max-w-[100px] max-h-[150px]"
      >
        {poster_path || profile_path ? (
          <Image
            className=" rounded-tl-xl rounded-bl-xl  max-w-[100px] h-auto object-cover"
            src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${
              poster_path || profile_path
            }`}
            width={100}
            height={100}
            alt={"UNKNOWN"}
          />
        ) : (
          <Image
            className=" max-w-[100px] h-auto object-cover"
            src={UNKNOWN}
            width={100}
            height={100}
            alt={"UNKNOWN"}
          />
        )}
      </Link>
      <div className="flex flex-col justify-between gap-4 py-6 pr-4">
        <h3 className=" font-semibold">
          {name || title || original_name || original_title}{" "}
          <span className="opacity-50 ">
            {`${original_title === title ? "" : `( ${original_title} )`}`}
          </span>
        </h3>
        <p className="opacity-50">{release_date}</p>
        {profile_path && (
          <p>
            {known_for_department}/
            {known_for.map((char: CharProps, i) => (
              <span key={i}>
                {char.name || char.original_title}
                {i < known_for.length - 1 && ","}
              </span>
            ))}
          </p>
        )}
  
        <p className="line-clamp-2 text-sm">{overview}</p>
      </div>
    </div>
  );
};

export default SearchCard;
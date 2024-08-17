import { CharProps, SearchItem } from "@/types";
import Image from "next/image";
import React from "react";
import UNKNOWN from "../../../public/unknown-Img.jpg";
import Link from "next/link";

const PartsCard = ({ item }: { item: SearchItem }) => {
  const {
    id,
    name,
    original_name,
    original_title,
    title,
    poster_path,
    overview,
    profile_path,
    known_for,
    release_date,
    known_for_department,
  } = item;
  return (
    <div className=" flex gap-4 h-[175px] border rounded-xl shadow-lg my-6">
      <Link
        href={`/mediaDetails/${id}`}
        className="w-full max-w-[100px] max-h-[175px]"
      >
        {poster_path || profile_path ? (
          <Image
            className=" rounded-tl-xl rounded-bl-xl w-auto h-full object-cover"
            src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${
              poster_path || profile_path
            }`}
            width={100}
            height={175}
            alt={"UNKNOWN"}
          />
        ) : (
          <Image
            className="w-auto h-auto object-cover"
            src={UNKNOWN}
            width={100}
            height={175}
            alt={"UNKNOWN"}
          />
        )}
      </Link>
      <div className="flex flex-col justify-center text-sm gap-2 py-2 pr-4">
        <h3 className=" font-semibold">
          {name || title || original_name || original_title}{" "}
          <span className="opacity-50 ">
            {`${original_name === name ? "" : `( ${original_name} )`}`}
          </span>
        </h3>
        <p className="opacity-50">{release_date}</p>
        {/*{profile_path && (
          <p>
            {known_for_department}/
            {known_for.map((char: CharProps, i) => (
              <span key={i}>
                {char.name || char.original_title}
                {i < known_for.length - 1 && ","}
              </span>
            ))}
          </p>
        )} */}
        <p className="line-clamp-2 text-sm">{overview}</p>
      </div>
    </div>
  );
};

export default PartsCard;

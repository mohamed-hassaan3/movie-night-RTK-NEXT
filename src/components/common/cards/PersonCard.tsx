import { CharProps, SearchItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CHARACTER from "../../../../public/character.jpg";

const PersonCard = ({ item }: { item: SearchItem }) => {
  const {
    id,
    known_for_department,
    profile_path,
    poster_path,
    original_name,
    original_title,
    title,
    name,
    known_for,
  } = item;
  return (
    <div className="flex items-center gap-4 ">
      <Link
        href={`/person/${id}`}
        className="w-full max-w-[80px] min-h-[80px]"
      >
        {poster_path || profile_path ? (
          <Image
            className="rounded-xl object-cover w-[80px] h-[80px]"
            src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${
              poster_path || profile_path
            }`}
            width={80}
            height={80}
            alt={"UNKNOWN"}
          />
        ) : (
          <Image
            className="rounded-xl w-[80px] h-[80px] object-cover"
            src={CHARACTER}
            width={80}
            height={80}
            alt={"UNKNOWN"}
          />
        )}
      </Link>
      <div className="flex flex-col justify-between gap-0 py-2 pr-4">
          <h3 className=" font-extrabold">
            {name || title || original_name || original_title}{" "}
          </h3>
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
      </div>
    </div>
  );
};

export default PersonCard;
import { TopPeople } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CHARACTER from "../../../../public/character.jpg";
import { loopArr } from "@/helper/formatText";

const TopPeopleCard = ({ person }: { person: TopPeople }) => {
  const { id, known_for, name, profile_path, original_name } = person;
  return (
    <Link href={`/person/${id}`}>
      <figure className="w-[170px] 2xl:w-[250px] min-h-[250px] md:h-[310px] border shadow-md rounded-md overflow-hidden">
        {profile_path ? (
          <Image
            className="w-full h-[175px] object-fill aspect-square rounded-t-md"
            src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${profile_path}`}
            width={100}
            height={100}
            alt={"img"}
          />
        ) : (
          <Image
            className="w-full h-[175px] object-contain aspect-square rounded-t-md"
            src={CHARACTER}
            width={70}
            height={100}
            alt={"img"}
          />
        )}
        <figcaption className="overflow-hidden p-3">
          <h5 className="font-semibold text-sm">
            {name || original_name || null}
          </h5>
          {known_for &&
            known_for.map((act: any) => (
              <small key={act.id} className="text-xs opacity-70">
                {act.original_title || null},
              </small>
            ))}
        </figcaption>
      </figure>
    </Link>
  );
};

export default TopPeopleCard;

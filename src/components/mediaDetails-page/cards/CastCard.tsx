import Image from "next/image";
import React from "react";
import CHARACTER from "../../../../public/character.jpg";
import Link from "next/link";

const CastCard = ({ cast }: { cast: Cast }) => {
  const { character, name, profile_path, id } = cast;

  return (
    <Link href={`/person/${id}`}>
      <figure className="min-w-[170px] min-h-[250px] md:min-h-[265px] border shadow-md rounded-md">
        {profile_path ? (
          <Image
            className="w-full h-[175px] object-fill aspect-square rounded-t-md"
            src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${profile_path}`}
            width={100}
            height={100}
            alt={name || character}
          />
        ) : (
          <Image
            className="w-full h-[175px] object-fill aspect-square rounded-t-md"
            src={CHARACTER}
            width={70}
            height={100}
            alt={"img"}
          />
        )}
        <figcaption className=" p-3">
          <h5 className="font-semibold text-sm">{name || null}</h5>
          <small className="text-xs">{character || null}</small>
        </figcaption>
      </figure>
    </Link>
  );
};

export default CastCard;
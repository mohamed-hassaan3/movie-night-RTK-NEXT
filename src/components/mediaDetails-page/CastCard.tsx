import Image from "next/image";
import React from "react";
import CHARACTER from "../../../public/character.jpg";

const CastCard = ({ cast }: { cast: Cast }) => {
  const { character, name, profile_path } = cast;

  return (
    <figure>
      {profile_path ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${profile_path}`}
          width={70}
          height={100}
          alt={name || "img"}
        />
      ) : (
        <Image src={CHARACTER} width={70} height={100} alt={name || "img"} />
      )}
      <figcaption>
        <h3>{name || null}</h3>
        <small>{character || null}</small>
      </figcaption>
    </figure>
  );
};

export default CastCard;


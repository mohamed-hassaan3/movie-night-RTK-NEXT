import Image from "next/image";
import Link from "next/link";
import React from "react";

const KnownCard = ({ credit }: { credit: Cast }) => {
  return (
    <Link href={`/mediaDetails/${credit.id}`}>
      <figure className="min-w-[150px] min-h-auto border shadow-md rounded-md">
        <Image
          src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${
            credit?.poster_path || credit?.backdrop_path
          }`}
          className="object-cover h-full w-full"
          height={200}
          width={150}
          alt={credit.name}
        />
        <figcaption>{credit.name}</figcaption>
      </figure>
    </Link>
  );
};

export default KnownCard;

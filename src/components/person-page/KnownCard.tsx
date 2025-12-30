import Image from "next/image";
import Link from "next/link";
import React from "react";
import unknown from "../../../public/unknown-Img.jpg";

const KnownCard = ({ credit }: { credit: Cast }) => {
  return (
    <Link href={`/mediaDetails/${credit.media_type ? credit.media_type : "movie"}/${credit.id}`}>
      <figure className="min-w-[130px] h-[195px] border shadow-md rounded-xl">
        {credit?.poster_path || credit?.backdrop_path ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${
              credit?.poster_path || credit?.backdrop_path
            }`}
            className="object-cover h-full w-full rounded-xl"
            height={195}
            width={130}
            alt={"person"}
          />
        ) : (
          <Image
            src={unknown}
            className="object-cover h-full w-full rounded-xl"
            height={195}
            width={130}
            alt={"person"}
          />
        )}
        <figcaption>{credit.name}</figcaption>
      </figure>
    </Link>
  );
};

export default KnownCard;
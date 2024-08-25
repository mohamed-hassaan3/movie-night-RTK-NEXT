import Image from "next/image";
import React from "react";

const CollectionBanner = ({
  collectionDetails,
}: {
  collectionDetails: CollectionDetails;
}) => {
  const { id, backdrop_path, poster_path, overview, name } = collectionDetails;
  return (
    <div className=" relative m-auto !text-sm">
      <section className="md:h-[60vh] w-full">
        <Image
          className="w-full h-full object-cover object-right-top opacity-10 "
          src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${
            backdrop_path ? backdrop_path : poster_path
          }`}
          layout="fill"
          alt="Banner"
        />
        <figure className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 w-[95%] lg:w-[80%] p-4 lg:p-2 flex static md:flex-row flex-col gap-4 md:items-center">
          <Image
            className="shadow-md w-full object-cover min-h-[400px] max-h-[400px] min-w-[300px] max-w-[300px]"
            src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${poster_path}`}
            width={300}
            height={450}
            alt="Banner"
          />
          <figcaption className="flex flex-col p-4 text-start gap-12 overflow-hidden min-w-[70%]">
            <h1 className="md:text-2xl font-extrabold text-start md:mr-12">
              {name}
            </h1>
            {overview && (
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Overview</h3>
                <p>{overview}</p>
              </div>
            )}
          </figcaption>
        </figure>
      </section>
    </div>
  );
};

export default CollectionBanner;

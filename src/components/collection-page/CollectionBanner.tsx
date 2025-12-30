import Image from "next/image";
import React from "react";
import UNKNOWN from '../../../public/unknown-Img.jpg'
const CollectionBanner = ({
  collectionDetails,
}: {
  collectionDetails: CollectionDetails;
}) => {
  const { backdrop_path, poster_path, overview, name } = collectionDetails;
  return (
    <div className=" relative m-auto !text-sm">
      <section className="lg:h-[60vh] w-full">
        <Image
          className="w-full h-full object-cover object-right-top opacity-10 hidden sm:block"
          src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${
            backdrop_path ? backdrop_path : poster_path
          }`}
          layout="fill"
          alt={name}
        />
        <figure className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 w-[95%] lg:w-[80%] p-4 lg:p-2 flex static lg:flex-row flex-col gap-4 lg:items-center">
          {poster_path || backdrop_path ? (
            <Image
              className="m-auto md:m-0 shadow-lg w-full object-cover min-h-[400px] max-h-[400px] min-w-[300px] max-w-[300px]"
              src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${poster_path}`}
              width={300}
              height={450}
              alt={name}
            />
          ) : (
            <Image
              className="m-auto md:m-0 shadow-lg w-full object-cover min-h-[400px] max-h-[400px] min-w-[300px] max-w-[300px]"
              src={UNKNOWN}
              width={300}
              height={450}
              alt={name}
            />
          )}
          <figcaption className="flex flex-col p-4 text-start gap-12 overflow-hidden min-w-[70%]">
            <h1 className="lg:text-2xl font-extrabold text-start lg:mr-12">
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

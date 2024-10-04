import Image from "next/image";
import React, { useState } from "react";
import KnownFor from "./KnownFor";
import unknown from "../../../public/unknown-Img.jpg";
import PersonInfo from "./PersonInfo";
import FilterMovieKey from "./FilterMovieKey";
import FilterMovieList from "./FilterMovieList";

const PersonBanner = ({ personDetails }: { personDetails: PersonDetails }) => {
  const { biography, name, profile_path, credits } = personDetails;
  const [isExpand, setIsExpand] = useState(false);
  const [filterMedia, setFilterMedia] = useState("");
  const paragraphs = biography?.split("\n\n");

  const onFilter = (e: string) => {
    setFilterMedia(e);
  };
  const resetFilter = () => {
    setFilterMedia("");
  };

  return (
    <article className="md:grid justify-center items-start grid-cols-6 gap-4 md:*:text-sm *:text-xs">
      {/* Left Side */}
      <section className=" col-span-2">
        {profile_path !== null ? (
          <Image
            className="object-fill h-[550px] aspect-square md:aspect-[1/1.5] rounded-lg w-full"
            src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${profile_path}`}
            width={300}
            height={300}
            alt="Banner"
          />
        ) : (
          <Image
            className="object-fill h-[550px] aspect-square md:aspect-[1/1.5] rounded-lg col-span-2 w-full"
            src={unknown}
            width={300}
            height={300}
            alt="Banner2"
          />
        )}
        {/* Person INFO Component */}
        <aside className="my-6">
          <PersonInfo personDetails={personDetails} />
        </aside>
      </section>
      {/* Right Side */}
      <section className="col-span-4 grid gap-1">
        <div className=" overflow-hidden space-y-6">
          <h1 className="md:text-3xl text-lg font-bold tracking-wide">
            {name || "Name Not available"}
          </h1>
          {/* BIO */}
          {biography ? (
            <div
              className={`${
                isExpand || biography.slice().length <= 600 ? "h-none" : "h-48"
              } relative md:*:text-sm *:text-xs`}
            >
              <h3 className="text-xl font-bold">Biography</h3>
              {paragraphs.map((paragraph, i: number | string) => (
                <hgroup
                  key={i}
                  className="block font-normal text-sm tracking-tighter mb-4 leading-tight mt-2 "
                >
                  {isExpand ? paragraph : paragraph.slice(0, 600)}
                  {!isExpand && biography?.slice().length >= 600 && (
                    <>
                      <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-l from-white to-transparent"></div>
                      <button
                        onClick={() => setIsExpand(!isExpand)}
                        className=" absolute bottom-0 right-0 pt-4 text-blue-500 font-medium"
                      >
                        Read More
                      </button>
                    </>
                  )}
                </hgroup>
              ))}
            </div>
          ) : (
            <p>
              We don&apos;t have a biography for <strong>{name}</strong>.
            </p>
          )}
        </div>
        {/* KNOWN FOR "MOVIES" */}
        <section className="overflow-x-scroll overflow-y-hidden w-full py-6 mb-8 relative">
          {credits?.cast.length >= 1 ? <KnownFor credits={credits} /> : null}
        </section>
        {/* MOVIES AND DEPARTMENT */}
        <aside>
          <FilterMovieKey
            filterMedia={filterMedia}
            personDetails={personDetails}
            onFilter={onFilter}
            resetFilter={resetFilter}
          />
          <FilterMovieList
            filterMedia={filterMedia}
            personDetails={personDetails}
          />
        </aside>
      </section>
    </article>
  );
};

export default PersonBanner;

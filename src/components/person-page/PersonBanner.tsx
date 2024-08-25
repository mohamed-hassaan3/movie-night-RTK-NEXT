import Image from "next/image";
import React, { useState } from "react";
import KnownFor from "./KnownFor";
import unknown from "../../../public/unknown-Img.jpg";
const PersonBanner = ({ personDetails }: { personDetails: PersonDetails }) => {
  const {
    id,
    biography,
    birthday,
    also_known_as,
    homepage,
    known_for_department,
    name,
    place_of_birth,
    profile_path,
    external_ids,
    credits,
  } = personDetails;
  const [isExpand, setIsExpand] = useState(false);
  const paragraphs = biography?.split("\n\n");

  return (
    <article>
      <section>
        <figure className="grid justify-center items-start grid-cols-6 gap-4">
          {profile_path !== null ? (
            <Image
              className="object-contain aspect-[1/1.5] rounded-lg col-span-2"
              src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${profile_path}`}
              width={300}
              height={300}
              alt="Banner"
            />
          ) : (
            <Image
              className="object-cover aspect-[1/1.5] rounded-lg col-span-2"
              src={unknown}
              width={300}
              height={300}
              alt="Banner2"
            />
          )}
          <figcaption className="col-span-4 grid gap-1">
            <section className=" overflow-hidden space-y-6">
              <h1 className="text-3xl font-bold tracking-wide">
                {name || "Not available"}
              </h1>
              {biography ? (
                <div
                  className={`${
                    isExpand || biography.slice().length <= 600
                      ? "h-none"
                      : "h-48"
                  } relative`}
                >
                  <p className="text-xl font-bold">Biography</p>
                  {paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="block font-normal text-sm tracking-tighter mb-4 leading-tight mt-2 "
                    >
                      {isExpand ? paragraph : paragraph.slice(0, 600)}
                      {!isExpand && biography?.slice().length >= 600 && (
                        <div className="">
                          <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-l from-white to-transparent"></div>
                          <button
                            onClick={() => setIsExpand(!isExpand)}
                            className=" absolute bottom-0 right-0 pt-4 text-blue-500 font-medium"
                          >
                            Read More
                          </button>
                        </div>
                      )}
                    </p>
                  ))}
                </div>
              ) : (<p>We dont have a biography for <strong>{name}</strong>.</p>)}
            </section>
              <section className="overflow-x-scroll overflow-y-hidden w-full py-6 mb-8 relative">
                <KnownFor credits={credits} />
              </section>
          </figcaption>
        </figure>
      </section>
    </article>
  );
};

export default PersonBanner;

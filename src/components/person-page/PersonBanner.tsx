import Image from "next/image";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

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
  const [readMore, setReadMore] = useState<boolean>(false);
  const paragraphs = biography?.split("\n\n");

  console.log(biography);
  console.log(biography?.slice().length);
  return (
    <article>
      <section>
        <figure className="flex items-start gap-6">
          <Image
            className=" object-contain aspect-[1/1.5] rounded-lg"
            src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${profile_path}`}
            width={300}
            height={300}
            alt="Banner"
          />
          <figcaption className="space-y-12  overflow-hidden">
            <h1 className="text-3xl font-bold tracking-wide">
              {name || "Not available"}
            </h1>
            {biography && (
              <>
                <p className="text-xl font-bold">Biography</p>
                <div
                  className={`${
                    readMore ? "h-none" : "h-36"
                  } relative overflow-hidden !mt-0`}
                >
                  {paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="block font-normal text-[16px] mb-4 leading-tight mt-2 "
                    >
                      {readMore ? paragraph : paragraph.slice(0, 600)}
                      {!readMore && biography?.slice().length >= 600 && (
                        <>
                          <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-l from-white to-transparent"></div>
                          <button
                            onClick={() => setReadMore(!readMore)}
                            className=" absolute bottom-0 right-0 p-1 text-blue-500 font-medium"
                          >
                            Read More
                          </button>
                        </>
                      )}
                    </p>
                  ))}
                </div>
              </>
            )}
          </figcaption>
        </figure>
      </section>
      <section>Known For</section>
    </article>
  );
};

export default PersonBanner;

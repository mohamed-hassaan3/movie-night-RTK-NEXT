import Image from "next/image";
import React from "react";

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
  const paragraphs = biography?.split("\n\n");
  console.log(biography);
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
          <figcaption className="space-y-12">
            <h1 className="text-3xl font-bold tracking-wide">
              {name || "Not available"}
            </h1>
            {biography && (
              <p className="text-xl font-bold">
                Biography
                {paragraphs.map((paragraph, i) => (
                  <span
                    key={i}
                    className="block font-normal text-[16px] mb-4 leading-tight mt-2"
                  >
                    {paragraph || "Not available"}
                  </span>
                ))}
              </p>
            )}
          </figcaption>
        </figure>
      </section>
      <section>Known For</section>
    </article>
  );
};

export default PersonBanner;

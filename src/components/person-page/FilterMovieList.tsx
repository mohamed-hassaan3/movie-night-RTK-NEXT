import React from "react";
import { filterList } from "@/helper/filterList";
import { uniqueObject } from "@/helper/uniqueObject";
import Link from "next/link";

const FilterMovieList = ({
  personDetails,
}: {
  personDetails: PersonDetails;
}) => {
  const { combined_credits, known_for_department, media_type } = personDetails;
  const crew = uniqueObject(combined_credits?.crew || []);
  const cast = uniqueObject(combined_credits?.cast || []);
  const production = filterList(crew, "department", "production")
  const directing = filterList(crew, "department", "Directing")
  console.log("FILTER CREW", filterList(crew, "", ""));
  console.log("FILTER CAST", filterList(cast, "", ""));
  // console.log("DEPARTMENT", crew.map((item:any) => item.department));
  console.log("FILTER", production)
  console.log("FILTER2", directing)

  return (
    <div className="space-y-6">
      {/* ACTING DEPARTMENT */}
      <div>
        {known_for_department && (
          <h3 className="font-bold text-xl">
            {known_for_department || "Acting"}
          </h3>
        )}
        <ul className="border shadow-md border-gray-300 p-4 space-y-6 my-4">
          {cast.map((item: Cast) => (
            <li
              key={item.id}
              className="font-semibold text-sm hover:text-lightBlue w-fit"
            >
              <Link
                href={`/mediaDetails/${media_type ? media_type : "movie"}/${
                  item.id
                }`}
              >
                {item.name || item.original_title}
                <span className="block  ml-4 mt-2 font-light">
                  {item.media_type === "tv" && item.episode_count
                    ? `(${item.episode_count} Episode${
                        item.episode_count > 1 ? "s" : ""
                      }) ${item.character && "as"} ${item.character}`
                    : item.character}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* OTHERS DEPARTMENT */}
      <div>
        <ul className="border shadow-md border-gray-300 p-4 space-y-3">
          {production.map((item: any) => (
            <li
              key={item.id}
              className="font-semibold text-sm hover:text-lightBlue w-fit"
            >
              <Link
                href={`/mediaDetails/${media_type ? media_type : "movie"}/${
                  item.id
                }`}
              >
                {item.name || item.original_title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="border shadow-md border-gray-300 p-4 space-y-3">
          {directing.map((item: any) => (
            <li
              key={item.id}
              className="font-semibold text-sm hover:text-lightBlue w-fit"
            >
              <Link
                href={`/mediaDetails/${media_type ? media_type : "movie"}/${
                  item.id
                }`}
              >
                {item.name || item.original_title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterMovieList;

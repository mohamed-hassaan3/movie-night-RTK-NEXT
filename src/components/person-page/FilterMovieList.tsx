import React from "react";
import { filterList } from "@/helper/filterList";
import { uniqueObject } from "@/helper/uniqueObject";
import Link from "next/link";
import { formatDateYearly } from "@/helper/formatText";

const FilterMovieList = ({
  personDetails,
  departmentKey,
}: {
  personDetails: PersonDetails;
  departmentKey: string;
}) => {
  const { combined_credits, known_for_department } = personDetails;
  const crew = uniqueObject(combined_credits?.crew || []);
  const cast = uniqueObject(combined_credits?.cast || []);
  const filterDepartmentKey = [
    ...new Set(crew?.map((item: any) => item.department)),
  ];

  console.log("FILTER CREW", filterList(crew, "", ""));
  console.log("FILTER CAST", filterList(cast, "", ""));

  return (
    <div className="space-y-6">
      {/* ACTING DEPARTMENT */}
      {departmentKey === "" ? (
        <>
          <div>
            {known_for_department && (
              <h3 className="font-bold text-xl">
                {typeof departmentKey === "string" ? "Acting" : departmentKey}
              </h3>
            )}
            <ul className="border shadow-md border-gray-300 p-4 space-y-6 my-4">
              {cast.map((item: Cast) => (
                <li key={item.id}>
                  <Link
                    className="font-semibold text-sm hover:text-lightBlue w-fit"
                    href={`/mediaDetails/${
                      item.media_type ? item.media_type : "movie"
                    }/${item.id}`}
                  >
                    <span className="mr-2 font-extrabold">{formatDateYearly(item.release_date)}</span>
                    {item.name || item.original_title}
                  </Link>
                  <span className="block  ml-4 mt-2 font-light">
                    {item.media_type === "tv" && item.episode_count
                      ? `(${item.episode_count} Episode${
                          item.episode_count > 1 ? "s" : ""
                        }) ${item.character && "as"} ${item.character}`
                      : item.character}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* OTHERS DEPARTMENT */}
          <div>
            {filterDepartmentKey.map((selectedKey: Cast) => (
              <>
                <h3 className="font-bold text-xl">{selectedKey}</h3>
                <ul
                  key={selectedKey.id}
                  className="border shadow-md border-gray-300 p-4 space-y-6 my-4"
                >
                  {filterList(crew, "department", selectedKey).map(
                    (item: Cast) => (
                      <li key={item.id}>
                        <Link
                          className="font-semibold text-sm hover:text-lightBlue w-fit"
                          href={`/mediaDetails/${
                            item.media_type ? item.media_type : "movie"
                          }/${item.id}`}
                        >
                          {item.name || item.original_title}
                        </Link>
                        <span className="opacity-60 block ml-2 mt-1">
                          ...{item.job}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* FILTERED VIEW BASED ON SELECTED DEPARTMENT OR MEDIA TYPE */}
          <h3 className="font-bold text-xl">
            {departmentKey.charAt(0).toUpperCase() + departmentKey.slice(1)}
          </h3>
          <ul className="border shadow-md border-gray-300 p-4 space-y-6 my-4">
            {/* Filter for media type or department */}
            {departmentKey === "movie" || departmentKey === "tv"
              ? filterList(cast, "media_type", departmentKey).map(
                  (item: Cast) => (
                    <li key={item.id}>
                      <Link
                        className="font-semibold text-sm hover:text-lightBlue w-fit"
                        href={`/mediaDetails/${departmentKey}/${item.id}`}
                      >
                        {item.name || item.original_title}
                      </Link>
                      <span className="block ml-4 mt-2 font-light">
                        {item.character}
                      </span>
                    </li>
                  )
                )
              : filterList(crew, "department", departmentKey).map(
                  (item: Cast) => (
                    <li key={item.id}>
                      <Link
                        className="font-semibold text-sm hover:text-lightBlue w-fit"
                        href={`/mediaDetails/${item.media_type || "movie"}/${
                          item.id
                        }`}
                      >
                        {item.name || item.original_title}
                      </Link>
                      <span className="opacity-60 block ml-2 mt-1">
                        ...{item.job}
                      </span>
                    </li>
                  )
                )}
          </ul>
        </>
      )}
    </div>
  );
};

export default FilterMovieList;

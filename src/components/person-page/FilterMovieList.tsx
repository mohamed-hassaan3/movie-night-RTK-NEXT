import React from "react";
import { filterList } from "@/helper/filterList";
import { uniqueObject } from "@/helper/uniqueObject";
import Link from "next/link";
import { filterDate } from "@/helper/formatText";

const FilterMovieList = ({
  personDetails,
  filterMedia,
}: {
  personDetails: PersonDetails;
  filterMedia: string;
}) => {
  const { combined_credits, known_for_department, media_type } = personDetails;
  
  const crew = [...new Set(combined_credits?.crew)];
  const cast = uniqueObject(combined_credits?.cast || []);
  const department = [
    ...new Set(crew.map((item: Cast) => item.department.trim().toLowerCase())),
  ];

  const sortCast = cast.sort(function (a: any, b: any) {
    if (cast.length === 0) return;
    return (
      new Date(b.release_date || b.first_air_date).getFullYear() -
      new Date(a.release_date || a.first_air_date).getFullYear()
    );
  });

  return (
    <div className="mb-4 space-y-6">
      {/* ACTING DEPARTMENT */}
      {filterMedia.toLowerCase() === "movie" ||
      filterMedia.toLowerCase() === "tv" ||
      filterMedia === "" ? (
        <div>
          <h3 className="font-bold text-lg">
            {filterMedia || known_for_department}
          </h3>
          <ul className="border shadow-md border-gray-300 p-4 space-y-6 mt-2">
            {filterList(sortCast, "media_type", filterMedia.toLowerCase()).map(
              (item: any) => (
                <li key={item.id} className="flex gap-4 items-baseline">
                  <span>
                    {item.release_date || item.first_air_date
                      ? filterDate(item.release_date || item.first_air_date)
                      : "___"}
                  </span>
                  <input
                    className=" accent-black cursor-pointer"
                    type="radio"
                    name="movie"
                  />
                  <Link
                    href={`/mediaDetails/${media_type ? media_type : "movie"}/${
                      item.id
                    }`}
                  >
                    <p className="hover:text-lightBlue">
                      {item.name || item.original_title}
                    </p>
                    <span className="block opacity-90 ml-4">
                      {item.media_type === "tv" && item.episode_count
                        ? `(${item.episode_count} Episode${
                            item.episode_count > 1 ? "s" : ""
                          }) ${item.character && "as"} ${item.character}`
                        : item.character}
                    </span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      ) : (
        ""
      )}

      {/* OTHERS DEPARTMENT */}
      {filterMedia.toLowerCase() === "movie" ||
      filterMedia.toLowerCase() === "tv" ? (
        ""
      ) : filterMedia ? (
        <>
          <h3 className="font-bold text-lg">
            {filterMedia.charAt(0).toUpperCase() + filterMedia.slice(1)}
          </h3>
          <ul className="border shadow-md border-gray-300 p-4">
            {filterList(crew, "department", filterMedia).map((item: any) => (
              <li key={item.id} className="py-3">
                <Link
                  className="hover:text-lightBlue "
                  href={`/mediaDetails/${media_type ? media_type : "movie"}/${
                    item.id
                  }`}
                >
                  {item.name || item.original_title}
                </Link>
              </li>
            ))}
          </ul>{" "}
        </>
      ) : (
        department.map((item: any) => (
          <div key={item}>
            <h3 className="font-bold text-lg">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </h3>
            <ul className="border shadow-md border-gray-300 p-4">
              {filterList(crew, "department", item).map((item: any) => (
                <li key={item.id} className="py-3">
                  <Link
                    className="hover:text-lightBlue "
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
        ))
      )}
    </div>
  );
};

export default FilterMovieList;

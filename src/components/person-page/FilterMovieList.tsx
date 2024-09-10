import React, { Fragment } from "react";
import { filterList } from "@/helper/filterList";
import { uniqueObject } from "@/helper/uniqueObject";

const FilterMovieList = ({
  personDetails,
}: {
  personDetails: PersonDetails;
}) => {
  const { combined_credits, known_for_department } = personDetails;
  const crew = uniqueObject(combined_credits?.crew || []);
  const cast = uniqueObject(combined_credits?.cast || []);
  console.log("FILTER CREW", filterList(crew, "", ""));
  console.log("FILTER CAST", filterList(cast, "", ""));
  return (
    <div className="my-4 space-y-6">
      {/* ACTING DEPARTMENT */}
      <div>
        {known_for_department && (
          <h3 className="font-bold text-lg">
            {known_for_department || "Acting"}
          </h3>
        )}
        <ul className="border shadow-md border-gray-300 p-4 space-y-6">
          {cast.map((item: Cast) => (
            <li key={item.id}>
              {item.name || item.original_title}
              <span className="block opacity-90 ml-4">
                {item.media_type === "tv" && item.episode_count
                  ? `(${item.episode_count} Episode${item.episode_count > 1 ? "s" : ""}) ${item.character && "as"} ${
                      item.character
                    }`
                  : item.character}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* OTHERS DEPARTMENT */}
      {crew.map((item: Cast) => (
        <div key={item.id}>
          <h3 className="font-bold text-lg">{item.department}</h3>
          <ul className="border shadow-md border-gray-300 p-4 space-y-3">
            <li>{item.name || item.original_title}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FilterMovieList;

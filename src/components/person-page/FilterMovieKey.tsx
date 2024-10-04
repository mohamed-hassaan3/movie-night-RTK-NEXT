"use client";
import { filterList } from "@/helper/filterList";
import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const FilterMovieKey = ({
  personDetails,
  onFilter,
  filterMedia,
  resetFilter,
}: {
  personDetails: PersonDetails;
  onFilter: (e: string) => void;
  filterMedia: string;
  resetFilter: () => void;
}) => {
  const refAll = useRef<any | null>(null);
  const refDepartment = useRef<any | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const crew = personDetails.combined_credits?.crew || [];
  const cast = personDetails.combined_credits?.cast || [];

  const crewDepartment = [...new Set(crew.map((item) => item.department))];
  const castDepartment = [
    ...new Set(cast?.map((item) => item.media_type?.toUpperCase())),
  ];

  const toggleMenu = (menu: string) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (
        activeMenu == "all" &&
        refAll.current &&
        !refAll.current.contains(e.target as Node)
      ) {
        setActiveMenu(null);
      }

      if (
        activeMenu === "department" &&
        refDepartment.current &&
        !refDepartment.current.contains(e.target as Node)
      ) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeMenu]);

  return (
    <div className="float-right z-50">
      <div className="flex items-center lg:gap-12 gap-6">
        {filterMedia && (
          <button
            className="font-extra-light text-sm text-lightBlue hover:opacity-60 text-nowrap"
            onClick={resetFilter}
          >
            Reset Filter
          </button>
        )}
        <div className="relative">
          <p
            onClick={() => toggleMenu("all")}
            className={`${
              filterList(cast, "department", "").length === 0
                ? "opacity-30 cursor-default"
                : "cursor-pointer hover:opacity-95"
            }`}
          >
            All
            <span className="ml-2 text-lg inline-block">
              <FaCaretDown />
            </span>
          </p>
          <ul
            ref={refAll}
            className={`border shadow-md py-2 px-4 space-y-2 absolute top-8 left-0 *:w-fit w-36 *:whitespace-nowrap bg-white z-50 ${
              activeMenu !== "all" && "hidden"
            }`}
          >
            {castDepartment.map((item: any) => (
              <li
                key={item}
                onClick={() => {
                  toggleMenu(item), onFilter(item);
                }}
              >
                <button>
                  {item}{" "}
                  <span className="pl-1 opacity-70 font-semibold">
                    {filterList(cast, "media_type", item).length}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <p
            onClick={() => setActiveMenu("department")}
            className={`${
              filterList(crew, "department", "").length === 0
                ? "opacity-30 cursor-default"
                : "cursor-pointer hover:opacity-95"
            }`}
          >
            Department
            <span className="ml-2 text-lg inline-block">
              <FaCaretDown />
            </span>
          </p>
          {filterList(crew, "department", "").length >= 1 && (
            <ul
              ref={refDepartment}
              className={`border shadow-md py-2 px-4 space-y-2 absolute left-0 top-8 *:w-fit w-36 *:whitespace-nowrap bg-white z-50 ${
                activeMenu !== "department" && "hidden"
              }`}
            >
              {cast.length >= 1 && (
                <button
                  onClick={() => {
                    toggleMenu("acting"), onFilter("");
                  }}
                >
                  {personDetails?.known_for_department}{" "}
                  <span className="pl-1 opacity-70 font-semibold">
                    {filterList(cast, "", "").length}
                  </span>
                </button>
              )}
              {crewDepartment.map((item: any) => (
                <li
                  key={item}
                  onClick={() => {
                    toggleMenu(item), onFilter(item);
                  }}
                >
                  <button>
                    {item}{" "}
                    <span className="pl-1 opacity-70 font-semibold">
                      {filterList(crew, "department", item).length}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterMovieKey;

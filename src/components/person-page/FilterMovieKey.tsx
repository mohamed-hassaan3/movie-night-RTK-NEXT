"use client";
import { filterList } from "@/helper/filterList";
import { uniqueObject } from "@/helper/uniqueObject";
import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const FilterMovieKey = ({
  personDetails,
  onDepartmentFilter,
  departmentKey,
}: {
  personDetails: PersonDetails;
  onDepartmentFilter: any;
  departmentKey: string;
}) => {
  const refAll = useRef<any | null>(null);
  const refDepartment = useRef<any | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const crew = personDetails?.combined_credits?.crew || [];
  const cast = personDetails?.combined_credits?.cast || [];

  const filterDepartmentKey = [
    ...new Set(crew?.map((item) => item.department)),
  ];

  const toggleMenu = (menu: string) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  console.log("SELECTED DEPARTMENT", departmentKey);
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
    <div className=" float-right">
      <div className="flex items-center gap-12">
        {/* ALL Filter */}
        <div className="relative">
          <p
            onClick={() => toggleMenu("all")}
            className="cursor-pointer hover:opacity-95"
          >
            All
            <span className="ml-2 text-lg inline-block">
              <FaCaretDown />
            </span>
          </p>
          <ul
            ref={refAll}
            className={`bg-white border shadow-md py-2 px-4 space-y-2 absolute top-7 left-0 *:w-fit w-36 *:whitespace-nowrap ${
              activeMenu !== "all" && "hidden"
            }`}
          >
            <li
              onClick={() => {
                toggleMenu("all"), onDepartmentFilter("movie");
              }}
            >
              <button>
                Movies
                <span className="opacity-60 ml-2">
                  {filterList(uniqueObject(cast), "media_type", "movie").length}
                </span>
              </button>
            </li>
            <li
              onClick={() => {
                toggleMenu("all"), onDepartmentFilter("tv");
              }}
            >
              <button>
                TV Shows
                <span className="opacity-60 ml-2">
                  {filterList(uniqueObject(cast), "media_type", "tv").length}
                </span>
              </button>
            </li>
          </ul>
        </div>
        {/* Department Filter */}
        <div className="relative">
          <p
            onClick={() => setActiveMenu("department")}
            className="cursor-pointer hover:opacity-95"
          >
            Department
            <span className="ml-2 text-lg inline-block">
              <FaCaretDown />
            </span>
          </p>
          <ul
            ref={refDepartment}
            className={`bg-white border shadow-md py-2 px-4 space-y-2 absolute left-0 top-7 *:w-fit w-36 *:whitespace-nowrap ${
              activeMenu !== "department" && "hidden"
            }`}
          >
            <li
              onClick={() => {
                toggleMenu("department"), onDepartmentFilter("");
              }}
            >
              <button>
                Acting
                <span className="opacity-60 ml-2">
                  {filterList(cast, "media_type", "").length}
                </span>
              </button>
            </li>
            {filterDepartmentKey &&
              filterDepartmentKey.map((department) => (
                <li
                  key={department}
                  onClick={() => {
                    toggleMenu("department"), onDepartmentFilter(department);
                  }}
                >
                  <button>
                    {department}
                    <span className="opacity-60 ml-2">
                      {filterList(uniqueObject(crew), "department", department).length}
                    </span>
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterMovieKey;

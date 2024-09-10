"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const FilterMovieKey = ({
  personDetails,
}: {
  personDetails: PersonDetails;
}) => {
  const { known_for_department } = personDetails;
  const refAll = useRef<any | null>(null);
  const refDepartment = useRef<any | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

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
    <div>
      <div className="flex items-center gap-12">
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
            className={`border shadow-md py-2 px-4 space-y-2 absolute top-7 left-0 *:w-fit w-36 *:whitespace-nowrap ${
              activeMenu !== "all" && "hidden"
            }`}
          >
            <li onClick={() => toggleMenu("all")}>
              <button>Movies</button>
            </li>
            <li onClick={() => toggleMenu("all")}>
              <button>TV Shows</button>
            </li>
          </ul>
        </div>
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
            className={`border shadow-md py-2 px-4 space-y-2 absolute left-0 top-7 *:w-fit w-36 *:whitespace-nowrap ${
              activeMenu !== "department" && "hidden"
            }`}
          >
            {/* {Object.keys()} */}
            <li onClick={() => toggleMenu("department")}>
              <button>Acting</button>
            </li>
            <li onClick={() => toggleMenu("department")}>
              <button>Production</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterMovieKey;

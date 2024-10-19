"use client";
import Image from "next/image";
import Link from "next/link";
import LOGO from "../../../public/logo.png";
import { FaSearch } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Form from "./Form";
import useSearchQuery from "@/hooks/useSearchQuery";
import useClickOutside from "@/hooks/useClickOutside";

const Header = () => {
  let [isMenu, setIsMenu] = useState<string | null>(null);
  const [isSearch, setIsSearch] = useState(false);
  const { searchTerm, handleChange, handleSubmit } = useSearchQuery();
  const refInput = useRef<HTMLInputElement | null>(null);
  const refMovies = useRef(null);
  const refTv = useRef(null);
  const refPeople = useRef(null);

  useClickOutside(refMovies, () => setIsMenu(null));
  useClickOutside(refTv, () => setIsMenu(null));
  useClickOutside(refPeople, () => setIsMenu(null));

  const toggleMenu = (menu: string) => {
    setIsMenu((prev) => (prev === menu ? null : menu));
  };
  const closeMenu = () => setIsMenu(null);

  const toggleSearch = () => {
    setIsSearch(!isSearch);
  };

  const onSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    handleSubmit()
    toggleSearch()
  }

  useEffect(() => {
    if (isSearch) {
      refInput.current?.focus();
    } else if (!isSearch) {
      refInput.current;
    }
  }, [isSearch]);

  return (
    <div className="md:w-[95%] lg:w-[68%] m-auto flex items-center justify-between gap-4">
      <Link href="/">
        <Image src={LOGO} width={50} height={50} alt="LOGO" />
      </Link>
      <ul className="flex items-center flex-1 gap-8 *:text-xs *:md:text-sm *:2xl:text-md">
        <li className="group relative">
          <button onClick={() => toggleMenu("movies")}>Movies</button>
          {isMenu === "movies" && (
            <ul
              ref={refMovies}
              className="absolute top-8 font-light *:px-10 *:py-2 bg-white text-black *:font-semibold text-nowrap rounded-md z-50"
            >
              <li onClick={closeMenu} className="hover:bg-slate-100 rounded-md">
                <Link href={`/topMovies/${(isMenu = "popular")}`}>Popular</Link>
              </li>
              <li onClick={closeMenu} className="hover:bg-slate-100 rounded-md">
                <Link href={`/topMovies/${(isMenu = "now_playing")}`}>
                  Now Playing
                </Link>
              </li>
              <li onClick={closeMenu} className="hover:bg-slate-100 rounded-md">
                <Link href={`/topMovies/${(isMenu = "upcoming")}`}>
                  Upcoming
                </Link>
              </li>
              <li onClick={closeMenu} className="hover:bg-slate-100 rounded-md">
                <Link href={`/topMovies/${(isMenu = "/top_rated")}`}>
                  Top Rated
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="text-nowrap relative">
          <button onClick={() => toggleMenu("tv")}>TV Shows</button>
          {isMenu === "tv" && (
            <ul
              ref={refTv}
              className="absolute top-8 font-light *:px-10 *:py-2 bg-white text-black text-nowrap rounded-md z-50 *:font-semibold"
            >
              <li
                onClick={closeMenu}
                className="hover:bg-slate-100 rounded-md "
              >
                <Link href={`/topTv/${(isMenu = "/popular")}`}>Popular</Link>
              </li>
              <li
                onClick={closeMenu}
                className="hover:bg-slate-100 rounded-md "
              >
                <Link href={`/topTv/${(isMenu = "/airing_today")}`}>
                  Airing Today
                </Link>
              </li>
              <li
                onClick={closeMenu}
                className="hover:bg-slate-100 rounded-md "
              >
                <Link href={`/topTv/${(isMenu = "/on_the_air")}`}>On Tv</Link>
              </li>
              <li
                onClick={closeMenu}
                className="hover:bg-slate-100 rounded-md "
              >
                <Link href={`/topTv/${(isMenu = "/top_rated")}`}>Top Rated</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="group/title text-nowrap relative">
          <button onClick={() => toggleMenu("people")}>People</button>
          {isMenu === "people" && (
            <ul
              ref={refPeople}
              className="w-fit absolute top-8 font-light *:px-10 *:py-2 bg-white text-black text-nowrap rounded-md z-50 *:font-semibold"
            >
              <li onClick={closeMenu} className="hover:bg-slate-100 rounded-md">
                <Link href={`/topPeople/${(isMenu = "/popular")}`}>Popular People</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <div className="flex items-center">
        {isSearch && (
          <Form
            onSubmit={onSubmit}
            className={`${
              isSearch && "opacity-100 "
            } flex items-center mr-2 absolute -left-1/2 top-[82px] z-50 translate-x-1/2 w-full opacity-0 transition-opacity duration-700`}
          >
            <input
              className="border-b border-b-sky-700 text-[16px] outline-none p-1 w-full text-gray-500 italic focus:border-b-sky-500 rounded-md shadow-sm font-light px-1 placeholder:text-xs placeholder:font-thin"
              type="text"
              name="search"
              ref={refInput}
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search for a Movie, TV show, person"
            />
          </Form>
        )}
        <div
          onClick={toggleSearch}
          className="cursor-pointer *:text-lg text-lightBlue active:text-white transition duration-500"
        >
          {isSearch ? <span>&times;</span> : <FaSearch />}
        </div>
      </div>
    </div>
  );
};

export default Header;

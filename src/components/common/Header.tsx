"use client";
import Image from "next/image";
import Link from "next/link";
import LOGO from "../../../public/logo.png";
import { FaSearch } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Form from "./Form";
import useSearchQuery from "@/hooks/useSearchQuery";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const { searchTerm, handleChange, handleSubmit } = useSearchQuery();
  const refInput = useRef<HTMLInputElement | null>(null);

  const toggleSearch = () => {
    setIsSearch(!isSearch);
  };

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
      <ul className="flex items-center flex-1 gap-8 *:text-xs *:md:text-sm *:2xl:text-lg">
        <li className="group relative">
          <Link href="">Movies</Link>
          <ul className=" hidden group-hover:block absolute top-8 font-light space-y-4 bg-white text-black py-4 px-10 text-nowrap rounded-md z-10">
            <li className="hover:bg-slate-300">
              <Link href="">Popular</Link>
            </li>
            <li className="hover:bg-slate-300">
              <Link href="">Now Playing</Link>
            </li>
            <li className="hover:bg-slate-300">
              <Link href="">Upcoming</Link>
            </li>
            <li className="hover:bg-slate-300">
              <Link href="">Top Rated</Link>
            </li>
          </ul>
        </li>
        <li className="group/title text-nowrap relative">
          <Link href="">TV Shows</Link>
          <ul className=" *:hover:bg-slate-300 invisible group-hover/title:visible absolute top-8 font-light space-y-4 bg-white text-black py-4 px-10 text-nowrap rounded-md z-10">
            <li>
              <Link href="">Popular</Link>
            </li>
            <li>
              <Link href="">Airing Today</Link>
            </li>
            <li>
              <Link href="">On Tv</Link>
            </li>
            <li>
              <Link href="">Top Rated</Link>
            </li>
          </ul>
        </li>
        <li className="group/title text-nowrap relative">
          <Link href="">People</Link>
          <ul className="w-fit *:hover:bg-slate-300 invisible group-hover/title:visible absolute top-8 font-light space-y-4 bg-white text-black py-4 px-10 text-nowrap rounded-md z-10">
            <li>
              <Link href="">Popular People</Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className="flex items-center">
        {isSearch && (
          <Form
            onSubmit={handleSubmit}
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

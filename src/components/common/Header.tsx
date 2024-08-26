"use client";
import Image from "next/image";
import Link from "next/link";
import LOGO from "../../../public/logo.png";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Form from "./Form";
import useSearchQuery from "@/hooks/useSearchQuery";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const { searchTerm, handleChange, handleSubmit } = useSearchQuery();

  const handleClick = () => {
    setIsSearch(!isSearch);
  };

  return (
    <div className="w-[70%] m-auto flex items-center justify-between gap-4">
      <Link href="/">
        <Image src={LOGO} width={50} height={50} alt="LOGO" />
      </Link>
      <ul className="flex items-center flex-1 gap-8">
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
        <li className="group/title relative">
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
        <li>
          <Link href="">People</Link>
        </li>
        <li>
          <Link href="">More</Link>
        </li>
      </ul>
      <div className="flex items-center">
        {isSearch && (
          <Form
            onSubmit={handleSubmit}
            className={`${
              isSearch && "opacity-100 "
            } flex items-center mr-2 xl:w-[400px] lg:w-[250px] w-[200px] opacity-0 transition-opacity duration-700`}
          >
            <input
              className=" text-sm outline-none p-2 w-full text-gray-400 italic"
              type="text"
              name="search"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search for a Movie, TV show, person"
            />
          </Form>
        )}
        <div onClick={handleClick} className="cursor-pointer text-lg">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Header;

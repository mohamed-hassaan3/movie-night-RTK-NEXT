import Image from "next/image";
import Link from "next/link";
import LOGO from "../../../public/logo.png";

const Header = () => {
  return (
    <div className="w-[70%] m-auto flex items-center gap-4">
      <Link href="/">
        <Image src={LOGO} width={50} height={50} alt="LOGO" />
      </Link>
      <ul className="flex items-center gap-8">
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
    </div>
  );
};

export default Header;

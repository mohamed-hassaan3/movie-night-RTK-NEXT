import Image from "next/image";
import AVATAR from "../../../public/banner.jpg";
import { Search } from "@/lib/redux";
const Banner = () => {
  return (
    <div className="w-full relative">
      <h1 className="absolute text-white text-4xl top-1/4 font-semibold opacity-100 z-10 px-8">
        <span className="block mb-6 font-extrabold">Welcome.</span>Millions of
        movies, TV shows and people to discover. Explore now.
      </h1>
      <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 w-full max-w-full z-10">
        <Search />
      </div>
      <Image
        src={AVATAR}
        className="w-full h-[50vh] object-cover opacity-80 -z-10"
        quality={100}
        alt="Banner"
      />
    </div>
  );
};

export default Banner;

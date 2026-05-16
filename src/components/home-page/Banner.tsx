import Image from "next/image";
import { Search } from "@/lib/redux";

type BannerProps = {
  imageUrl?: string;
};

const Banner = ({ imageUrl }: BannerProps) => {
  return (
    <div className="w-full relative h-[50vh] bg-darkBlue">
      <h1 className="absolute text-white text-2xl md:text-4xl top-1/4 font-semibold opacity-100 z-10 px-8">
        <span className="block mb-6 font-extrabold">Welcome.</span>Millions of
        movies, TV shows and people to discover. Explore now.
      </h1>
      <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 w-full max-w-full z-10">
        <Search />
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          className="w-full h-full object-cover opacity-80"
          width={1280}
          height={720}
          sizes="(min-width: 1300px) 1300px, 100vw"
          alt="Banner"
          priority
          unoptimized
        />
      ) : null}
    </div>
  );
};

export default Banner;

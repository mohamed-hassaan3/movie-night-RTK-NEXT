import { SearchItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CompanyCard = ({ item }: { item: SearchItem }) => {
  return (
    <Link href={`/company/${item.id}`} className="border-b pb-2 flex items-center hover:opacity-80 w-fit">
      {item.logo_path ? (
        <Image
          className="inline-block mx-2 aspect-[2/1] object-contain"
          width={100}
          height={100}
          src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${item.logo_path}`}
          alt="company"
        />
      ) : (
      <h1 className="pr-3">{item.name}</h1>
      )}
      {item.origin_country && (
        <span className="bg-gray-400 text-white py-[2px] px-2 rounded-md text-sm">
          {item.origin_country}
        </span>
      )}
    </Link>
  );
};

export default CompanyCard;

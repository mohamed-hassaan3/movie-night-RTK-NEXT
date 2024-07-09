"use client";
import { getUserCountry } from "@/Utilities/getUserCountry";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";

const WatchProviders = ({ mediaDetails }: any) => {
  const [userCountry, setUserCountry] = useState<string>("AE");

  useEffect(() => {
    const fetchUserCountry = async () => {
      try {
        const country = await getUserCountry();
        setUserCountry(country);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchUserCountry();
  }, []);

  const watchProviders = mediaDetails?.["watch/providers"]?.results || {};
  const countryProviders = watchProviders[userCountry] || [];
  const firstProvider = countryProviders.flatrate
    ? countryProviders.flatrate[0]
    : null;

  return (
    <div>
      {firstProvider && (
        <div className="">
          <Link
            className="flex items-center justify-center gap-2 bg-darkBlue py-4 rounded-b-md text-white hover:opacity-90 transition overflow-hidden"
            href={countryProviders.link}
            target="_blank"
          >
            <Image
              className="rounded-md mr-1"
              src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${firstProvider.logo_path}`}
              width="40"
              height="40"
              alt="dd"
            />
            <div className="flex flex-col text-start">
              <span className="opacity-90 font-light text-sm">Now Streaming</span>
              <span className=" font-bold">Watch Now</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default WatchProviders;
/* {firstProvider ? (
        <div>
          <div key={firstProvider.provider_id}>
            <Image
            width={40}
            height={40}
              src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${firstProvider.logo_path}`}
              alt={"firstProvider.provider_name"}
            />
          </div>
          <Link href={countryProviders.link} target="_blank">
            Watch Now
          </Link>
        </div>
      ) : ""}*/
/* countryProviders.flatrate.map((provider: any) => (
          
        )) */

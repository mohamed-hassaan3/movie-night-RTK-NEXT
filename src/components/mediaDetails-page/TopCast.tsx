import React from "react";
import CastCard from "./cards/CastCard";
import "@/app/globals.css";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { uniqueObject } from "@/helper/uniqueObject";

const TopCast = ({ mediaDetails }: { mediaDetails: MediaDetails }) => {
  const truncateCast = uniqueObject(mediaDetails.credits?.cast.slice(0, 9));
  return (
    <>
      {mediaDetails.credits?.cast.length > 0 ? (
        <div className="border-b pb-8">
          <h1 className="font-bold text-xl">Top Billed Cast</h1>
          <div className="flex items-center justify-start gap-3 overflow-x-scroll overflow-y-hidden w-full py-6 mb-4">
            {mediaDetails.credits?.cast.length > 0 &&
              truncateCast.map((cast: Cast) => (
                <CastCard cast={cast} key={cast.id} />
              ))}
            {/* View More Card */}
            {mediaDetails.credits?.cast.length > 9 && (
              <Link
                href={`/mediaDetails/${mediaDetails.id}/${mediaDetails.media_type ? mediaDetails.media_type : "movie"}/fullCast`}
                className="flex items-center justify-center gap-2 min-w-[170px] min-h-[265px] border shadow-md rounded-md"
              >
                View More
                <span>
                  <FaArrowRight />
                </span>
              </Link>
            )}
          </div>
          <Link
            className="text-lg hover:opacity-50"
            href={`/mediaDetails/${mediaDetails.media_type ? mediaDetails.media_type : "movie"}/${mediaDetails.id}/fullCast`}
          >
            Full Cast & Crew
          </Link>
        </div>
      ) : "We don't have any cast added to this movie. You can help by adding some!"}
    </>
  );
};

export default TopCast;
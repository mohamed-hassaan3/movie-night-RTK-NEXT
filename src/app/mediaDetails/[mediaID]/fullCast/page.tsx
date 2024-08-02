"use client";
import CastCard from "@/components/mediaDetails-page/CastCard";
import { filterDate } from "@/helper/formatText";
import usePagination from "@/hooks/usePagination";
import {
  getMediaDetails,
  selectMediaDetails,
  selectMediaIDError,
} from "@/lib/redux/features/mediaDetails/mediaDetailsSlice";
import { selectCategory } from "@/lib/redux/features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const FullCast = ({ params }: { params: { mediaID: number } }) => {
  const { mediaID } = params;
  // const [currentPage, setCurrentPage] = useState(1);
  // const [total, setTotal] = useState(100);
  // const { nextPage, prevPage } = usePagination();
  // const isLoading = useAppSelector(selectMediaDetails);
  // const isError = useAppSelector(selectMediaIDError);
  const mediaDetails = useAppSelector(selectMediaDetails);
  const category = useAppSelector(selectCategory);
  const dispatch = useAppDispatch();
  const casts = mediaDetails.credits?.cast;
  const crews = mediaDetails.credits?.crew;
  console.log("CASTS", casts);
  console.log("CREWS", crews);
  useEffect(() => {
    dispatch(getMediaDetails({ mediaID, category }));
  }, [mediaID, category, dispatch]);

  return (
    <main>
      <Link href={`/mediaDetails/${mediaID}`}>
        <header className="bg-gray-800 my-6">
          <figure className="w-[75%] m-auto flex items-center gap-4">
            <Image
              src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${
                mediaDetails.poster_path || mediaDetails.backdrop_path
              }`}
              width={80}
              height={140}
              alt={mediaDetails.title || "poster"}
            />
            <figcaption>
              <h1 className="lg:text-3xl text-lg lg:font-extrabold font-medium text-white">
                {mediaDetails.title}{" "}
                <span className="opacity-50 font-normal">
                  {`(${filterDate(
                    mediaDetails.release_date || mediaDetails.first_air_date
                  )})`}
                </span>
              </h1>
              <Link
                className="opacity-50 text-white flex items-center gap-1 mt-2 hover:opacity-100"
                href={`/mediaDetails/${mediaID}`}
              >
                <FaArrowLeft />
                Back to main
              </Link>
            </figcaption>
          </figure>
        </header>
      </Link>
      <article className="grid grid-cols-2 w-[90%] gap-4 justify-items-center m-auto my-6">
        <section className="space-y-6">
          <h1 className="font-bold text-xl">
            Casts{" "}
            <span className="opacity-50 font-normal">{casts?.length}</span>
          </h1>
          <div className="space-y-4">
            {!casts?.length ? (
              <p>No Results Found</p>
            ) : (
              casts.map((cast: Cast) => <CastCard key={cast.id} cast={cast} />)
            )}
          </div>
        </section>
        <section className="space-y-6">
          <h1 className="font-bold text-xl">
            Crews{" "}
            <span className="opacity-50 font-normal">{crews?.length}</span>
          </h1>
          <div className="space-y-4">
            {!casts?.length ? (
              <p>No Results Found</p>
            ) : (
              crews.map((crew: Cast) => <CastCard key={crew.id} cast={crew} />)
            )}
          </div>
        </section>
      </article>
    </main>
  );
};

export default FullCast;

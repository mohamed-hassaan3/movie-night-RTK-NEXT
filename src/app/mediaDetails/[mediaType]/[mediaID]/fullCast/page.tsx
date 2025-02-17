"use client";
import FullCastCard from "@/components/mediaDetails-page/cards/FullCastCard";
import { filterDate } from "@/helper/formatText";
import { uniqueObject } from "@/helper/uniqueObject";
import {
  getMediaDetails,
  selectMediaDetails,
} from "@/lib/redux/features/mediaDetails/mediaDetailsSlice";
import { selectCategory } from "@/lib/redux/features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

const FullCast = ({ params }: { params: { mediaID: number } }) => {
  const { mediaID } = params;
  const mediaDetails = useAppSelector(selectMediaDetails);
  const category = useAppSelector(selectCategory);
  const dispatch = useAppDispatch();
  const casts = mediaDetails.credits?.cast;
  const crews = uniqueObject(mediaDetails.credits?.crew);
  const router = useRouter()
  useEffect(() => {
    dispatch(getMediaDetails({ mediaID, category }));
  }, [mediaID, category, dispatch]);

  return (
    <main>
      <Link href={`/mediaDetails/${mediaDetails.media_type ? mediaDetails.media_type : "movie"}/${mediaID}`}>
        <header className="bg-gray-800 my-6">
          <figure className="w-[75%] m-auto flex items-center gap-4">
            <Image
              src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${mediaDetails.poster_path || mediaDetails.backdrop_path
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
              <button className="opacity-50 text-white flex items-center gap-1 mt-2 hover:opacity-100" onClick={() => router.back}><FaArrowLeft /> Back to main</button>
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
              casts.map((cast: Cast) => <FullCastCard key={cast.id} cast={cast} />)
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
              crews.map((crew: Cast) => <FullCastCard key={crew.id} cast={crew} />)
            )}
          </div>
        </section>
      </article>
    </main>
  );
};

export default FullCast;

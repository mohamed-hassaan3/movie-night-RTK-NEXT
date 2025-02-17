"use client";
import React, { useEffect } from "react";
import { selectCategory } from "@/lib/redux/features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {
  getMediaDetails,
  selectMediaDetails,
} from "@/lib/redux/features/mediaDetails/mediaDetailsSlice";
import Image from "next/image";
import { filterDate } from "@/helper/formatText";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import SocialCard from "@/components/mediaDetails-page/cards/SocialCard";
import { useRouter } from "next/navigation";

const FullReviews = ({ params }: { params: { mediaID: string | number } }) => {
  const { mediaID } = params;
  const dispatch = useAppDispatch();
  const category = useAppSelector(selectCategory);
  const mediaDetails = useAppSelector(selectMediaDetails);
  const reviews: Reviews[] = mediaDetails?.reviews?.results;
  const router = useRouter()
  useEffect(() => {
    dispatch(getMediaDetails({ mediaID, category }));
  }, [mediaID, category, dispatch]);
  console.log(router)
  return (
    <main className="w-full m-auto">
      <Link
        href={`/mediaDetails/${mediaDetails.media_type ? mediaDetails.media_type : "movie"
          }/${mediaID}`}
      >
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
              <button className="opacity-50 text-white flex items-center gap-1 mt-2 hover:opacity-100" onClick={() => router.back}>
                <FaArrowLeft /> Back to main</button>
            </figcaption>
          </figure>
        </header>
      </Link>
      <section className="w-3/4 m-auto py-6 space-y-6">
        {!reviews?.length ? (
          <p>No Reviews found</p>
        ) : (
          reviews?.map((review) => (
            <SocialCard social={review} key={review.id} />
          ))
        )}
      </section>
    </main>
  );
};

export default FullReviews;

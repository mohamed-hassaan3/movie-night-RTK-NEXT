"use client";

import React, { useEffect } from "react";
import {
  getMediaDetails,
  selectMediaDetails,
  selectMediaIDError,
  selectMediaIDLoading,
} from "@/lib/redux/features/mediaDetails/mediaDetailsSlice";
import { selectCategory } from "@/lib/redux/features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import Image from "next/image";
import {
  formatDate,
  filterDate,
  loopArr,
  convertRuntime,
} from "@/helper/formatText";
import PercentageBar from "../common/PercentageBar";
import WatchProviders from "./WatchProviders";
import Trailer from "./Trailer";

const MediaBanner = ({ mediaID }) => {
  const isLoading = useAppSelector(selectMediaIDLoading);
  const isError = useAppSelector(selectMediaIDError);
  const mediaDetails = useAppSelector(selectMediaDetails);
  const category = useAppSelector(selectCategory);
  const dispatch = useAppDispatch();
  const {
    backdrop_path,
    title,
    original_title,
    poster_path,
    release_date,
    runtime,
    origin_country,
    original_name,
    genres,
    overview,
    tagline,
    vote_average,
    first_air_date,
  } = mediaDetails;

  useEffect(() => {
    dispatch(getMediaDetails({ mediaID, category }));
  }, [dispatch, mediaID, category]);

  console.log("MEDIA", mediaDetails);
  return (
    <div className="text-center">
      {isError ? (
        isError.status_message
      ) : isLoading ? (
        <p>Loading....</p>
      ) : (
        /* Backdrop Path */
        <section className="relative h-[60vh] w-full">
          <Image
            className="w-full h-full object-cover object-right-top opacity-10 "
            src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${backdrop_path}`}
            layout="fill"
            alt="Banner"
          />
          {/* Content */}
          <article className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[95%] lg:w-[80%] flex gap-4 items-center p-4">
            <figure>
              <Image
                className="shadow-md w-full object-cover min-h-[400px] max-h-[400px] min-w-[300px] max-w-[300px]"
                src={`${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_API}${poster_path}`}
                width={300}
                height={450}
                alt="Banner"
              />
              <figcaption>
                <WatchProviders mediaDetails={mediaDetails} />
              </figcaption>
            </figure>
            <aside className="flex flex-col p-4 text-start overflow-hidden min-w-[70%]">
              <p className="text-2xl font-extrabold text-start">
                {title || original_title || original_name}
                <span className="font-normal">
                  ({filterDate(release_date || first_air_date)})
                </span>
              </p>
              <ul className="text-start flex gap-3">
                <li>{formatDate(release_date)}</li>
                <li>({loopArr(origin_country)})</li>
                <li>
                  <ul className="flex space-x-1">{loopArr(genres)}</ul>
                </li>
                <li className="text-nowrap">{convertRuntime(runtime)}</li>
              </ul>
              <div className="w-[130px] h-[100px] flex items-center gap-2">
                <div>
                  <PercentageBar percentage={vote_average} />
                </div>
                <span className="font-bold">User Score</span>
              </div>
                <div className="my-3">
                  <Trailer />
                </div>
              <div className="space-y-3">
                <p className="text-gray-400">{tagline}</p>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Overview</h3>
                  <p>{overview}</p>
                </div>
              </div>
            </aside>
          </article>
        </section>
      )}
    </div>
  );
};

export default MediaBanner;
/* https://www.themoviedb.org/movie/ID#play=KEY */

"use client";
import React, { useEffect } from "react";
import {
  getMediaDetails,
  selectMediaDetails,
  selectMediaIDError,
  selectMediaIDLoading,
} from "@/lib/redux/features/mediaDetails/mediaDetailsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import MediaBanner from "@/components/mediaDetails-page/MediaBanner";
import TopCast from "@/components/mediaDetails-page/TopCast";
import RightSide from "@/components/mediaDetails-page/RightSide";
import Social from "@/components/mediaDetails-page/Social";
import Media from "@/components/mediaDetails-page/Media";
import Recommendation from "@/components/mediaDetails-page/Recommendation";
import MediaDetailsSkeleton from "@/components/mediaDetails-page/MediaDetailsSkeleton";

const MediaID = ({
  params,
}: {
  params: { mediaID: number | string; mediaType: string };
}) => {
  const mediaID = params.mediaID;
  const mediaType = params.mediaType;
  const isLoading = useAppSelector(selectMediaIDLoading);
  const isError = useAppSelector(selectMediaIDError);
  const mediaDetails = useAppSelector(selectMediaDetails);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMediaDetails({ mediaType, mediaID }));
  }, [dispatch, mediaID, mediaType]);

  return (
    <main className="overflow-hidden">
      {isError ? (
        <p className="text-center my-4 mx-auto h-[75dvh] flex flex-col items-center justify-center">
          {isError.status_message}
        </p>
      ) : isLoading ? (
        <MediaDetailsSkeleton />
      ) : (
        <section className="relative">
          <MediaBanner mediaDetails={mediaDetails} />
          <section className="space-y-12 md:space-y-0 md:grid grid-cols-6 gap-6 m-auto my-6 lg:p-2 w-[95%] lg:w-[80%] ">
            <article className="col-span-5">
              <TopCast mediaDetails={mediaDetails} />
              <Social mediaDetails={mediaDetails} />
              <Media mediaDetails={mediaDetails} />
              <Recommendation mediaDetails={mediaDetails} />
            </article>
            <aside className="col-span-1">
              <RightSide mediaDetails={mediaDetails} />
            </aside>
          </section>
        </section>
      )}
    </main>
  );
};

export default MediaID;

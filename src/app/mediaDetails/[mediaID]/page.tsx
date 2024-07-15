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
import MediaBanner from "@/components/mediaDetails-page/MediaBanner";
import TopCast from "@/components/mediaDetails-page/TopCast";
import RightSide from "@/components/mediaDetails-page/RightSide";
import Social from "@/components/mediaDetails-page/Social";
import Media from "@/components/mediaDetails-page/Media";
import Recommendation from "@/components/mediaDetails-page/Recommendation";

const MediaID = ({ params }: { params: { mediaID: number | string } }) => {
  const mediaID = params.mediaID;
  const isLoading = useAppSelector(selectMediaIDLoading);
  const isError = useAppSelector(selectMediaIDError);
  const mediaDetails = useAppSelector(selectMediaDetails);
  const category = useAppSelector(selectCategory);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMediaDetails({ mediaID, category }));
  }, [dispatch, mediaID, category]);

  return (
    <main className="overflow-hidden">
      {isError ? (
        isError.status_message
      ) : isLoading ? (
        <p>Loading....</p>
      ) : (
        <section>
          <MediaBanner mediaDetails={mediaDetails} />
          <section className="grid grid-cols-6 gap-6 m-auto my-6 lg:p-2 w-[95%] lg:w-[80%] ">
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

"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import MediaBanner from "@/components/mediaDetails-page/MediaBanner";
import TopCast from "@/components/mediaDetails-page/TopCast";
import RightSide from "@/components/mediaDetails-page/RightSide";
import Social from "@/components/mediaDetails-page/Social";
import Media from "@/components/mediaDetails-page/Media";
import Recommendation from "@/components/mediaDetails-page/Recommendation";
import MediaDetailsSkeleton from "@/components/mediaDetails-page/MediaDetailsSkeleton";
import { getTvDetails, selectTvDetails, selectTvIDError, selectTvIDLoading } from "@/lib/redux/features/tvDetails/tvDetailsSlice";

const TvID = ({ params }: { params: { tvID: number | string } }) => {
  const tvID = params.tvID;
  const isLoading = useAppSelector(selectTvIDLoading);
  const isError = useAppSelector(selectTvIDError);
  const tvDetails = useAppSelector(selectTvDetails);
  const dispatch = useAppDispatch();
  console.log("TV Details", tvDetails?.network);

  useEffect(() => {
    dispatch(getTvDetails({ tvID }));
  }, [dispatch, tvID]);
 
  return (
    <main className="overflow-hidden">
      {isError ? (
        isError.status_message
      ) : isLoading ? (
        <MediaDetailsSkeleton />
      ) : (
        <section>
          <MediaBanner mediaDetails={tvDetails} />
          <section className="grid grid-cols-6 gap-6 m-auto my-6 lg:p-2 w-[95%] lg:w-[80%] ">
            <article className="col-span-5">
              <TopCast mediaDetails={tvDetails} />
              <Social mediaDetails={tvDetails} />
              <Media mediaDetails={tvDetails} />
              {tvDetails.recommendations?.results.length !== 0 && (
              <Recommendation mediaDetails={tvDetails} />
              )}
            </article>
            <aside className="col-span-1">
              <RightSide mediaDetails={tvDetails} />
            </aside>
          </section>
        </section>
      )}
    </main>
  );
};

export default TvID;

"use client";
import MediaBanner from "@/components/mediaDetails-page/MediaBanner";
import MediaDetailsSkeleton from "@/components/mediaDetails-page/MediaDetailsSkeleton";
import Parts from "@/components/collection-page/Parts";
import {
  getMediaDetails,
  selectMediaDetails,
  selectMediaIDError,
  selectMediaIDLoading,
} from "@/lib/redux/features/mediaDetails/mediaDetailsSlice";
import { selectCategory } from "@/lib/redux/features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import React, { useEffect } from "react";

const Collection = ({
  params,
}: {
  params: { collectionID: number | string };
}) => {
  const mediaID = params.collectionID;
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
        <MediaDetailsSkeleton />
      ) : (
        <section>
          <MediaBanner mediaDetails={mediaDetails} />
          <section className="grid grid-cols-6 gap-6 m-auto my-6 lg:p-2 w-[95%] lg:w-[80%] ">
            <article className="col-span-6">
              <Parts mediaDetails={mediaDetails} />
            </article>
          </section>
        </section>
      )}
    </main>
  );
};

export default Collection;

"use client";
import MediaDetailsSkeleton from "@/components/mediaDetails-page/MediaDetailsSkeleton";
import Parts from "@/components/collection-page/Parts";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import React, { useEffect } from "react";
import { getCollectionDetails, selectCollectionDetails, selectIsError, selectIsLoading } from "@/lib/redux/features/collectionDetails/collectionDetailsSlice";
import CollectionBanner from "@/components/collection-page/CollectionBanner";

const Collection = ({
  params,
}: {
  params: { collectionID: number | string };
}) => {
  const collectionID = params.collectionID;
  const isLoading = useAppSelector(selectIsLoading);
  const isError = useAppSelector(selectIsError);
  const collectionDetails = useAppSelector(selectCollectionDetails);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCollectionDetails({ collectionID }));
    window.scrollTo({top: 0})
  }, [dispatch, collectionID]);

  return (
    <main className="overflow-hidden">
      {isError ? (
        isError.status_message
      ) : isLoading ? (
        <MediaDetailsSkeleton />
      ) : (
        <section>
          <CollectionBanner collectionDetails={collectionDetails} />
          <section className="grid grid-cols-6 gap-6 m-auto my-6 lg:p-2 w-[95%] lg:w-[80%] ">
            <article className="col-span-6">
              <Parts collectionDetails={collectionDetails} />
            </article>
          </section>
        </section>
      )}
    </main>
  );
};

export default Collection;

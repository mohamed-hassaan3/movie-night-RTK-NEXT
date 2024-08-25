"use client";
import PersonBanner from "@/components/person-page/PersonBanner";
import PersonSkeleton from "@/components/person-page/PersonSkeleton";
import {
  getPersonDetails,
  selectPersonDetails,
  selectPersonError,
  selectPersonLoading,
} from "@/lib/redux/features/personDetails/personDetailsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import React, { useEffect } from "react";

const PersonID = ({ params }: { params: { personID: string | number } }) => {
  const personID = params.personID;
  const personDetails = useAppSelector(selectPersonDetails);
  const isLoading = useAppSelector(selectPersonLoading);
  const isError = useAppSelector(selectPersonError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPersonDetails({ personID }));
    window.scrollTo({ top: 0 });
  }, [dispatch, personID]);

  console.log("personDetails", personDetails);
  return (
    <main className="w-[80%] m-auto py-12">
      {isError ? (
        <p className="text-center">
          <span className="mr-2">{`Status_Error ${isError.status_code}`}</span>
          {isError.status_message}
        </p>
      ) : isLoading ? (
        <PersonSkeleton />
      ) : (
        <section>
          <PersonBanner personDetails={personDetails} />
        </section>
      )}
    </main>
  );
};

export default PersonID;

"use client";
import React, { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { getSearch, selectCategory, selectSearchTerm, setSearchTerm } from "./searchSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import usePagination from "@/hooks/usePagination";
import Form from "@/components/common/Form";
import Button from "@/components/common/Buttons/PrimaryButton";
import PrimaryButton from "@/components/common/Buttons/PrimaryButton";

const Search = () => {
  const router = useRouter();
  const searchTerm = useAppSelector(selectSearchTerm);
  const {currentPage} = usePagination();
  const category = useAppSelector(selectCategory)
  const debouncedValue = useDebounce(searchTerm, 500);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSearch({ searchTerm: debouncedValue, currentPage, category }));
    console.log("update current page", currentPage);
  }, [dispatch, searchTerm, currentPage, debouncedValue, category]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value.toLocaleLowerCase()));
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search/${searchTerm}`);
  };

  return (
    <Form className="text-center m-auto w-[95%]" onSubmit={handleSubmit}>
      <input
        className="outline-none border-none w-full p-4 rounded-full relative"
        value={searchTerm}
        onChange={handleChange}
        type="text"
        name="search"
        placeholder="Search for a Movie, TV show, person......"
      />

      <PrimaryButton
        disabled={!searchTerm}
        className={`bg-lightBlue py-4 px-8 rounded-full text-white font-bold hover:text-black absolute right-4 ${
          searchTerm
            ? "bg-lightBlue hover:text-black cursor-pointer"
            : "hover:text-white cursor-not-allowed"
        }`}
        type="submit"
        value="Search"
        text="Search"
      />
    </Form>
  );
};

export default Search;

"use client";
import React from "react";
import Form from "@/components/common/Form";
import PrimaryButton from "@/components/common/Buttons/PrimaryButton";
import useSearchQuery from "@/hooks/useSearchQuery";

const Search = () => {
  const {searchTerm, handleChange, handleSubmit} = useSearchQuery()

  return (
    <Form className="text-center m-auto w-[95%]" onSubmit={handleSubmit}>
      <input
        className="outline-none border-none w-full p-2 md:p-4 rounded-full relative md:placeholder:text-lg placeholder:text-sm"
        value={searchTerm}
        onChange={handleChange}
        type="text"
        name="search"
        placeholder="Search for a Movie, TV show, person......"
      />
      <PrimaryButton
        disabled={!searchTerm}
        className={`bg-lightBlue py-2 md:py-4 px-8 rounded-full text-white font-bold hover:text-black absolute right-2 md:right-4 ${
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
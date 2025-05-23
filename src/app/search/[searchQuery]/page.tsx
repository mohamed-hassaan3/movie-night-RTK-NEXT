"use client";
import SearchCard from "@/components/common/cards/SearchCard";
import SearchSkeleton from "@/components/search-page/SearchSkeleton";
import {
  getSearch,
  selectCategory,
  selectSearchData,
  selectSearchIsError,
  selectSearchIsLoading,
  selectSearchTerm,
} from "@/lib/redux/features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import React, { Fragment, useEffect } from "react";
import { type SearchItem } from "@/types/index";
import usePagination from "@/hooks/usePagination";
import SearchCategory from "@/components/search-page/SearchCategory";
import PrimaryButton from "@/components/common/Buttons/PrimaryButton";
import PersonCard from "@/components/common/cards/PersonCard";
import CompanyCard from "@/components/common/cards/CompanyCard";
import KeywordCard from "@/components/common/cards/KeywordCard";
import CollectionCard from "@/components/common/cards/CollectionCard";
import TvCard from "@/components/common/cards/TvCard";

const SearchTerm = () => {
  const searchTerm = useAppSelector(selectSearchTerm);
  const { currentPage, nextPage, prevPage } = usePagination();
  const isLoading = useAppSelector(selectSearchIsLoading);
  const isError = useAppSelector(selectSearchIsError);
  const searchResult = useAppSelector(selectSearchData);
  const category = useAppSelector(selectCategory);
  const dispatch = useAppDispatch();
  const resultArray = Array.isArray(searchResult.results)
    ? searchResult.results
    : [];

  console.log("RESULT", resultArray);
  console.log("category", category);

  const renderCategoriesCard = (item: SearchItem) => {
    switch (category) {
      case "movie":
        return <SearchCard item={item} />;
      case "tv":
        return <TvCard item={item} />;
      case "person":
        return <PersonCard item={item} />;
      case "company":
        return <CompanyCard item={item} />;
      case "keyword":
        return <KeywordCard item={item} />;
      case "collection":
        return <CollectionCard item={item} />;
    }
  };

  useEffect(() => {
    dispatch(getSearch({ searchTerm, currentPage, category }));
    window.scrollTo({ top: 0 });
  }, [searchTerm, currentPage, category, dispatch]);

  return (
    <div className="w-full min-h-screen">
      {searchTerm && (
        <p className=" max-w-max shadow-md py-2 px-4 rounded-rb-lg rounded-r-lg sticky top-0 bg-slate-200">
          Search Key is{" "}
          <span className="text-gray-400 italic font-bold">{searchTerm}</span>
        </p>
      )}
      <section className="md:flex justify-center gap-6 md:gap-12 w-[90%] m-auto py-6">
        <article className="md:w-[25%]">
          <SearchCategory />
        </article>
        <article className="md:w-[75%] space-y-6 mt-4 md:mt-0">
          {isError ? (
            <div className="h-screen text-red-500 text-md text-center opacity-70">
              <p>{isError.message || isError.status_message}</p>
            </div>
          ) : isLoading ? (
            <SearchSkeleton />
          ) : (
            resultArray.map((item: SearchItem) => (
              <Fragment key={item.id}>{renderCategoriesCard(item)}</Fragment>
            ))
          )}
          {resultArray.length === 0 && (
            <p className="h-screen text-center">No Results Found</p>
          )}
          {!isError && resultArray.length > 1 && (
            <div className="space-x-6 text-center my-6">
              <PrimaryButton
                text="Back"
                disabled={currentPage <= 1 && true}
                onClick={prevPage}
                className={`py-2 px-8 bg-lightBlue text-white rounded-md ${
                  currentPage <= 1 && "opacity-50"
                }`}
              />
              <span>
                {currentPage} of {searchResult.total_pages}
              </span>
              <PrimaryButton
                text="Next"
                disabled={currentPage >= searchResult.total_pages && true}
                onClick={nextPage}
                className={`py-2 px-8 bg-lightBlue text-white rounded-md hover:opacity-90 active:opacity-60 ${
                  currentPage === searchResult.total_pages && "opacity-50"
                }`}
              />
            </div>
          )}
        </article>
      </section>
    </div>
  );
};

export default SearchTerm;
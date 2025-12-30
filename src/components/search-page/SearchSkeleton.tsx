import LoadingSkeleton from "@/components/common/LoadingSkeleton";
import { selectSearchData } from "@/lib/redux/features/search/searchSlice";
import { useAppSelector } from "@/lib/redux/hooks";
import React from "react";
import Skeleton from "react-loading-skeleton";

const SearchSkeleton
 = () => {
  const searchResult = useAppSelector(selectSearchData);
  const resultArray = Array.isArray(searchResult.results)
    ? searchResult.results
    : [];
  return (
    
    <LoadingSkeleton>
      <div className="mx-auto w-[90%] opacity-50">
      <Skeleton
        count={resultArray.length}
        className="border h-[152px] shadow-lg !rounded-xl mb-6"
        />
        </div>
    </LoadingSkeleton>
  );
};

export default SearchSkeleton
;
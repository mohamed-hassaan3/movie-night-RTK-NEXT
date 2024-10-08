import {
  getCategoriesResults,
  selectCategory,
  selectCategoryResults,
  selectSearchTerm,
  setCategory,
} from "@/lib/redux/features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import React, { useEffect, useState } from "react";
import CategoryButton from "../common/Buttons/CategoryButton";

const SearchCategory = () => {
  const [activeItem, setActiveItem] = useState<String>();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector(selectSearchTerm);
  const categoryResults = useAppSelector(selectCategoryResults);
  const category = useAppSelector(selectCategory);

  const handleChange = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    setActiveItem(target.value);
    dispatch(setCategory(target.value.toLocaleLowerCase()));
  };

  useEffect(() => {
    const categories = [
      "movie",
      "tv",
      "person",
      "collection",
      "keyword",
      "company",
    ];
    categories.forEach((category) =>
      dispatch(getCategoriesResults({ category, searchTerm }))
    );
  }, [dispatch, searchTerm]);

  return (
    <div className="flex-row *:px-2  md:*:px-8 py-1 md:py-0 md:*:py-4 *:text-start pb-2 flex md:overflow-hidden overflow-x-scroll md:flex-col shadow-md border rounded-xl font-normal text-xs md:space-x-0 space-x-4 md:text-sm">
      <p className="hidden md:block bg-lightBlue text-white rounded-t-lg text-lg font-semibold text-nowrap overflow-hidden">
        Search Result
      </p>
      <CategoryButton
        className={`${category === "movie" && "bg-slate-300 rounded-md"} active:text-slate-100 w-full my-1 m-auto transition duration-500 flex justify-between items-center`}
        type="submit"
        isActive={activeItem === "movie"}
        value="movie"
        onClick={handleChange}
      >
        Movies{" "}
        <span className="p-1 ml-2 bg-slate-400 text-white rounded-md w-10 min-w-fit font-semibold text-center">
          {categoryResults["movie"]?.toLocaleString() || 0}{" "}
        </span>
      </CategoryButton>
      <CategoryButton
        className={`${category === "tv" && "bg-slate-300 rounded-md"} active:text-slate-100 w-full my-1 m-auto transition duration-500 flex justify-between items-center`}
        type="submit"
        isActive={activeItem === "tv"}
        value="tv"
        onClick={handleChange}
      >
        TvShows{" "}
        <span className="p-1 ml-2 bg-slate-400 text-white rounded-md w-10 min-w-fit font-semibold text-center">
          {categoryResults["tv"]?.toLocaleString() || 0}
        </span>
      </CategoryButton>
      <CategoryButton
        className={`${category === "person" && "bg-slate-300 rounded-md"} active:text-slate-100 w-full my-1 m-auto transition duration-500 flex justify-between items-center`}
        type="submit"
        isActive={activeItem === "person"}
        value="person"
        onClick={handleChange}
      >
        People{" "}
        <span className="p-1 ml-2 bg-slate-400 text-white rounded-md w-10 min-w-fit font-semibold text-center">
          {categoryResults["person"]?.toLocaleString() || 0}
        </span>
      </CategoryButton>
      <CategoryButton
        className={`${category === "collection" && "bg-slate-300 rounded-md"} active:text-slate-100 w-full my-1 m-auto transition duration-500 flex justify-between items-center`}
        type="submit"
        isActive={activeItem === "collection"}
        value="collection"
        onClick={handleChange}
      >
        Collections{" "}
        <span className="p-1 ml-2 bg-slate-400 text-white rounded-md w-10 min-w-fit font-semibold text-center">
          {categoryResults["collection"]?.toLocaleString() || 0}
        </span>
      </CategoryButton>
      <CategoryButton
        className={`${category === "keyword" && "bg-slate-300 rounded-md"} active:text-slate-100 w-full my-1 m-auto transition duration-500 flex justify-between items-center`}
        type="submit"
        isActive={activeItem === "keyword"}
        value="keyword"
        onClick={handleChange}
      >
        Keywords{" "}
        <span className="p-1 ml-2 bg-slate-400 text-white rounded-md w-10 min-w-fit font-semibold text-center">
          {categoryResults["keyword"]?.toLocaleString() || 0}
        </span>
      </CategoryButton>
      <CategoryButton
        className={`${category === "company" && "bg-slate-300 rounded-md"} active:text-slate-100 w-full my-1 m-auto transition duration-500 flex justify-between items-center`}
        type="submit"
        isActive={activeItem === "company"}
        value="company"
        onClick={handleChange}
      >
        Companies{" "}
        <span className="p-1 ml-2 bg-slate-400 text-white rounded-md w-10 min-w-fit font-semibold text-center">
          {categoryResults["company"]?.toLocaleString() || 0}
        </span>
      </CategoryButton>
    </div>
  );
};

export default SearchCategory;
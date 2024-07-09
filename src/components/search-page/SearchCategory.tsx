import {
  selectCategory,
  setCategory,
} from "@/lib/redux/features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import React from "react";
import CategoryButton from "../common/Buttons/CategoryButton";

const SearchCategory = () => {
  const dispatch = useAppDispatch();
  const category = useAppSelector(selectCategory);

  const handleChange = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    if (category && null) {
      console.log("No Result mates");
    }
    dispatch(setCategory(target.value.toLocaleLowerCase()));
  };

  return (
    <div className="*:px-8 *:py-4 *:text-start pb-2 flex flex-col shadow-md border rounded-xl font-normal text-sm">
      <p className=" bg-lightBlue text-white rounded-t-lg text-lg font-semibold">
        Search Result
      </p>
      <CategoryButton
        className=" focus:bg-slate-300 active:text-slate-100 w-[90%] m-auto my-1 rounded-full transition duration-500"
        type="submit"
        value="movie"
        onClick={handleChange}
      >
        Movies
      </CategoryButton>
      <CategoryButton
        className=" focus:bg-slate-300 active:text-slate-100 w-[90%] m-auto my-1 rounded-full transition duration-500"
        type="submit"
        value="tv"
        onClick={handleChange}
      >
        TvShows
      </CategoryButton>
      <CategoryButton
        className=" focus:bg-slate-300 active:text-slate-100 w-[90%] m-auto my-1 rounded-full transition duration-500"
        type="submit"
        value="person"
        onClick={handleChange}
      >
        People
      </CategoryButton>
      <CategoryButton
        className=" focus:bg-slate-300 active:text-slate-100 w-[90%] m-auto my-1 rounded-full transition duration-500"
        type="submit"
        value="collection"
        onClick={handleChange}
      >
        Collections
      </CategoryButton>
      <CategoryButton
        className=" focus:bg-slate-300 active:text-slate-100 w-[90%] m-auto my-1 rounded-full transition duration-500"
        type="submit"
        value="keyword"
        onClick={handleChange}
      >
        Keywords
      </CategoryButton>
      <CategoryButton
        className=" focus:bg-slate-300 active:text-slate-100 w-[90%] m-auto my-1 rounded-full transition duration-500"
        type="submit"
        value="company"
        onClick={handleChange}
      >
        Companies
      </CategoryButton>
      <CategoryButton
        className=" focus:bg-slate-300 active:text-slate-100 w-[90%] m-auto my-1 rounded-full transition duration-500"
        type="submit"
        value="network"
        onClick={handleChange}
      >
        Networks
      </CategoryButton>
    </div>
  );
};

export default SearchCategory;
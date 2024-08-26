import React, { useEffect } from "react";
import useDebounce from "@/hooks/useDebounce";
import usePagination from "@/hooks/usePagination";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { getSearch, selectCategory, selectSearchTerm, setSearchTerm } from "@/lib/redux/features/search/searchSlice";

const useSearchQuery = () => {
    const router = useRouter();
    const searchTerm = useAppSelector(selectSearchTerm);
    const { currentPage } = usePagination();
    const category = useAppSelector(selectCategory)
    const debouncedValue = useDebounce(searchTerm, 500);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getSearch({ searchTerm: debouncedValue, currentPage, category }));
    }, [dispatch, searchTerm, currentPage, debouncedValue, category]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchTerm(event.target.value.toLocaleLowerCase()));
    };

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/search/${searchTerm}`);
    };

    return { searchTerm, handleChange, handleSubmit }
}

export default useSearchQuery
"use client"
import { selectCurrentPage, setCurrentPage } from "@/lib/redux/features/search/searchSlice"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"

const usePagination = () => {
    const currentPage = useAppSelector(selectCurrentPage)
    const dispatch = useAppDispatch()

    const nextPage = () => {
        dispatch(setCurrentPage(currentPage + 1))
    }
    const prevPage = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1))
        }
    }
    return {currentPage, nextPage, prevPage}
}

export default usePagination
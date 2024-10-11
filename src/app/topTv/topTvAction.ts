import { Data } from "@/types";

export async function topTvAction(category: string) {
    let data: Data | undefined = undefined
    let error = null
    let isError = false

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_MOVIE_DB_API}/tv/${category}`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_DB_ACCESS_TOKEN}`
            }
        })
        data = await response.json()
    } catch (e) {
        isError = true
        if (typeof e === "string") return error = e
        else if (e instanceof Error) return error = e.message
        else error = "Something Went Wrong"
    }
    return { data, isError, error }
}
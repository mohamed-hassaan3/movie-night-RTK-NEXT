import { Data } from "@/types"

export async function topPeopleAction(category: string) {
    let data: Data | undefined = undefined
    let isError = false
    let error = ""

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_MOVIE_DB_API}/person/${category}`,
            {
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_DB_ACCESS_TOKEN}`
                }
            }
        )
        data = await response.json();
    } catch (e) {
        isError = true
        if (typeof e === "string") error = e
        else if (e instanceof Error) error = e.message
        else error = "Something Went Wrong"
    }
    return { data, isError, error }
}
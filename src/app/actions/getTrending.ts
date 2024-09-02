"use server"
import { TrendingProps } from "@/types";

interface Data {
    results: TrendingProps[]
}

export async function getTrending() {
    let data: Data | undefined = undefined
    let isError = false;
    let error = ""
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_TRENDING_DB_API}/day`,
            {
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_DB_ACCESS_TOKEN}`,
                },
            });
        data = await response.json()
    } catch (e) {
        isError = true;
        if (typeof e === "string") error = e
        else if (e instanceof Error) error = e.message
        else error = "Error"
    }
    return {data, isError, error}
}
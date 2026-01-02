"use server"
import { Data } from "@/types";

export async function getTrending({timeWindow}: {timeWindow: string}) {
    let data: Data | undefined = undefined
    let isError = false;
    let error = ""
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_TRENDING_DB_API}/${timeWindow}`,
            {
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_DB_ACCESS_TOKEN}`,
                },
            });
            console.log("TRENDING DATA", data)
        data = await response.json()
    } catch (e) {
        isError = true;
        if (typeof e === "string") error = e
        else if (e instanceof Error) error = e.message
        else error = "Error"
    }
    return {data, isError, error}
}
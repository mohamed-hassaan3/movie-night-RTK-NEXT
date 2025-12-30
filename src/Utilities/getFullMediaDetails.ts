import API, { options } from "@/lib/axios/movieApi";

export const getFullMediaDetails = async (mediaID: string | number, endpoint: string, category: string) => {

    try {
        const response = await API(`/${category}/${mediaID}/${endpoint}`, options);
        const data = response.data;
        console.log(data.results);
    } catch (err: any) {
        console.log("Failed", err.message);
        return []
    }
}
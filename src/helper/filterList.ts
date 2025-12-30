
export function filterList<T>(data: T[], key: keyof T | "", department: string | ""): T[] {
    if (!data || data.length === 0) {
        console.log("No data To Provided")
        return []
    } else if(department === "" || key === "") {
        return data
    }
    return data.filter((item) => {
        const itemValue = item[key]
        return typeof itemValue === "string" && itemValue.toLowerCase() === department.toLowerCase()
    })
}
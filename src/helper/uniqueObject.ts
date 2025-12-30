
interface Item {
    id: string
}

export const uniqueObject = (obj: any) => {
     return obj?.filter((item: Item, index: number) => 
        obj.findIndex((content: any) => content.id === item.id) === index
    )
}
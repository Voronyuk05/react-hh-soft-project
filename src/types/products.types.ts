

export interface IProducts {
    category: string
    cards: IProductsCard[]
}

export interface IProductsCard {
    title: string
    paragraph: string
}

export interface IProductsListProps {
    chosenCategory: string
    perPage: number
}
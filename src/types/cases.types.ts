
export interface ICases {
    category: string
    cards: ICasesCard[]
}

export interface ICasesCard {
    title: string
    customer: string
    task: string
    sideText: string
}

export interface ICasesListProps {
    chosenCategory: string
    perPage: number
}
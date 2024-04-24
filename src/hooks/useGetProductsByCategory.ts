import { useQuery } from "@tanstack/react-query"
import productsService from "../services/products.service"

export const useGetProductsByCategory = (chosenCategory: string) => {
    const {data} = useQuery({
        queryKey: ['productsByCategory', chosenCategory],
        queryFn: () => productsService.getProductsByCategory(chosenCategory),
    })

    return {data}
}
import { useQuery } from "@tanstack/react-query"
import productsService from "../services/products.service"

export const useGetProducts = () => {
    const {data} = useQuery({
        queryKey: ['products'],
        queryFn: () => productsService.getAllProducts(),
    })

    return {data}

}
import { useQuery } from "@tanstack/react-query"
import casesService from '../services/cases.service';

export const useGetCasesByCategory = (chosenCategory: string) => {
    const {data} = useQuery({
        queryKey: ['productsByCategory', chosenCategory],
        queryFn: () => casesService.getCasesByCategory(chosenCategory),
    })

    return {data}
}
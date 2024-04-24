import { useQuery } from "@tanstack/react-query"
import casesService from '../services/cases.service';

export const useGetCases = () => {
    const {data} = useQuery({
        queryKey: ['cases'],
        queryFn: () => casesService.getAllCases(),
    })

    return {data}

}
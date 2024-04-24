import axios from "axios"
import { ICases } from '../types/cases.types';

class ProductsService {
    private URL = "http://localhost:4000/cases"

    async getAllCases() {
        return axios.get<ICases[]>(this.URL).then(
            ({data}) => {return data}
        )
    } 

    async getCasesByCategory(chosenCategory: string) {
        return axios.get<ICases[]>(`${this.URL}/?category=${chosenCategory}`).then(
            ({data}) => {return data}
        )
    }
}

const casesService = new ProductsService()

export default casesService
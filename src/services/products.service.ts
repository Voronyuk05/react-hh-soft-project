import axios from "axios"
import { IProducts } from "../types/products.types"

class ProductsService {
    private URL = "http://localhost:4000/products"

    async getAllProducts() {
        return axios.get<IProducts[]>(this.URL).then(
            ({data}) => {return data}
        )
    } 

    async getProductsByCategory(chosenCategory: string) {
        return axios.get<IProducts[]>(`${this.URL}/?category=${chosenCategory}`).then(
            ({data}) => {return data}
        )
    }
}

const productsService = new ProductsService()

export default productsService
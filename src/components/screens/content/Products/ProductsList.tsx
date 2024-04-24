import { useGetProductsByCategory } from '../../../../hooks/useGetProductsByCategory';
import { IProducts, IProductsCard, IProductsListProps } from '../../../../types/products.types'
import { ProductsCard } from '../../../ui/productsCard/ProductsCard'
import styles from './Products.module.scss'

export const ProductsList: React.FC<IProductsListProps> = ({perPage, chosenCategory}):JSX.Element => {
    const {data} = useGetProductsByCategory(chosenCategory)
    
    
    let cardsArray: IProductsCard[] = [] 
    const getSortedCards = () => { 
        data?.map(({cards}: IProducts) => {
            for (let card of cards) {
                if (cardsArray.length < perPage) {
                    cardsArray.push(card)     
                } else {
                    return cardsArray
                }
            }
        })
        return cardsArray
    }

    
    return (
        <ul className={styles.proucts_list}>
            {getSortedCards().map(({title, paragraph}) => (
                <ProductsCard title={title} paragraph={paragraph} />
            ))}
        </ul>
    )
}
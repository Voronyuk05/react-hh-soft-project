import { useState } from 'react'
import { SecondaryButton } from '../../../ui/buttons/SecondaryButton'
import { IProducts } from '../../../../types/products.types';
import { PrimeButton } from '../../../ui/buttons/PrimeButton';
import { ProductsList } from './ProductsList';
import styles from './Products.module.scss'
import { useGetProducts } from '../../../../hooks/useGetProducts';

export const Products: React.FC = ():JSX.Element => {
    const {data} = useGetProducts()
    const [perPage, setPerPage] = useState(6)
    const [chosenCategory, setChosenCategory] = useState('')
    let cardsLength: number = 0

    function getCategoryCardsLength(category: string): number {
        cardsLength = 0
        
        if (data) {
            for (let item  of data) {
                if (item.category.includes(category)) {
                    cardsLength += item.cards.length
                }
            }
        }

        return cardsLength
    }

    return (
        <section className={styles.products}>
            <div className={styles.container}>
                <div className={styles.products_categories}>
                    {data && <SecondaryButton chosenCategory={chosenCategory} category='' onClick={() => setChosenCategory('')}>Все работы ({getCategoryCardsLength('')})</SecondaryButton>}
                    {data && data.map(({category}: IProducts) => (
                        <SecondaryButton chosenCategory={chosenCategory} category={category} onClick={() => setChosenCategory(category)}>{category} ({getCategoryCardsLength(category)})</SecondaryButton>
                    ))}
                </div>
                <ProductsList perPage={perPage} chosenCategory={chosenCategory} />
                {perPage < getCategoryCardsLength(chosenCategory) ? (
                    <PrimeButton onClick={() => setPerPage(perPage + 6)}>
                        Показать ещё
                    </PrimeButton>
                ) : perPage > 6 && perPage > getCategoryCardsLength(chosenCategory) ? (
                    <PrimeButton onClick={() => setPerPage(6)}>
                        Скрыть
                    </PrimeButton>
                ) : ''}
            </div>
        </section>
    )
}
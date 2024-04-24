import { useState } from 'react';
import { useGetCases } from '../../../../hooks/useGetCases';
import { CasesList } from './CasesList'
import { ICases } from '../../../../types/cases.types';
import { H2 } from '../../../ui/headings/H2';
import { PrimeButton } from '../../../ui/buttons/PrimeButton';
import { SecondaryButton } from '../../../ui/buttons/SecondaryButton';
import styles from './Cases.module.scss'

export const Cases: React.FC = (): JSX.Element => {
    const [perPage, setPerPage] = useState(6)
    const [chosenCategory, setChosenCategory] = useState('')
    const {data} = useGetCases()
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
        <section className={styles.cases}>
            <div className={styles.container}>
                <H2 color='black'>НАШИ КЕЙСЫ</H2>
                <div className={styles.categories}>
                    {data && <SecondaryButton chosenCategory={chosenCategory} category='' onClick={() => setChosenCategory('')}>Все работы ({getCategoryCardsLength('')})</SecondaryButton>}
                    {data && data.map(({category}: ICases) => (
                        <SecondaryButton chosenCategory={chosenCategory} category={category} onClick={() => setChosenCategory(category)}>{category} ({getCategoryCardsLength(category)})</SecondaryButton>
                    ))}
                </div>
                <CasesList  chosenCategory={chosenCategory} perPage={perPage} />
                {perPage < getCategoryCardsLength(chosenCategory) ? (
                    <PrimeButton onClick={() => setPerPage(perPage + 6)}>
                        Показать ещё
                    </PrimeButton>
                ) : (
                    <PrimeButton onClick={() => setPerPage(6)}>
                        Скрыть
                    </PrimeButton>
                )}
            </div>
        </section>
    )
}
import { useState } from "react"
import { useGetCases } from "../../../../hooks/useGetCases";
import { PrimeButton } from "../../../ui/buttons/PrimeButton"
import { CasesList } from '../../home/Cases/CasesList';
import styles from './FollowCases.module.scss'
import { H2 } from '../../../ui/headings/H2';


export const FollowCases: React.FC = (): JSX.Element => {
    const [perPage, setPerPage] = useState(4)
    const {data} = useGetCases()
    let cardsLength: number = 0
    

    function getFollowCardsLength(): number {
        cardsLength = 0
        
        if (data) {
            for (let item  of data) {
                if (item.category.includes('Сопровождение')) {
                    cardsLength += item.cards.length
                }
            }
        }
        return cardsLength
    }

    return (
        <section className={styles.follow_cases}>
            <div className={styles.container}>
                <H2 color="black">КЕЙСЫ сопровождения проектов</H2>
                <CasesList perPage={perPage} chosenCategory='Сопровождение' />
                {perPage < getFollowCardsLength() ? (
                    <PrimeButton onClick={() => setPerPage(perPage + 4)}>
                        Показать ещё
                    </PrimeButton>
                ) : (
                    <PrimeButton onClick={() => setPerPage(4)}>
                        Скрыть
                    </PrimeButton>
                )}
            </div>
        </section>
    )
}
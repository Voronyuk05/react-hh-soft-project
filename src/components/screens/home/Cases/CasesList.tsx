import { useGetCasesByCategory } from '../../../../hooks/useGetCasesByCategory';
import { ICases, ICasesCard, ICasesListProps } from '../../../../types/cases.types';
import { CasesCard } from '../../../ui/casesCard/CasesCard';
import styles from './Cases.module.scss'

export const CasesList: React.FC<ICasesListProps> = ({chosenCategory, perPage}):JSX.Element => {
    const {data} = useGetCasesByCategory(chosenCategory) 
    let cardsArray: ICasesCard[] = [] 
    const getSortedCards = () => { 
        data?.map(({cards}: ICases) => {
            
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
        <ul className={styles.cases_list}>
            {getSortedCards().map(({title, customer, task, sideText}) => (
                <CasesCard title={title} customer={customer} task={task} sideText={sideText} />
            ))}
        </ul>
    )
}
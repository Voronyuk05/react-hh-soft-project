import styles from './CasesCard.module.scss'
import { ICasesCard } from '../../../types/cases.types';
import { H4 } from '../headings/H4';
import { H5 } from '../headings/H5';
import { Logo } from '../logo/Logo';
import { CasesButton } from '../buttons/CasesButton';


export const CasesCard: React.FC<ICasesCard> = ({title, customer, task, sideText}):JSX.Element => {
    return (
        <li className={styles.cases_card}>
            <div className={styles.side_bar}>
                <Logo/>
                <H4 color='white' size='small'>{sideText}</H4>
            </div>
            <div className={styles.content}>
                <H4 size='large' color='black'>{title}</H4>
                <div className={styles.wrapper_info}>
                    <H5 color='grey'>Заказчик:</H5>
                    <H5 color='black'>{customer}</H5>
                </div>
                <div className={styles.wrapper_info}>
                    <H5 color='grey'>Задача:</H5>
                    <H5 color='black'>{task}</H5>
                </div>
                <CasesButton>
                    Смотреть работу
                </CasesButton>
            </div>
        </li>
    )
}
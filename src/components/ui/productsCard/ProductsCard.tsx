import styles from './ProductsCard.module.scss'
import { H4 } from '../headings/H4';
import { H5 } from '../headings/H5';
import { CasesButton } from '../buttons/CasesButton';
import { IProductsCard } from '../../../types/products.types';


export const ProductsCard: React.FC<IProductsCard> = ({title, paragraph}):JSX.Element => {
    return (
        <li className={styles.products_card}>
            <div className={styles.products_card_text}>
                <H4 size='large' color='black'>{title}</H4>
                <H5 color='black'>{paragraph}</H5>
            </div>
            <CasesButton>
                Смотреть работу
            </CasesButton>
        </li>
    )
}
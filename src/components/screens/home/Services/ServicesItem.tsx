import { useActions } from "../../../../hooks/useActions";
import { IServicesItem } from "../../../../types/services.types"
import { PrimeButton } from '../../../ui/buttons/PrimeButton';
import { H3 } from '../../../ui/headings/H3';
import { Paragraph } from '../../../ui/paragraph/Paragraph';
import styles from  './Services.module.scss'


export const ServicesItem: React.FC<IServicesItem> = ({title, paragraph, img}): JSX.Element => {
    const {handleToggleModal} = useActions()

    return (
        <li className={styles.card}>
            <img className={styles.card_img} src={img} alt="" />
            <div className={styles.card_text}>
                <H3 color="black">{title}</H3>
                <Paragraph color="black" size="small" >{paragraph}</Paragraph>
            </div>
            <PrimeButton inverse={true} onClick={handleToggleModal}>
                Оставить заявку
            </PrimeButton>
        </li>
    )
}
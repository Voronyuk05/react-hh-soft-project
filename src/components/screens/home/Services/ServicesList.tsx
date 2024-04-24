import { IServicesList } from "../../../../types/services.types"
import { ServicesItem } from './ServicesItem';
import styles from  './Services.module.scss'

export const ServicesList: React.FC<IServicesList> = ({servicesData}): JSX.Element => {
    return (
        <ul className={styles.list}>
            {servicesData.map(({title, paragraph, img}) => (
                <ServicesItem key={title} title={title} paragraph={paragraph} img={img} />
            ))}
        </ul>
    )
}
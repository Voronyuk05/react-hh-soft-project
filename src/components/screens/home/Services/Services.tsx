import { servicesData } from '../../../../data/services.data';
import { H2 } from '../../../ui/headings/H2';
import { ServicesList } from './ServicesList';
import styles from './Services.module.scss'

export const Services: React.FC = (): JSX.Element => {
    return (
        <section className={styles.services}>
            <div className={styles.container}>
                <H2 color='black'>НАШИ УСЛУГИ</H2>
                <ServicesList servicesData={servicesData}/>
            </div>
        </section>
    )
}
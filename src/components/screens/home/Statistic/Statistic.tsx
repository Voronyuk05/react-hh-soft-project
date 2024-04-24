import styles from './Statistic.module.scss'
import { H2 } from '../../../ui/headings/H2';
import { H5 } from '../../../ui/headings/H5';

export const Statistic: React.FC = ():JSX.Element => {
    return (
        <section className={styles.statistic}>
            <div className={styles.container}>
                <H2 color='black'>HH-SOFT В ЦИФРАХ</H2>
                <div className={styles.content}>
                    <div className={styles.wrapper_info}>
                        <p className={styles.amount}>10</p>
                        <H5 color='black'>лет - средний опыт работы наших BIM-менеджеров</H5>
                    </div>
                    <div className={styles.wrapper_info}>
                        <p className={styles.amount}>150</p>
                        <H5 color='black'>проектировщиков мы обучили работе в Revil</H5>
                    </div>
                    <div className={styles.wrapper_info}>
                        <p className={styles.amount}>90<span className={styles.measure}>%</span></p>
                        <H5 color='black'>наших клиентов повторно заказывают наши услуги</H5>
                    </div>
                    <div className={styles.wrapper_info}>
                        <p className={styles.amount}>5</p>
                        <H5 color='black'>лет мы успешно внедряем BIM</H5>
                    </div>
                </div>
            </div>
        </section>
    )
}
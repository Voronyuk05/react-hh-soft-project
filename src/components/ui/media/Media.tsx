import preview from '../../../images/media_preview_img.png'
import { H2 } from '../headings/H2';
import styles from './Media.module.scss'
import { PrimeButton } from '../buttons/PrimeButton';
import { H5 } from '../headings/H5';


export const Media = () => {
    return (
        <section className={styles.media}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <H2 color='black'>Посмотрите наши бесплатные уроки по bim на youtube</H2>
                </div>
                <div className={styles.content}>
                    <div className={styles.media_card}>
                        <img className={styles.media_image} src={preview} alt="" />
                        <div className={styles.media_card_text}>
                            <H5 color='black'>Ограждение из элементов в Revit</H5>
                            <PrimeButton inverse={true}>
                                Смотреть урок
                            </PrimeButton>
                        </div>
                    </div>
                    <div className={styles.media_card}>
                        <img className={styles.media_image} src={preview} alt="" />
                        <div className={styles.media_card_text}>
                            <H5 color='black'>Ограждение из элементов в Revit</H5>
                            <PrimeButton inverse={true}>
                                Смотреть урок
                            </PrimeButton>
                        </div>
                    </div>
                    <div className={styles.media_card}>
                        <img className={styles.media_image} src={preview} alt="" />
                        <div className={styles.media_card_text}>
                            <H5 color='black'>Ограждение из элементов в Revit</H5>
                            <PrimeButton inverse={true}>
                                Смотреть урок
                            </PrimeButton>
                        </div>
                    </div>
                    <div className={styles.media_card}>
                        <img className={styles.media_image} src={preview} alt="" />
                        <div className={styles.media_card_text}>
                            <H5 color='black'>Ограждение из элементов в Revit</H5>
                            <PrimeButton inverse={true}>
                                Смотреть урок
                            </PrimeButton>
                        </div>
                    </div>
                </div>
                <PrimeButton inverse={true}>
                    Узнать больше про обучение
                </PrimeButton>
            </div>
        </section>
    )
}
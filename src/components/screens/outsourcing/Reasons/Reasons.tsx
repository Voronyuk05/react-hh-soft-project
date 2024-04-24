import message from '../../../../images/message_icon.png'
import settings from  '../../../../images/settings_icon.png'
import libriary from '../../../../images/libriary_icon.png'
import document from '../../../../images/document_icon.png'
import styles from './Reasons.module.scss'
import { H2 } from '../../../ui/headings/H2';
import { H5 } from '../../../ui/headings/H5';

export const Reasons: React.FC = (): JSX.Element => {
    return (
        <section className={styles.reasons}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <H2 color='black'>Почему стоит доверить BIM-менеджмент компании hh-soft</H2>
                </div>
                <div className={styles.content}>
                        <div className={styles.reason_card}>
                            <div className={styles.wrapper_icon}>
                                <img src={message} alt="" />
                            </div>
                            <H5 color='black'> Менеджер на связи онлайн с 8:00 до 18:00 и готов ответить на любой вопрос </H5>
                        </div>
                        <div className={styles.reason_card}>
                            <div className={styles.wrapper_icon}>
                                <img src={settings} alt="" />
                            </div>
                            <H5 color='black'> Менеджер на связи онлайн с 8:00 до 18:00 и готов ответить на любой вопрос </H5>
                        </div>
                        <div className={styles.reason_card}>
                            <div className={styles.wrapper_icon}>
                                <img src={libriary} alt="" />
                            </div>
                            <H5 color='black'> Менеджер на связи онлайн с 8:00 до 18:00 и готов ответить на любой вопрос </H5>
                        </div>
                        <div className={styles.reason_card}>
                            <div className={styles.wrapper_icon}>
                                <img src={document} alt="" />
                            </div>
                            <H5 color='black'> Менеджер на связи онлайн с 8:00 до 18:00 и готов ответить на любой вопрос </H5>
                        </div>
                    </div>
            </div>
        </section>
    )
}
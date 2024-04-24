import styles from './SocialsGaped.module.scss'
import vk from '../../../images/vk.svg'
import youtube from '../../../images/youtube.svg'
import telegram from '../../../images/telegram.svg'

export const SocialsGaped = () => {
    return (
        <div className={styles.wrapper_socials}>
            <div className={`${styles.social} ${styles.vk_img} `}  onClick={() => {window.location.href = 'https://m.vk.com/'}}>
                <img className={styles.social_img} src={vk} alt="" />
            </div>
            <div className={`${styles.social} ${styles.youtube_img}`} onClick={() => {window.location.href = 'https://www.youtube.com/'}}>
                <img className={styles.social_img} src={youtube} alt="" />
            </div>
            <div className={`${styles.social} ${styles.telegram_img}`}  onClick={() => {window.location.href = 'https://web.telegram.org/a/'}} >
                <img className={styles.social_img} src={telegram} alt="" />
            </div>
        </div>
    )
}
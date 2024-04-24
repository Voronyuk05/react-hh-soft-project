import cross from '../../../images/cross.png'
import styles from './Buttons.module.scss'


export const CloseButton: React.FC<{onClick?(): void}> = ({...props}): JSX.Element => {
    
    return (
        <button  className={styles.close_button}>
            <img {...props} className={styles.cross_img} src={cross} alt="cross" />
        </button>
    )
}
import arrow from '../../../images/arrow.png'
import styles from './Buttons.module.scss'


export const CasesButton: React.FC<{children: string, onClick?: () => void}> = ({children, ...props}): JSX.Element => {
    
    return (
        <button {...props}  className={styles.cases_button}>
            <div className={styles.wrapper_arrow}>
                <img id='arrow'  src={arrow} alt="cross" />
            </div>
            {children}
        </button>
    )
}
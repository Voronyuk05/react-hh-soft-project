import { ReactElement, ReactNode, ReactPortal } from 'react'
import styles from  './Buttons.module.scss'


export const SecondaryButton: React.FC<{children: string | ReactNode, chosenCategory?: string, category: string, onClick?(): void}> = 
({children, chosenCategory, category, ...props}): JSX.Element => {
    return (
        <button className={`${styles.secondary_button} ${category === chosenCategory ? styles.secondary_button_active : ''}`} {...props}>
            {children}
        </button>
    )
}
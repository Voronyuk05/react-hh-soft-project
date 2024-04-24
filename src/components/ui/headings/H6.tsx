import { ReactNode } from 'react'
import styles from './Headings.module.scss'

export const H6: React.FC<{children: string | ReactNode, size?: string, color: string}> = ({children, size, color}): JSX.Element => {
    return (
        <h6 className={`${styles.h6} ${color === 'white' ? 'text_white' : color === 'black' ? 'text_black' : color === 'grey' ? 'text_grey' : null}`}>{children}</h6>
    )
}
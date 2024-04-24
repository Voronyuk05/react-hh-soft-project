import { ReactNode } from 'react'
import styles from  './Headings.module.scss'

export const H4: React.FC<{children: string, color: string, size?: string, selected?: string, id?: string, 
    onClick?(event: React.MouseEventHandler<HTMLHeadingElement> | ReactNode | React.MouseEvent<HTMLHeadingElement>): void}> 
    = ({children, color, size, selected, ...props}): JSX.Element => {
    return (
        <h4 {...props} className={`${styles.h4} ${color === 'white' ? 'text_white' : color === 'black' ? 'text_black' : null} 
        ${size === 'large' ? styles.h4_large : size === 'small' ? styles.h4_small : ''} ${selected === props.id && selected? 'text_primary' : ''}`}>
            {children}
        </h4>
    )
}
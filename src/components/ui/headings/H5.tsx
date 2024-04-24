import { ReactNode, RefObject } from 'react'
import styles from  './Headings.module.scss'

export const H5: React.FC<{children: string | ReactNode, color: string, ref?: RefObject<HTMLHeadingElement>
    onClick?(event: React.MouseEventHandler<HTMLHeadingElement> | ReactNode | React.MouseEvent<HTMLHeadingElement>): void}> 
    = ({children, color, ...props}): JSX.Element => {
    return (
        <h5 {...props}  className={`${styles.h5} ${color === 'white' ? 'text_white' : color === 'black' ? 'text_black' : color === 'grey' ? 'text_grey' : null}`}>
            {children}
        </h5>
    )
}
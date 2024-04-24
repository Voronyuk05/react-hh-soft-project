import styles from './Paragraph.module.scss'

export const Paragraph: React.FC<{children: string, size?: string, color: string}> = ({children, color, size}): JSX.Element => {
    return (
        <p className={`${styles.paragraph} 
        ${!size ? '' : size === 'small' ? styles.small : null}
        ${color === 'white' ? 'text_white' : color === 'black' ? 'text_black' : null}`}>
            {children}
        </p>
    )
}
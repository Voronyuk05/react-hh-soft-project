import styles from './Headings.module.scss'

export const H3: React.FC<{children: string, color: string}> = ({children, color}): JSX.Element => {
    return (
        <h3 className={`${styles.h3} ${color === 'white' ? 'text_white' : color === 'black' ? 'text_black' : null}`}>{children}</h3>
    )
}
import styles from './Headings.module.scss'


export const H2: React.FC<{children: string, color: string}> = ({children, color}): JSX.Element => {
    return (
        <h2 className={`${styles.h2} ${color === 'white' ? 'text_white' : color === 'black' ? 'text_black' : null}`}>{children}</h2>
    )
}
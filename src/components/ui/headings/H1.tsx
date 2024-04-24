import styles from './Headings.module.scss'

export const H1: React.FC<{children: string, color: string}> = ({children, color}): JSX.Element => {
    return (
        <h1 className={`${styles.h1} ${color === 'white' ? 'text_white' : color === 'black' ? 'text_black' : null}`}>{children}</h1>
    )
}
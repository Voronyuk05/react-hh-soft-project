import styles from './Inputs.module.scss'


export const Input: React.FC<{placeholder?: string, name?: string, value?: string, type?: string, onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void;}> = ({...props}): JSX.Element => {
    return (
        <input className={styles.input} {...props}  />
    )
}
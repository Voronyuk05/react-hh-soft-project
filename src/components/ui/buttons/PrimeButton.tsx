import styles from  './Buttons.module.scss'


export const PrimeButton: React.FC<{children: string, inverse?: boolean, onClick?(): void}> = 
({children, inverse, ...props}): JSX.Element => {
    return (
        <>
        {inverse ? (
            <button className={styles.prime_button_inverse} {...props}>
                {children}
            </button>
        ) : (
            <button className={styles.prime_button} {...props}>
                {children}
            </button>
        )}
        </>

    )
}
import styles from  './Ticker.module.scss'

export const Ticker: React.FC = (): JSX.Element => {
    return (
        <div className={styles.ticker}>
            <div className={styles.wrapper__tickers}>
                <p  className={styles.ticker__item}>DYNAMO | BIM ТЕХНОЛОГИИ | КУРСЫ ПО ПРОДУКТАМ | AUTODESK | ПЛАГИНЫ REVIT |</p>
                <p  className={styles.ticker__item}>DYNAMO | BIM ТЕХНОЛОГИИ | КУРСЫ ПО ПРОДУКТАМ | AUTODESK | ПЛАГИНЫ REVIT |</p>
                <p  className={styles.ticker__item}>DYNAMO | BIM ТЕХНОЛОГИИ | КУРСЫ ПО ПРОДУКТАМ | AUTODESK | ПЛАГИНЫ REVIT |</p>
            </div>
        </div>
    )
}
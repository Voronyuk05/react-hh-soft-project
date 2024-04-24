import styles from './SecondaryHero.module.scss'
import { H1 } from '../headings/H1';
import { Link } from '../link/Link';

export const SecondaryHero: React.FC<{pageName: string}> = ({pageName}): JSX.Element => {
    return (
        <section className={styles.secondary_hero}>
            <div className={styles.container}>
                <div className={styles.path}>
                    <Link href='/' >Главная </Link>
                    {' >'}
                    <Link href='/content' >{pageName}</Link>
                </div>
                <H1 color='white'>{pageName}</H1>
            </div>
        </section>
    )
}


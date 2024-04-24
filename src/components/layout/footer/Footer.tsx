import styles from './Footer.module.scss'
import { Logo } from '../../ui/logo/Logo';
import { H5 } from '../../ui/headings/H5';
import { H6 } from '../../ui/headings/H6';
import { Socials } from '../../ui/socials/Socials';
import { Link } from '../../ui/link/Link';

export const Footer: React.FC = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer_info}>
                    <Logo/>
                    <div className={styles.info_col}>
                        <H6 color='white'>Телефон:</H6>
                        <H5 color='white'>+7 (982) 623 26 17</H5>
                    </div>
                    <div className={styles.info_col}>
                        <H6 color='white'>E-mail:</H6>
                        <H5 color='white'>admin@hh-soft.ru</H5>
                    </div>
                    <Socials/>
                    <div className={styles.info_nav}>
                        <Link href='/content'>BIM-контент</Link>
                        <Link href='/outsourcing'>Сопровождение BIM проектов</Link>
                        <Link href='/training'>Обучение</Link>
                        <Link href='/contacts'>Контакты</Link>
                    </div>
                </div>
                <span className={styles.line}></span>
                <div className={styles.footer_rights}>
                    <H5 color='white'>© HH-soft 2000-2023. Все права защищены</H5>
                    <H5 color='white'><span className='text_primary'>Политика конфиденциальности</span></H5>
                    <H5 color='white'>Разработка и продвижение сайта — <span className='text_primary'>«WTStudio»</span></H5>
                </div>
            </div>
        </footer>
    )
}
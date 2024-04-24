import { Footer } from '../../layout/footer/Footer'
import { Header } from '../../layout/header/Header'
import { Main } from '../../layout/main/Main'
import { SecondaryHero } from '../../ui/secondaryHero/SecondaryHero'
import styles from './Contacts.module.scss'
import { CallForm } from '../../ui/callForm/CallForm';

export const Contacts: React.FC = (): JSX.Element => {
    return (
        <div className={styles.contacts}>
            <Header />
            <Main>
                <>
                    <SecondaryHero pageName="Контакты"/>
                    <CallForm/>
                </>
            </Main>
            <Footer/>
        </div>
    )
}
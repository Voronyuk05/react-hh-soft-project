import { Header } from "../../layout/header/Header"
import { Main } from '../../layout/main/Main';
import { DiscussForm } from "../../ui/discussForm/DiscussForm";
import { SecondaryHero } from '../../ui/secondaryHero/SecondaryHero';
import { Footer } from '../../layout/footer/Footer';
import styles from './Content.module.scss'
import { Products } from "./Products/Products";

export const Content: React.FC = (): JSX.Element => {
    return (
        <div className={styles.content_page}>
            <Header />
            <Main>
                <>
                    <SecondaryHero pageName="BIM-контент"/>
                    <Products/>
                    <DiscussForm />
                </>
            </Main>
            <Footer/>
        </div>
    )
}

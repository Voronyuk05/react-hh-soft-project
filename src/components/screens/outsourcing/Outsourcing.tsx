import { Footer } from "../../layout/footer/Footer"
import { Header } from "../../layout/header/Header"
import { Main } from "../../layout/main/Main"
import { DiscussForm } from "../../ui/discussForm/DiscussForm"
import { SecondaryHero } from "../../ui/secondaryHero/SecondaryHero"
import { Outline } from "./Outline/Outline"
import styles from './Outsourcing.module.scss'
import { FollowCases } from './FollowCases/FollowCases';
import { Reasons } from './Reasons/Reasons';

export const Outsourcing: React.FC = ():JSX.Element => {
    return (
        <div className={styles.outsourcing}>
            <Header />
            <Main>
                <>
                    <SecondaryHero pageName="BIM-аутсорсинг"/>
                    <Outline />
                    <FollowCases/>
                    <Reasons/>
                    <DiscussForm />
                </>
            </Main>
            <Footer/>
        </div>
    )
}
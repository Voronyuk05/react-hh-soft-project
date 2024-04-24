import { Header } from "../../layout/header/Header"
import { Hero } from './Hero/Hero';
import { Main } from "../../layout/main/Main";
import { Services } from "./Services/Services";
import { Modal } from '../../ui/modal/Modal';
import { Abilities } from "./Abilities/Abilities";
import { Cases } from "./Cases/Cases";
import { Statistic } from "./Statistic/Statistic";
import { Media } from "../../ui/media/Media";
import { DiscussForm } from "../../ui/discussForm/DiscussForm";
import { Footer } from '../../layout/footer/Footer';
import './Home.scss'

export const Home: React.FC = (): JSX.Element => {
    return (
        <div className="homepage">
            <Modal />
            <Header />
            <Main>
                <>
                    <Hero />
                    <Services/>
                    <Abilities/>
                    <Cases />
                    <Statistic />
                    <Media />
                    <DiscussForm />
                </>
            </Main>
            <Footer/>
        </div>
    )
}
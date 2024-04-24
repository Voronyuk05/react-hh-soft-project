import { Ticker } from "./Ticker/Ticker";
import { PrimeButton } from "../../../ui/buttons/PrimeButton"
import { Paragraph } from '../../../ui/paragraph/Paragraph';
import { H1 } from '../../../ui/headings/H1';
import { useActions } from "../../../../hooks/useActions";
import './Hero.scss'

export const Hero: React.FC = (): JSX.Element => {
    const {handleToggleModal} = useActions()

    return (
        <section className="hero">
            <div className="container">
                <div className="wrapper-text">
                    <H1 color="white">Растим показатели вашего бизнеса</H1>
                    <Paragraph color="white">
                        У всех наших BIM менеджеров опыт работы с компаниями более 10 лет. Поэтому мы превращаем наш многолетний опыт BIM в ваш успех!
                    </Paragraph>
                    <div className="wrapper-button">    
                        <PrimeButton inverse={true} onClick={handleToggleModal}>
                            Обсудить проект
                        </PrimeButton>
                        <PrimeButton inverse={false} onClick={() => {window.location.href = './training'}}>
                            Выбрать курс
                        </PrimeButton>
                    </div>
                </div>
            </div>
            <Ticker />
        </section>
    )
}
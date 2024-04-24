import { Footer } from '../../layout/footer/Footer'
import { Header } from '../../layout/header/Header'
import { Main } from '../../layout/main/Main'
import { DiscussForm } from '../../ui/discussForm/DiscussForm'
import { SecondaryHero } from '../../ui/secondaryHero/SecondaryHero'
import { Media } from '../../ui/media/Media';
import { Courses } from './Courses/Courses';
import styles from './Training.module.scss'
import { ModalCourses } from '../../ui/modalCourses/ModalCourses'

export const Training: React.FC = ():JSX.Element => {
    return (
        <div className={styles.training}>
            <ModalCourses/>
            <Header />
            <Main>
                <>
                    <SecondaryHero pageName="Обучение"/>
                    <Courses type='free' sectionTitle='Бесплатные курсы'/>
                    <Courses type='paid' sectionTitle='Платные курсы'/>
                    <Media/>
                    <DiscussForm />
                </>
            </Main>
            <Footer/>
        </div>
    )
}
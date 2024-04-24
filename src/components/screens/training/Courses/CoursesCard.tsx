import { CasesButton } from '../../../ui/buttons/CasesButton'
import styles from './Courses.module.scss'
import { Paragraph } from '../../../ui/paragraph/Paragraph';
import { H4 } from '../../../ui/headings/H4';
import { useActions } from '../../../../hooks/useActions';

export const CoursesCard:React.FC<{img: string, title: string, paragraph: string}> = ({img, title, paragraph}): JSX.Element => {
    const {handleToggleModalCourses} = useActions()
    return (
        <li className={styles.courses_card}>
            <div className={styles.side_bar}>
                <img className={styles.side_bar__img} src={img} alt="" />
            </div>
            <div className={styles.content}>
                <div className={styles.wrapper_info}>
                    <H4 size='large' color='black'>{title}</H4>
                    <Paragraph color='black'>{paragraph}</Paragraph>
                </div>
                <CasesButton onClick={handleToggleModalCourses}>
                    Смотреть работу
                </CasesButton>
            </div>
        </li>
    )
}
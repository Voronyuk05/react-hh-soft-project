import { ICases } from '../../../../types/cases.types'
import { ICourseItem } from '../../../../types/courses.types'
import styles from './Courses.module.scss'
import { CoursesCard } from './CoursesCard'

export const CoursesList: React.FC<{coursesType: ICourseItem[]}> = ({coursesType}): JSX.Element => {
    return (
        <ul className={styles.list}>
            {coursesType.map(({img, title, paragraph}) => (
                <CoursesCard img={img} title={title} paragraph={paragraph} />
            ))}
        </ul>
    )
}
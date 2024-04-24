import styles from './Courses.module.scss'
import { H2 } from '../../../ui/headings/H2';
import { coursesData } from '../../../../data/courses.data';
import { CoursesList } from './CoursesList';

export const Courses: React.FC<{sectionTitle: string, type: string}> = ({sectionTitle, type}): JSX.Element => {
    const coursesType = coursesData[type as keyof typeof coursesData]
    
    

    return (
        <section className={styles.courses}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <H2 color='black'>{sectionTitle}</H2>
                </div>
                <CoursesList coursesType={coursesType}/>
            </div>
        </section>
    )
}
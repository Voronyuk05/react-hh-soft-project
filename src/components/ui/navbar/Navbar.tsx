import './Navbar.scss'
import { Link } from '../link/Link';

export const Navbar: React.FC<{checked?: boolean, handleSetChecked?: () => void}> = ({checked, handleSetChecked}): JSX.Element => {
    return (
        <nav className={`navbar ${checked ? 'nav_checked' : ''}`}>
            <Link href='/content'>BIM-контент</Link>
            <Link href='/outsourcing'>Сопровождение BIM проектов</Link>
            <Link href='/training'>Обучение</Link>
            <Link href='/contacts'>Контакты</Link>
        </nav>
    )
}
import './Logo.scss'
import logo from '../../../images/logo.png'


export const Logo:React.FC = (): JSX.Element => {
    return (
        <img onClick={() => {window.location.href = '/'}} className='logo' src={logo} alt="" />
    )
}
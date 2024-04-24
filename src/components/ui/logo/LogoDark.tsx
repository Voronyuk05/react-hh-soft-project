import './Logo.scss'
import logoDark from '../../../images/logo-dark.svg'


export const LogoDark:React.FC = (): JSX.Element => {
    return (
        <img onClick={() => {window.location.href = '/'}} className='logo_dark' src={logoDark} alt="" />
    )
}
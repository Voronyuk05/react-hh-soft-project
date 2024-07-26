import  './Header.scss'
import { Logo } from '../../ui/logo/Logo'
import { Navbar } from '../../ui/navbar/Navbar'
import { SocialContacts } from '../../ui/socialContacts/SocialContacts'
import { useState } from 'react'
import { LogoDark } from '../../ui/logo/LogoDark'


export const Header: React.FC = (): JSX.Element => {
    const [isChecked, setIsChecked] = useState(false)

    const handleSetChecked = () => {
        setIsChecked(!isChecked)
    }

    return (
        <header className='header'>
            {isChecked ? <LogoDark /> : <Logo/>}
            <div className={`burger ${isChecked ? 'checked' : ''}`} onClick={() => handleSetChecked()}>
                    <span></span>
            </div>
            <Navbar checked={isChecked} handleSetChecked={handleSetChecked}/>
            <SocialContacts checked={isChecked}/>
        </header>
    )
}
import './Socials.scss'
import vk from '../../../images/vk.svg'
import youtube from '../../../images/youtube.svg'
import telegram from '../../../images/telegram.svg'

export const Socials = () => {
    return (
        <div className='wrapper-socials'>
            <div className='social vk_img'  onClick={() => {window.location.href = 'https://m.vk.com/'}}>
                <img className='social_img' src={vk} alt="" />
            </div>
            <div className='social youtube_img' onClick={() => {window.location.href = 'https://www.youtube.com/'}}>
                <img className='social-img' src={youtube} alt="" />
            </div>
            <div className='social telegram_img' onClick={() => {window.location.href = 'https://web.telegram.org/a/'}} >
                <img className='social-img'src={telegram} alt="" />
            </div>
        </div>
    )
}
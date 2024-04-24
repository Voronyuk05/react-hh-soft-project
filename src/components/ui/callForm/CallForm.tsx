import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import userImg from '../../../images/user_img.png'
import { SocialsGaped } from '../socialsGaped/SocialsGaped';
import { H2 } from '../headings/H2';
import { Input } from '../input/Input';
import { H4 } from '../headings/H4';
import { H5 } from '../headings/H5';
import { PrimeButton } from '../buttons/PrimeButton';
import { H6 } from '../headings/H6';
import styles from './CallForm.module.scss'

export const CallForm: React.FC = ():JSX.Element => {
    const {handleChangeCallFormInput, handleSubmitCallForm} = useActions()
    const {message, name, email, number} = useTypedSelector((state) => state.callForm)
    
    return (
        <form action="" className={styles.form} onSubmit={handleSubmitCallForm}>
            <div className={styles.wrapper_text}>
                <H2 color='black'>Свяжитесь с нами, и мы проконсультируем вас по всем вопросам</H2>
                <div className={styles.form_info}>
                    <div className={styles.user}>
                        <img className={styles.user_img} src={userImg} alt="" />
                        <H4 color='black'>Александр Кульгинский</H4>
                        <H5 color='black'>Управляющий партнер</H5>
                    </div>
                    <div>
                        <H4 color='black'>admin@hh-soft.ru</H4>
                        <H4 color='black'>+7 (982) 623 26 17</H4>
                    </div>
                    <SocialsGaped/>
                </div>
            </div>
            <div className={styles.form_data}>
                <textarea className={styles.text_area} name="message" value={message} onChange={handleChangeCallFormInput} placeholder='Краткое описание задачи'></textarea>
                <Input name='name' type='text' placeholder='Ваше имя' value={name} onChange={handleChangeCallFormInput}/>
                <Input name='email' type='email' placeholder='Электронная почта' value={email} onChange={handleChangeCallFormInput}/>
                <Input name='number' type='tel' placeholder='Телефон' value={number} onChange={handleChangeCallFormInput}/>
                <PrimeButton  inverse={true}>Обсудить проект</PrimeButton>
                <H6 color='grey'>Нажимая на кнопку, вы соглашаетесь <span className='text_primary'>с Политикой конфиденциальности</span></H6>
            </div>
        </form>
    )
}
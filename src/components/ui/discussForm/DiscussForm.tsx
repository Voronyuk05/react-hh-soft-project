import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import userImg from '../../../images/user_img.png'
import { H2 } from '../headings/H2';
import { Input } from '../input/Input';
import { H4 } from '../headings/H4';
import { H5 } from '../headings/H5';
import { PrimeButton } from '../buttons/PrimeButton';
import { H6 } from '../headings/H6';
import styles from './DiscussForm.module.scss'

export const DiscussForm: React.FC = ():JSX.Element => {
    const {handleChangeDuscussFormInput, handleSubmitDiscussForm} = useActions()
    const {message, name, email, number, adress} = useTypedSelector((state) => state.discussform)
    
    return (
        <form action="" className={styles.form} onSubmit={handleSubmitDiscussForm}>
            <H2 color='black'>Обсудить проект</H2>
            <div className={styles.form_content}>
                <div className={styles.form_data}>
                    <textarea className={styles.text_area} name="message" value={message} onChange={handleChangeDuscussFormInput} placeholder='Краткое описание задачи'></textarea>
                    <Input name='name' type='text' placeholder='Ваше имя' value={name} onChange={handleChangeDuscussFormInput}/>
                    <Input name='email' type='email' placeholder='Электронная почта' value={email} onChange={handleChangeDuscussFormInput}/>
                    <Input name='number' type='tel' placeholder='Телефон' value={number} onChange={handleChangeDuscussFormInput}/>
                    <Input name='adress' placeholder='Адрес сайта (?)' value={adress} onChange={handleChangeDuscussFormInput}/>
                </div>
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
                    <H5 color='black'>Ответим в течение двух рабочих дней</H5>
                    <PrimeButton  inverse={true}>Обсудить проект</PrimeButton>
                    <H6 color='grey'>Нажимая на кнопку, вы соглашаетесь <span className='text_primary'>с Политикой конфиденциальности</span></H6>
                </div>
            </div>
        </form>
    )
}
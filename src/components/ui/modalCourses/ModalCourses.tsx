import { useTypedSelector } from '../../../hooks/useTypedSelector'
import check_mark from '../../../images/mark.png'
import { CloseButton } from '../buttons/CloseButton';
import { useActions } from '../../../hooks/useActions';
import { PrimeButton } from '../buttons/PrimeButton';
import { Input } from '../input/Input';
import { H6 } from '../headings/H6';
import { H4 } from '../headings/H4';
import { Paragraph } from '../paragraph/Paragraph';
import styles from './ModalCourses.module.scss'

export const ModalCourses: React.FC = ():JSX.Element => {
    const {isShowed, name, number, email, isSent} = useTypedSelector((state) => state.modalCourses)
    const {handleModalCoursesSubmit, handleToggleModalCourses, handleChangeModalCoursesInput} = useActions()

    return (
        <>
            {isShowed ? (
                <div className={styles.modal_backdrop}>
                    <div className={styles.modal_container}>
                        {isSent ? (
                            <>
                                <CloseButton onClick={handleToggleModalCourses}/>
                                <img src={check_mark} alt="" />
                                <div className={styles.modal_text}>
                                    <H4 color='black' size='large'>Спасибо!</H4>
                                    <Paragraph color='black'>Ваша заявка отправлена. В ближайшее время наш менеджер свяжется с вами</Paragraph>
                                </div>
                            </>
                        ) : (
                            <>
                                <CloseButton onClick={handleToggleModalCourses}/>
                                <div className={styles.modal_text}>
                                <H4 color='black' size='large'>Чтобы записаться на курс, заполните форму</H4>
                                </div>
                                <div className={styles.modal_actions}>
                                    <Input name='name' value={name} placeholder='Ваше имя' onChange={handleChangeModalCoursesInput} />
                                    <Input name='number' value={number} placeholder='Телефон' onChange={handleChangeModalCoursesInput} />
                                    <Input name='email' value={email} placeholder='E-mail' onChange={handleChangeModalCoursesInput} />
                                    <PrimeButton inverse={true} onClick={handleModalCoursesSubmit}>
                                        Обсудить проект
                                    </PrimeButton>
                                </div>
                                <H6  color='black'>Нажимая на кнопку, вы соглашаетесь <span className='text_primary'>с Политикой конфиденциальности</span></H6>
                            </>
                        )}
                    </div>
                </div>
            ) : null}
        </>
    )
}
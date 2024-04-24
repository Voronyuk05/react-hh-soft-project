import { useTypedSelector } from '../../../hooks/useTypedSelector'
import check_mark from '../../../images/mark.png'
import styles from './Modal.module.scss'
import { CloseButton } from '../buttons/CloseButton';
import { useActions } from '../../../hooks/useActions';
import { PrimeButton } from '../buttons/PrimeButton';
import { Input } from '../input/Input';
import { H6 } from '../headings/H6';
import { H4 } from '../headings/H4';
import { Paragraph } from '../paragraph/Paragraph';

export const Modal: React.FC = ():JSX.Element => {
    const {isShowed, name, number, isSent} = useTypedSelector((state) => state.modal)
    const {handleToggleModal, handleChangeInput, handleSubmit} = useActions()

    return (
        <>
            {isShowed ? (
                <div className={styles.modal_backdrop}>
                    <div className={styles.modal_container}>
                        {isSent ? (
                            <>
                                <CloseButton onClick={handleToggleModal}/>
                                <img src={check_mark} alt="" />
                                <div className={styles.modal_text}>
                                    <H4 color='black' size='large'>Спасибо!</H4>
                                    <Paragraph color='black'>Ваша заявка отправлена. В ближайшее время наш менеджер свяжется с вами</Paragraph>
                                </div>
                            </>
                        ) : (
                            <>
                                <CloseButton onClick={handleToggleModal}/>
                                <div className={styles.modal_text}>
                                <H4 color='black' size='large'>Заполните форму</H4>
                                <Paragraph color='black'>Наш менеджер перезвонит вам, подробно обсудит с вами задачу и сориентирует по стоимости</Paragraph>
                                </div>
                                <div className={styles.modal_actions}>
                                    <Input name='name' value={name} placeholder='Ваше имя' onChange={handleChangeInput} />
                                    <Input name='number' value={number} placeholder='Телефон' onChange={handleChangeInput} />
                                    <PrimeButton inverse={true} onClick={handleSubmit}>
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
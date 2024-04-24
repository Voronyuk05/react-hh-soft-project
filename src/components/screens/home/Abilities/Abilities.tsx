import { useState } from 'react';
import building from '../../../../images/abilities_building.png'
import { H2 } from '../../../ui/headings/H2';
import { H4 } from '../../../ui/headings/H4';
import styles from './Abilities.module.scss'

export const Abilities: React.FC = (): JSX.Element => {
    const [selected, setSelected] = useState('')

    function handleChangeSelected(e: React.MouseEvent<HTMLHeadingElement>) {
        setSelected(e.currentTarget.id)
        
    }

    return (
        <section className={styles.abilities}>
            <div className={styles.container}>
                <div className={styles.abilities_text}>
                    <H2 color='black'>Что мы умеем:</H2>
                    <div className={styles.abilities_text__item}>
                        <div className={styles.abilities_text_img}>
                            <img className={styles.abilities_img} src={building} alt="" />
                        </div>
                        <H4 selected={selected} color='black' id='1' onClick={handleChangeSelected}>Создавать BIM библиотеки</H4>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.abilities_text__item}>
                        <div className={styles.abilities_text_img}>
                            <img className={styles.abilities_img} src={building} alt="" />
                        </div>
                        <H4 selected={selected} color='black' id='2'  onClick={handleChangeSelected}>Проектные компании</H4>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.abilities_text__item}>
                        <div className={styles.abilities_text_img}>
                            <img className={styles.abilities_img} src={building} alt="" />
                        </div>
                        <H4 selected={selected} color='black' id='3'  onClick={handleChangeSelected}>Проектные институты</H4>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.abilities_text__item}>
                        <div className={styles.abilities_text_img}>
                            <img className={styles.abilities_img} src={building} alt="" />
                        </div>
                        <H4 selected={selected} color='black' id='4'  onClick={handleChangeSelected}>Архитектурные бюро и мастерские</H4>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.abilities_text__item}>
                        <div className={styles.abilities_text_img}>
                            <img className={styles.abilities_img} src={building} alt="" />
                        </div>
                        <H4 selected={selected} color='black' id='5'  onClick={handleChangeSelected}>Компании застройщика</H4>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <div className={styles.abilities_wrapper_img}>
                    <img className={styles.abilities_img} src={building} alt="" />
                </div>
            </div>
        </section>
    )
}
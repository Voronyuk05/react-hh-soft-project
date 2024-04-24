import { useEffect } from 'react';
import { stepsData } from '../../../../data/steps.data';
import { H5 } from '../../../ui/headings/H5';
import styles from './Outline.module.scss'

export const Outline = () => {
    useEffect(() => {
        if (window.screen.width > 380) {
            window.addEventListener('scroll', (e) => {
                const fixedTextNode = document.querySelector(`.${styles.fixed_text}`)
                const numbersNode = document.querySelectorAll(`.${styles.step}`)
                const expect = e.target?.scrollingElement.scrollTop - ((window.screen.width * 0.20) + 70)   
                const maxPosition = 760 + (window.screen.width * 0.20)
        
                if (expect > 0 && fixedTextNode && maxPosition > e.target?.scrollingElement.scrollTop) {
                    fixedTextNode.style.top = `${expect}px`
                }
        
                const observer = new IntersectionObserver((entries) => {
                    
                    for (let entry of entries) {
                        entry.target.classList.remove(styles.active)
                    }
        
                    for (let entry of entries) {
                        if (entry.intersectionRatio < 0.85) {
                            entry.target.classList.remove(styles.active)   
                        } if (entry.intersectionRatio > 0.85) {
                            entry.target.classList.add(styles.active)
                            return
                        } 
                    }
                    
        
                    
                })
                
                numbersNode.forEach(node => observer.observe(node))
            })
        }
    })


    return (
        <section className={styles.outline}>
            <div className={styles.container}>
                <div className={styles.fixed_text}>
                    <p>Сопроводим BIM-проект любой сложности</p>
                </div>
                <div  className={styles.wrapper_steps}>
                    {stepsData.map(({number, text}) => (
                        <div className={styles.step}>
                            <p className={styles.number}>{number}</p>
                            <H5  color='black'>{text}</H5>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
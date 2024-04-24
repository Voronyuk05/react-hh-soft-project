import styles from './SocialContacts.module.scss'
import { H4 } from '../headings/H4';
import { Socials } from '../socials/Socials';
import { SocialsGaped } from '../socialsGaped/SocialsGaped';

export const SocialContacts: React.FC<{checked?: boolean}> = ({checked}): JSX.Element => {
    return (
        <div className={`${styles.contacts} ${checked ? styles.socials_checked : ''}`}>
            {checked ? <SocialsGaped/> : <Socials />}
            <H4 color='white'>+7 (982) 623 26 17</H4>
        </div>
    )
}
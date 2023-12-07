import styles from './Header.module.css';
import logoLinkedin from '../../assets/logo-linkedin.svg';
import logoGitHub from '../../assets/logo-github.svg';
import logoTelegram from '../../assets/logo-telegram.svg';

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <h1 className={styles.title}>To-Do List</h1>
            <ul className={styles.socialMedia}>
                <li>
                    <a className={styles.link} href="https://br.linkedin.com/" target='blank'>
                        <img src={logoLinkedin} alt="Logo Linkedin" />
                    </a>
                </li>
                <li>
                    <a className={styles.link} href="https://github.com/" target='blank'>
                        <img src={logoGitHub} alt="Logo GitHub" />
                    </a>
                </li>
                <li>
                    <a className={styles.link} href="https://web.telegram.org/a/" target='blank'>
                        <img src={logoTelegram} alt="Logo Telegram" />
                    </a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header
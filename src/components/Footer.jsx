import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.brand}>
          On<span className={styles.accent}>Site</span>
        </span>
        <div className={styles.right}>
          <Link to="/privacy" className={styles.privacyLink}>Privacy Policy</Link>
          <span className={styles.copy}>
            &copy; {new Date().getFullYear()} OnSite - Trades, Nathan Manley. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

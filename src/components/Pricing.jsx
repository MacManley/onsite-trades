import styles from './Pricing.module.css'

export default function Pricing() {
  return (
    <section className={styles.pricing}>
      <div className={styles.inner}>
        <div className={styles.badge}>Launch Offer</div>
        <h2 className={styles.heading}>FREE to download</h2>
        <p className={styles.subtext}>
          OnSite is free to download and use. No trials, no paywalls, no catches.
          Every feature available today is yours at no cost.
        </p>
        <div className={styles.card}>
          <div className={styles.price}>
            <span className={styles.amount}>€0</span>
            <span className={styles.period}>for current features</span>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <svg className={styles.check} viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="10" fill="var(--color-accent)" />
                <path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All site management features
            </li>
            <li className={styles.item}>
              <svg className={styles.check} viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="10" fill="var(--color-accent)" />
                <path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Photo capture and auto-sorting
            </li>
            <li className={styles.item}>
              <svg className={styles.check} viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="10" fill="var(--color-accent)" />
                <path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Service and invoice reminders
            </li>
            <li className={styles.item}>
              <svg className={styles.check} viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="10" fill="var(--color-accent)" />
                <path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Offline mode and full iPad support
            </li>
          </ul>
        </div>
        <p className={styles.future}>
          New premium features may be introduced down the line, but everything
          you get today stays free.
        </p>
      </div>
    </section>
  )
}

import styles from './Highlights.module.css'

const highlights = [
  'Automatic GPS-based onsite arrival notifications',
  'Smart photo and contact auto-sorting',
  'Service interval tracking with overdue alerts',
  'Invoice delay settings for flexible billing',
  'Full iPad and iPhone support',
]

export default function Highlights() {
  return (
    <section className={styles.highlights}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Built for real work. Real sites. Real jobs.</h2>
        <ul className={styles.list}>
          {highlights.map((item) => (
            <li key={item} className={styles.item}>
              <svg className={styles.check} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="var(--color-accent)" />
                <path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

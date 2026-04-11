import { useEffect, useRef } from 'react'
import styles from './Features.module.css'

const features = [
  {
    icon: '📍',
    title: 'Never lose track of a job again',
    description:
      'Create detailed site profiles with addresses, job types, and full service histories. Pin your most important sites and let OnSite automatically highlight the ones closest to you.',
  },
  {
    icon: '📸',
    title: 'Document everything, effortlessly',
    description:
      'Capture before, after, progress, and completion photos directly on-site. Add captions and notes. Import your camera roll, OnSite automatically sorts photos to the right site based on where they were taken.',
  },
  {
    icon: '🔒',
    title: 'Your data, protected',
    description:
      'All your sites, photos, and documents are securely stored and always available when you need them, even offline.',
  },
  {
    icon: '📶',
    title: 'Works wherever the job takes you',
    description:
      'No signal? No problem. OnSite works offline and syncs everything when you\'re back online.',
  },
  {
    icon: '🔔',
    title: 'Stay ahead of your schedule',
    description:
      'Smart notifications when a job is coming up, when you\'re due on site, and when it\'s time to invoice. Automatically skips weekends, bank holidays, and days you don\'t work.',
  },
  {
    icon: '📎',
    title: 'Keep all your paperwork in one place',
    description:
      'Attach PDFs, documents, spreadsheets, and more directly to each site. Preview files instantly and share them when needed.',
  },
  {
    icon: '👤',
    title: 'Manage your contacts per site',
    description:
      'Link existing contacts to specific sites. OnSite can automatically match your address book to job sites based on location, saving hours of manual setup.',
  },
  {
    icon: '📅',
    title: 'Your work calendar, built for trades',
    description:
      'A clear monthly calendar shows every upcoming service and invoice at a glance. Automatic invoice date calculation adjusted for non-working days and public holidays.',
  },
  {
    icon: '💷',
    title: 'Get paid faster',
    description:
      'Stay on top of every job and every invoice. OnSite helps ensure nothing slips through the cracks so you get paid on time, every time.',
  },
]

export default function Features() {
  const gridRef = useRef(null)

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(`.${styles.card}`)
    if (!cards?.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.features}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Everything you need to run your jobs</h2>
        <div className={styles.grid} ref={gridRef}>
          {features.map((f, i) => (
            <div
              key={f.title}
              className={styles.card}
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
            >
              <span className={styles.icon}>{f.icon}</span>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

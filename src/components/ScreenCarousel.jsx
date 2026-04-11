import { useState, useEffect } from 'react'
import styles from './ScreenCarousel.module.css'

const screens = [
  {
    title: 'Photo Details',
    icon: '📸',
    content: ['Edit Caption', 'Installed Panels', 'Cancel / Save'],
    color: '#2dd4bf',
  },
  {
    title: 'Select Job Types',
    icon: '🏗️',
    content: ['Solar ✓', 'Construction', 'Plumbing', 'Outdoor'],
    color: '#f59e0b',
  },
  {
    title: 'Auto-Sort',
    icon: '🔄',
    content: ['Photo Auto-Sort', 'Contact Auto-Sort', 'Select & Sort'],
    color: '#f97316',
  },
]

export default function ScreenCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screens.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.carousel}>
      <div className={styles.phonePlaceholder}>
        <div className={styles.phoneScreen}>
          <div className={styles.phoneStatusBar} />
          <div className={styles.phoneContent}>
            <div className={styles.screenTitle}>{screens[current].title}</div>
            <div className={styles.screenIcon}>{screens[current].icon}</div>
            <div className={styles.screenItems}>
              {screens[current].content.map((item, i) => (
                <div key={i} className={styles.screenItem} style={{ color: screens[current].color }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dots}>
        {screens.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.active : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Screen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

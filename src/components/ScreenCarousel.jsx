import { useState, useEffect } from 'react'
import styles from './ScreenCarousel.module.css'

const screens = [
  {
    title: 'Photo Details',
    subtitle: 'Capture and annotate photos on-site',
    items: ['Edit Caption', 'Add Notes', 'Annotate'],
    color: '#06b6d4',
  },
  {
    title: 'Select Job Types',
    subtitle: 'Organize by trade',
    items: ['Electrical ✓', 'Plumbing', 'Tiling', 'See More...'],
    color: '#f59e0b',
  },
  {
    title: 'Auto-Sort',
    subtitle: 'AI-powered photo & contact organization',
    items: ['Photos Auto-Sort', 'Contacts Auto-Sort'],
    color: '#f97316',
  },
]

export default function ScreenCarousel() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % screens.length)
        setIsTransitioning(false)
      }, 300)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleDotClick = (index) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.phonePlaceholder}>
        <div className={styles.phoneScreen}>
          <div className={styles.phoneStatusBar} />
          <div className={`${styles.phoneContent} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
            <div className={styles.screenHeader}>
              <h3 className={styles.screenTitle}>{screens[current].title}</h3>
              <p className={styles.screenSubtitle}>{screens[current].subtitle}</p>
            </div>
            <div className={styles.screenItems} key={`items-${current}`}>
              {screens[current].items.map((item, i) => (
                <div
                  key={`${current}-${i}`}
                  className={styles.screenItem}
                  style={{
                    color: screens[current].color,
                  }}
                >
                  <span className={styles.itemIcon}>•</span>
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
            onClick={() => handleDotClick(i)}
            aria-label={`Screen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

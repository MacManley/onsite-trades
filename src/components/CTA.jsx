import styles from './CTA.module.css'

const APP_STORE_URL = 'https://apps.apple.com/ie/app/onsite-trades/id6761440069'

export default function CTA() {
  return (
    <section id="interest" className={styles.cta}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Ready to get OnSite?</h2>
        <p className={styles.subtext}>
          Available now on the App Store. Pre-order today and be ready to hit the ground running from day one.
        </p>

        <div className={styles.appStoreWrap}>
          <a
            href={APP_STORE_URL}
            className={styles.appStore}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={styles.appleLogo} viewBox="0 0 17 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.545 10.239c-.022-2.39 1.95-3.54 2.039-3.594-1.11-1.624-2.84-1.846-3.455-1.872-1.47-.149-2.87.866-3.616.866-.746 0-1.9-.844-3.12-.822-1.606.024-3.087.934-3.914 2.373-1.668 2.895-.427 7.186 1.199 9.537.795 1.15 1.742 2.44 2.988 2.394 1.198-.048 1.651-.776 3.1-.776 1.448 0 1.853.776 3.12.752 1.29-.022 2.103-1.172 2.893-2.325.912-1.334 1.287-2.625 1.31-2.692-.029-.013-2.514-.965-2.539-3.83l-.005-.01zM11.15 3.292C11.81 2.49 12.258 1.38 12.14.25c-.969.04-2.144.645-2.84 1.46-.623.72-1.168 1.87-1.022 2.974 1.082.084 2.186-.55 2.872-1.392z" />
            </svg>
            <div>
              <span className={styles.appStoreSmall}>Pre-order on the</span>
              <span className={styles.appStoreLarge}>App Store</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

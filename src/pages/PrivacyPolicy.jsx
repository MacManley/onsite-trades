import styles from './PrivacyPolicy.module.css'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/" className={styles.back}>← Back</Link>

        <header className={styles.header}>
          <span className={styles.brand}>On<span className={styles.accent}>Site</span></span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.effective}>Effective Date: April 1, 2026</p>
          <p className={styles.intro}>
            OnSite respects your privacy and is committed to protecting the personal
            information you share when using our app. This Privacy Policy explains how
            we collect, use, and protect your data.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Information We Collect</h2>

          <h3 className={styles.subTitle}>1.1 Personal Information You Provide</h3>
          <ul className={styles.list}>
            <li>Site names, addresses, and job details</li>
            <li>Photos and media captured or uploaded in the app</li>
            <li>Documents, PDFs, and spreadsheets associated with sites</li>
            <li>Contacts you link to your sites</li>
          </ul>

          <h3 className={styles.subTitle}>1.2 Automatically Collected Information</h3>
          <ul className={styles.list}>
            <li>Device information (model, operating system)</li>
            <li>App usage data (features used, timestamps)</li>
            <li>Location data (for GPS-based site highlighting and onsite notifications)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
          <p className={styles.body}>We use your data to:</p>
          <ul className={styles.list}>
            <li>Manage and organise your sites, photos, and documents</li>
            <li>Provide GPS-based site highlighting and onsite notifications</li>
            <li>Automatically sort photos and contacts to the correct sites</li>
            <li>Send reminders about upcoming services and invoices</li>
            <li>Improve and maintain the OnSite app experience</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Data Storage &amp; Security</h2>
          <ul className={styles.list}>
            <li>All personal data is stored securely on your device and/or our servers.</li>
            <li>We use industry-standard security measures to protect your data.</li>
            <li>OnSite works offline, and data syncs only when you are connected.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Sharing Your Information</h2>
          <p className={styles.body}>
            We do not sell, trade, or rent your personal data to third parties. We may
            share your information only in limited circumstances:
          </p>
          <ul className={styles.list}>
            <li>To comply with legal obligations</li>
            <li>With service providers that assist in operating the app (under strict confidentiality)</li>
            <li>If required to protect our rights, property, or safety</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Location Data</h2>
          <ul className={styles.list}>
            <li>OnSite uses your device's location to highlight nearby sites and trigger onsite notifications.</li>
            <li>Location data is not shared with third parties for marketing purposes.</li>
            <li>You can disable location access at any time in your device settings.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Your Rights</h2>
          <ul className={styles.list}>
            <li>You can access, correct, or delete the personal information stored in OnSite via "Reset All Data" in app settings.</li>
            <li>You can revoke permissions for photos, contacts, or location at any time.</li>
            <li>For any data requests, please contact us at <a href="mailto:macmanley@icloud.com">macmanley@icloud.com</a>.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Children's Privacy</h2>
          <p className={styles.body}>
            OnSite is not intended for use by children under 13. We do not knowingly
            collect personal information from children.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Changes to This Privacy Policy</h2>
          <p className={styles.body}>
            We may update this Privacy Policy from time to time. Changes will be posted
            in the app and take effect immediately upon posting.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Contact Us</h2>
          <p className={styles.body}>
            If you have questions or concerns about your privacy, you can reach us at:
          </p>
          <div className={styles.contact}>
            <strong>OnSite App Support</strong>
            <a href="mailto:macmanley@icloud.com">macmanley@icloud.com</a>
          </div>
        </section>

        <footer className={styles.footer}>
          <span>&copy; {new Date().getFullYear()} OnSite - Trades, Nathan Manley. All rights reserved.</span>
        </footer>
      </div>
    </div>
  )
}

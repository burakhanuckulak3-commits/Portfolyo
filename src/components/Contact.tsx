import ScrollReveal from './ScrollReveal';
import styles from './Contact.module.css';

const contacts = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: 'Telefon',
    value: '+90 533 442 73 68',
    href: 'tel:+905334427368',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'burakhanuckulak3@gmail.com',
    href: 'mailto:burakhanuckulak3@gmail.com',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'Burakhan Üçkulak',
    href: 'https://www.linkedin.com/in/burakhan-üçkulak-a45178333',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
    label: 'GitHub',
    value: 'Brk-han',
    href: 'https://github.com/Brk-han',
  },
];

export default function Contact() {
  return (
    <section id="iletisim" className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">İletişim</h2>
        </ScrollReveal>

        <ScrollReveal>
          <p className={styles.intro}>
            Benimle iletişime geçmek isterseniz aşağıdaki kanallardan ulaşabilirsiniz.
            Her türlü iş birliği ve proje teklifine açığım.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="stagger-children" className={styles.grid}>
          {contacts.map((contact, i) => (
            <a key={i} href={contact.href} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <div className={styles.iconWrapper}>
                {contact.icon}
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardLabel}>{contact.label}</span>
                <span className={styles.cardValue}>{contact.value}</span>
              </div>
              <div className={styles.arrow}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7"/>
                </svg>
              </div>
            </a>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

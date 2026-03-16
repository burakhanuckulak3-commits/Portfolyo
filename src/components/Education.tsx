import ScrollReveal from './ScrollReveal';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="egitim" className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Eğitim</h2>
        </ScrollReveal>

        <ScrollReveal animation="reveal-scale">
          <div className={styles.timeline}>
            <div className={styles.timelineLine}></div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}>
                <div className={styles.dotInner}></div>
              </div>

              <div className={styles.timelineCard}>
                <div className={styles.cardBadge}>
                  <span className={styles.badgeIcon}>🎓</span>
                  2025 – 2027
                </div>
                <h3 className={styles.cardTitle}>Dumlupınar Üniversitesi</h3>
                <p className={styles.cardSubtitle}>Simav – Kütahya</p>
                <p className={styles.cardDegree}>Bilgisayar Programcılığı (Ön Lisans)</p>
                <div className={styles.statusBadge}>
                  <span className={styles.statusDot}></span>
                  Devam Ediyor
                </div>

                <div className={styles.cardDetails}>
                  <div className={styles.detailItem}>
                    <span>📚</span>
                    <span>C ve Python programlama dersleri</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span>🧮</span>
                    <span>Algoritma mantığı ve veri yapıları</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span>🌐</span>
                    <span>Web geliştirme temelleri</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

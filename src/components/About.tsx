import ScrollReveal from './ScrollReveal';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="hakkimda" className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Hakkımda</h2>
        </ScrollReveal>

        <div className={styles.grid}>
          <ScrollReveal animation="reveal-left">
            <div className={styles.imageSection}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.codeBlock}>
                  <div className={styles.codeLine}>
                    <span className={styles.keyword}>const</span>{' '}
                    <span className={styles.variable}>developer</span> = {'{'}
                  </div>
                  <div className={styles.codeLine}>
                    {'  '}<span className={styles.property}>name</span>:{' '}
                    <span className={styles.string}>&quot;Burakhan&quot;</span>,
                  </div>
                  <div className={styles.codeLine}>
                    {'  '}<span className={styles.property}>role</span>:{' '}
                    <span className={styles.string}>&quot;Student&quot;</span>,
                  </div>
                  <div className={styles.codeLine}>
                    {'  '}<span className={styles.property}>passion</span>:{' '}
                    <span className={styles.string}>&quot;Coding&quot;</span>,
                  </div>
                  <div className={styles.codeLine}>
                    {'  '}<span className={styles.property}>learning</span>:{' '}
                    <span className={styles.boolean}>true</span>
                  </div>
                  <div className={styles.codeLine}>{'};'}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="reveal-right">
            <div className={styles.textSection}>
              <p className={styles.bio}>
                Bilgisayar Programcılığı öğrencisiyim. Algoritma mantığı ve temel yazılım
                geliştirme konularında sağlam bir temel oluşturmayı hedefliyorum.
              </p>
              <p className={styles.bio}>
                C ve Python ile konsol uygulamaları geliştirerek pratik yapıyorum.
                Analitik düşünme becerimi teknik yetkinliğe dönüştürmeye odaklı,
                disiplinli ve öğrenmeye açık bir adayım.
              </p>

              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  <div>
                    <span className={styles.infoLabel}>Lokasyon</span>
                    <span className={styles.infoValue}>Simav, Kütahya</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>🎓</span>
                  <div>
                    <span className={styles.infoLabel}>Eğitim</span>
                    <span className={styles.infoValue}>Dumlupınar Üniversitesi</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>💻</span>
                  <div>
                    <span className={styles.infoLabel}>Odak</span>
                    <span className={styles.infoValue}>C & Python Geliştirme</span>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>🚀</span>
                  <div>
                    <span className={styles.infoLabel}>Durum</span>
                    <span className={styles.infoValue}>Aktif Öğreniyor</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

import ScrollReveal from './ScrollReveal';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Öğrenci Yönetim Sistemi',
    description: 'C dili kullanarak öğrenci ekleme, silme ve listeleme işlemleri geliştirdim. Fonksiyon yapısını ve dizi kullanımını uyguladım.',
    tech: ['C', 'Algoritma', 'Veri Yapıları'],
    icon: '🎓',
    color: '#3b82f6',
  },
  {
    title: 'Not Hesaplama Programı',
    description: 'Python ile kullanıcıdan veri alarak ortalama hesaplayan uygulama geliştirdim. Koşul yapıları ve döngüler üzerine çalıştım.',
    tech: ['Python', 'Matematik', 'Konsol'],
    icon: '📊',
    color: '#10b981',
  },
  {
    title: 'Basit Portföy Web Sitesi',
    description: 'HTML/CSS ile responsive tasarım mantığında kişisel web sayfası oluşturdum.',
    tech: ['HTML', 'CSS', 'Responsive'],
    icon: '🌐',
    color: '#8b5cf6',
  },
];

export default function Projects() {
  return (
    <section id="projeler" className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Projelerim</h2>
        </ScrollReveal>

        <ScrollReveal animation="stagger-children" className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper} style={{ '--project-color': project.color } as React.CSSProperties}>
                  <span className={styles.icon}>{project.icon}</span>
                </div>
                <div className={styles.cardNumber}>0{index + 1}</div>
              </div>

              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>

              <div className={styles.techStack}>
                {project.tech.map((t, i) => (
                  <span key={i} className={styles.techBadge}>{t}</span>
                ))}
              </div>

              <div className={styles.cardGlow} style={{ '--project-color': project.color } as React.CSSProperties}></div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

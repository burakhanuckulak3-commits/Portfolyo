'use client';

import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import styles from './Skills.module.css';

const technicalSkills = [
  { name: 'C', level: 50, color: '#3b82f6' },
  { name: 'Python', level: 45, color: '#10b981' },
  { name: 'Algoritma Mantığı', level: 55, color: '#8b5cf6' },
  { name: 'Git', level: 35, color: '#f59e0b' },
  { name: 'HTML/CSS', level: 50, color: '#ef4444' },
];

const personalTraits = [
  { icon: '🎯', title: 'Disiplinli Çalışma', desc: 'Düzenli ve planlı çalışma alışkanlığı' },
  { icon: '⚡', title: 'Hızlı Öğrenme', desc: 'Yeni teknolojileri hızla kavrama' },
  { icon: '🤝', title: 'Takım Çalışması', desc: 'Ekip içinde uyumlu ve işbirlikçi' },
  { icon: '🧩', title: 'Problem Çözme', desc: 'Analitik düşünme ve çözüm odaklılık' },
];

function AnimatedBar({ name, level, color }: { name: string; level: number; color: string }) {
  const barRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={barRef} className={styles.skillBar}>
      <div className={styles.skillInfo}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.barTrack}>
        <div 
          className={styles.barFill}
          style={{ 
            width: visible ? `${level}%` : '0%', 
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: visible ? `0 0 20px ${color}44` : 'none',
          }} 
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="beceriler" className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Becerilerim</h2>
        </ScrollReveal>

        <div className={styles.grid}>
          <ScrollReveal animation="reveal-left">
            <div className={styles.techSection}>
              <h3 className={styles.subTitle}>
                <span className={styles.subIcon}>⚙️</span>
                Teknik Beceriler
              </h3>
              <div className={styles.skillBars}>
                {technicalSkills.map((skill, i) => (
                  <AnimatedBar key={i} {...skill} />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="reveal-right">
            <div className={styles.personalSection}>
              <h3 className={styles.subTitle}>
                <span className={styles.subIcon}>✨</span>
                Kişisel Özellikler
              </h3>
              <div className={styles.traitsGrid}>
                {personalTraits.map((trait, i) => (
                  <div key={i} className={styles.traitCard}>
                    <div className={styles.traitIcon}>{trait.icon}</div>
                    <h4 className={styles.traitTitle}>{trait.title}</h4>
                    <p className={styles.traitDesc}>{trait.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

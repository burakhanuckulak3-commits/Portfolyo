'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [titleText, setTitleText] = useState('');
  const fullTitle = 'Burakhan Üçkulak';

  useEffect(() => {
    setMounted(true);
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullTitle.length) {
        setTitleText(fullTitle.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="anasayfa" className={styles.hero}>
      <div className={styles.content}>
        <div className={`${styles.badge} ${mounted ? styles.visible : ''}`}>
          <span className={styles.badgeDot}></span>
          Bilgisayar Programcılığı Öğrencisi
        </div>

        <h1 className={styles.title}>
          <span className={styles.greeting}>Merhaba, Ben</span>
          <span className={styles.name}>
            {titleText}
            <span className={styles.cursor}>|</span>
          </span>
        </h1>

        <p className={`${styles.subtitle} ${mounted ? styles.visible : ''}`}>
          Algoritma mantığı ve temel yazılım geliştirme konularında kendimi geliştiriyorum.
          C ve Python ile konsol uygulamaları geliştirerek pratik yapıyorum.
        </p>

        <div className={`${styles.cta} ${mounted ? styles.visible : ''}`}>
          <a href="#projeler" className={styles.btnPrimary} onClick={(e) => {
            e.preventDefault();
            document.querySelector('#projeler')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span>Projelerimi Gör</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href="#iletisim" className={styles.btnSecondary} onClick={(e) => {
            e.preventDefault();
            document.querySelector('#iletisim')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span>İletişime Geç</span>
          </a>
        </div>

        <div className={`${styles.stats} ${mounted ? styles.visible : ''}`}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>3+</span>
            <span className={styles.statLabel}>Proje</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>2</span>
            <span className={styles.statLabel}>Programlama Dili</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>2025</span>
            <span className={styles.statLabel}>Üniversite Başlangıcı</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot}></div>
        </div>
        <span>Aşağı Kaydır</span>
      </div>
    </section>
  );
}

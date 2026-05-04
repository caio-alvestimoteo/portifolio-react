import { useEffect, useRef } from 'react';
import type { FC } from 'react';
import Chip from '../../ui/Chip';
import Stat from '../../ui/Stat';
import type { Stat as StatType } from '../../types';
import { stats, chips } from '../../data/portfolio';
import styles from './Hero.module.scss';

const Hero: FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;

      const scrolled = window.scrollY;
      parallaxRef.current.querySelectorAll('[data-parallax]').forEach((el) => {
        const factor = parseFloat((el as HTMLElement).dataset.parallax || '0');
        (el as HTMLElement).style.transform = `translate3d(0, ${-scrolled * factor}px, 0)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.hero} ref={parallaxRef}>
      <div className={styles.floating1} data-parallax="0.05">
        ネオ東京 / 03A-77
      </div>
      <div className={styles.floating2} data-parallax="0.08">
        KATANA SYS / 88-14
      </div>
      <div className={styles.floating3} data-parallax="0.04">
        CAUTION: LAYERED MEMORY
      </div>

      <section className={styles.left}>
        <div className={styles.topline}>
          <div className={styles.label}>Portfolio Executivo</div>
          <div className={styles.support} data-parallax="0.02">
            <span>Momento Atual</span>
            <strong>Dev Sênior direcionando foco para IA Aplicada</strong>
            <small>front-end / e-commerce / integrações / IA local e automações</small>
          </div>
        </div>

        <div className={styles.mark} data-parallax="0.025" aria-hidden="true">
          Neo
          <br />
          Tokyo
        </div>

        <div>
          <h1>
            CAIO
            <br />
            <span>TIMOTEO</span>
          </h1>
          <p className={styles.intro}>
            Desenvolvedor sênior há mais de 15 anos transformando problemas em soluções reais. No momento atual,
            direcionando minha bagagem em suporte, front-end, e-commerce, integrações e liderança técnica para{' '}
            <strong>IA Aplicada</strong>, automações e soluções digitais. O Jaime é meu projeto prático para estudar essa
            transição com profundidade, privacidade e código real. <strong><a href="#manifest">Considere Saber Mais - Clique Aqui</a></strong>
          </p>
          <div className={styles.chips}>
            {chips.map((chip) => (
              <Chip key={chip.name}>{chip.name}</Chip>
            ))}
          </div>
        </div>

        <div className={styles.stats}>
          {stats.map((stat: StatType) => (
            <Stat key={stat.id} stat={stat} />
          ))}
        </div>
      </section>
    </header>
  );
};

export default Hero;

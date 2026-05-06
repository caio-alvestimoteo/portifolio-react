import type { FC } from 'react';
import Chip from '../../ui/Chip';
import Stat from '../../ui/Stat';
import { chips, stats } from '../../data/portfolio';

const Hero: FC = () => {
  return (
    <section className="hero" id="hero" data-name="HERO">
      <div className="section-inner">
        <div className="hero__topline reveal">
          <strong>SECTOR.03A-77</strong>
          <span>DEV SR / IA APLICADA — AUTOMAÇÕES</span>
        </div>
        <div className="hero__layout">
          <div>
            <h1 className="hero__title reveal">
              CAIO<span className="hero__title-accent">TIMOTEO</span>
            </h1>
            <div className="hero__role reveal" style={{ ['--i' as string]: 1 }}>
              ▸ <strong>DESENVOLVEDOR SÊNIOR</strong> / IA APLICADA — AUTOMAÇÕES — INTEGRAÇÕES
            </div>
            <p className="hero__lead reveal" style={{ ['--i' as string]: 2 }}>
              15+ anos transformando problemas em soluções reais. Bagagem em suporte, front-end, e-commerce, integrações e
              liderança técnica direcionada para <strong>IA Aplicada</strong>, automações e soluções digitais com
              privacidade e código real.
            </p>
            <div className="hero__chips reveal" style={{ ['--i' as string]: 3 }}>
              {chips.map((chip) => (
                <Chip key={chip.name}>{chip.name}</Chip>
              ))}
            </div>
          </div>
          <div className="hero__card reveal reveal--from-right" style={{ ['--i' as string]: 2 }}>
            <div className="hero__card-label">SECTOR.03A-77</div>
            <div className="hero__card-jp">
              進化
              <br />
              武士道
            </div>
            <div className="hero__card-jp-sub">EVOLUTION / AI / BUSHIDO</div>
            <div className="hero__card-stats">
              {stats.map((stat, index) => (
                <div key={stat.id} className="reveal reveal--from-bottom" style={{ ['--i' as string]: index }}>
                  <Stat stat={stat} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hero__scroll-hint reveal" style={{ ['--i' as string]: 4 }}>
          SCROLL <span className="hero__scroll-line" /> ROLE PARA BAIXO
        </div>
      </div>
    </section>
  );
};

export default Hero;

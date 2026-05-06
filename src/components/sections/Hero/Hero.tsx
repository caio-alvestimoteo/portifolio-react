import type { FC } from 'react';
import Chip from '../../../ui/Chip';
import Stat from '../../../ui/Stat';
import { chips, stats } from '../../../data/portfolio';
import { SectionInner } from '../../shared.styles';
import {
  HeroSection, Topline, Layout, Title, TitleAccent,
  Role, Lead, Chips, Card, CardLabel, CardJp, CardJpSub,
  CardStats, ScrollHint, ScrollLine,
} from './Hero.styles';

const Hero: FC = () => {
  return (
    <HeroSection id="hero" data-name="HERO">
      <SectionInner>
        <Topline className="reveal">
          <strong>SECTOR.03A-77</strong>
          <span>DEV SR / IA APLICADA — AUTOMAÇÕES</span>
        </Topline>
        <Layout>
          <div>
            <Title className="reveal">
              CAIO<TitleAccent>TIMOTEO</TitleAccent>
            </Title>
            <Role className="reveal" style={{ ['--i' as string]: 1 }}>
              ▸ <strong>DESENVOLVEDOR SÊNIOR</strong> / IA APLICADA — AUTOMAÇÕES — INTEGRAÇÕES
            </Role>
            <Lead className="reveal" style={{ ['--i' as string]: 2 }}>
              15+ anos transformando problemas em soluções reais. Bagagem em suporte, front-end, e-commerce, integrações e
              liderança técnica direcionada para <strong>IA Aplicada</strong>, automações e soluções digitais com
              privacidade e código real.
            </Lead>
            <Chips className="reveal" style={{ ['--i' as string]: 3 }}>
              {chips.map((chip) => (
                <Chip key={chip.name}>{chip.name}</Chip>
              ))}
            </Chips>
          </div>
          <Card className="reveal reveal--from-right" style={{ ['--i' as string]: 2 }}>
            <CardLabel>SECTOR.03A-77</CardLabel>
            <CardJp>
              進化
              <br />
              武士道
            </CardJp>
            <CardJpSub>EVOLUTION / AI / BUSHIDO</CardJpSub>
            <CardStats>
              {stats.map((stat, index) => (
                <div key={stat.id} className="reveal reveal--from-bottom" style={{ ['--i' as string]: index }}>
                  <Stat stat={stat} />
                </div>
              ))}
            </CardStats>
          </Card>
        </Layout>
        <ScrollHint className="reveal" style={{ ['--i' as string]: 4 }}>
          SCROLL <ScrollLine /> ROLE PARA BAIXO
        </ScrollHint>
      </SectionInner>
    </HeroSection>
  );
};

export default Hero;

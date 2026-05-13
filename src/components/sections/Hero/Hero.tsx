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
          <strong>Portfolio Executivo</strong>
          <span>Curiosidade Técnica / E-commerce / Integrações / IA Local</span>
        </Topline>
        <Layout>
          <div>
            <Title className="reveal">
              CAIO<TitleAccent>TIMOTEO</TitleAccent>
            </Title>
            <Role className="reveal" style={{ ['--i' as string]: 1 }}>
              ▸ <strong>DEV SÊNIOR</strong> EXPLORANDO IA APLICADA — MOMENTO ATUAL
            </Role>
            <Lead className="reveal" style={{ ['--i' as string]: 2 }}>
              Desde criança, sempre quis entender como as coisas funcionam. Essa curiosidade me levou da manutenção de computadores ao suporte técnico, do suporte ao front-end, do front-end ao e-commerce, das integrações à liderança técnica.

              Hoje, direciono essa mesma curiosidade para IA aplicada: quero entender como modelos, automações e agentes podem resolver problemas reais sem apagar a bagagem que construí ao longo do caminho.

              O Jaime é meu laboratório pessoal: um assistente local de IA criado para estudar, testar e transformar curiosidade em código real.
            </Lead>
            <Chips className="reveal" style={{ ['--i' as string]: 3 }}>
              {chips.map((chip) => (
                <Chip key={chip.name}>{chip.name}</Chip>
              ))}
            </Chips>
          </div>
          <Card className="reveal reveal--from-right" style={{ ['--i' as string]: 2 }}>
            <CardLabel>MOMENTO ATUAL</CardLabel>
            <CardJp>
              進化
              <br />
              武士道
            </CardJp>
            <CardJpSub>DEV SÊNIOR EXPLORANDO IA APLICADA</CardJpSub>
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

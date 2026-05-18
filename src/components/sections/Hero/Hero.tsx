import type { FC } from 'react';
import Chip from '../../../ui/Chip';
import Stat from '../../../ui/Stat';
import { chips, stats } from '../../../data/portfolio';
import { SectionInner } from '../../shared.styles';
import {
  HeroSection, Topline, Layout, Title, TitleAccent,
  Role, Lead, Chips, Card, CardLabel, CardJp, CardJpPair, CardJpKanji, CardJpGloss, CardJpSub,
  CardStats, ScrollHint, ScrollLine,
} from './Hero.styles';

const Hero: FC = () => {
  return (
    <HeroSection id="hero" data-name="HERO">
      <SectionInner>
        <Topline className="reveal">
          <strong>Portfolio Executivo</strong>
          <span>experiência real / integrações / automações / IA local</span>
        </Topline>
        <Layout>
          <div>
            <Title className="reveal">
              CAIO<TitleAccent>TIMOTEO</TitleAccent>
            </Title>
            <Role className="reveal" style={{ ['--i' as string]: 1 }}>
              ▸ <strong>DEV SÊNIOR E TECH LEAD</strong> EM EVOLUÇÃO PARA IA APLICADA
            </Role>
            <Lead className="reveal" style={{ ['--i' as string]: 2 }}>
              Sou desenvolvedor sênior e tech lead com mais de 10 anos de experiência em tecnologia. Minha trajetória passou por suporte técnico, front-end, e-commerce, integrações, treinamento de pessoas, arquitetura de soluções e liderança técnica.

              Desde cedo, sempre tive curiosidade para entender como as coisas funcionam. Essa curiosidade me levou a desmontar problemas, observar padrões, criar soluções e buscar clareza onde havia ruído técnico ou operacional.

              Hoje, direciono essa bagagem para IA aplicada. Não como uma ruptura na minha carreira, mas como uma evolução natural: usar experiência real de desenvolvimento, integrações e liderança para construir automações, assistentes e fluxos que ajudem pessoas, times e empresas de forma prática.

              O Jaime é meu projeto pessoal nessa direção: um assistente local de IA criado para estudar, testar e evoluir com código real, privacidade e documentação viva.
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
              <CardJpPair>
                <CardJpKanji>進化</CardJpKanji>
                <CardJpGloss>evolução</CardJpGloss>
              </CardJpPair>
              <CardJpPair>
                <CardJpKanji>武士道</CardJpKanji>
                <CardJpGloss>bushido</CardJpGloss>
              </CardJpPair>
            </CardJp>
            <CardJpSub>DEV SÊNIOR E TECH LEAD EM EVOLUÇÃO PARA IA APLICADA</CardJpSub>
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

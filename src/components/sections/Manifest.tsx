import type { FC } from 'react';
import Metric from '../../ui/Metric';
import { techStack } from '../../data/portfolio';
import styles from './Manifest.module.scss';

const Manifest: FC = () => {
  return (
    <section className={styles.manifest} id="manifest">
      <div className={styles.copy}>
        <h3>Momento Atual</h3>
        <p>
          Toda a minha trajetória em tecnologia foi construída na prática, ouvindo pessoas e entendendo problemas reais
          de empresas. Ao longo de mais de 15 anos, transitei entre suporte técnico, desenvolvimento web, e-commerce,
          arquitetura de APIs e liderança de times. Não vejo a tecnologia como um fim em si, mas como o meio para
          reduzir tarefas repetitivas, organizar conhecimento e destravar o dia a dia de quem opera.
        </p>
        <p>
          Hoje, levo essa fundação sólida para o universo da Inteligência Artificial aplicada. Em vez de me posicionar
          como um acadêmico, meu foco é prático: conectar modelos de linguagem a sistemas, APIs e fluxos de trabalho
          reais. Construo projetos como o assistente Jaime para entender na raiz como ferramentas locais, automações e
          agentes podem elevar a produtividade técnica com segurança e privacidade.
        </p>
      </div>

      <div className={styles.stack}>
        <h3>Radar técnico</h3>
        <div className={styles.list}>
          {techStack.map((metric) => (
            <Metric key={metric.label} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifest;

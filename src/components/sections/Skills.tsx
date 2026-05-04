import type { FC } from 'react';
import Metric from '../../ui/Metric';
import { skillsData } from '../../data/portfolio';
import styles from './Skills.module.scss';

const Skills: FC = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.header}>
        <h2>{skillsData.title}</h2>
        <span>{skillsData.eyebrow}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.copy}>
          <h3>{skillsData.coreTitle}</h3>
          {skillsData.coreParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className={styles.stack}>
          <h3>{skillsData.educationTitle}</h3>
          <div className={styles.list}>
            {skillsData.education.map((metric) => (
              <Metric key={metric.label} metric={metric} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

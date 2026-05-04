import type { FC } from 'react';
import Chip from '../../ui/Chip';
import { projectData } from '../../data/portfolio';
import styles from './Project.module.scss';

const Project: FC = () => {
  return (
    <section className={styles.project} id="project">
      <div className={styles.header}>
        <h2>{projectData.eyebrow}</h2>
        <span>{projectData.eyebrowDetail}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.mainPanel}>
          <h3>{projectData.title}</h3>
          <p>{projectData.intro}</p>
          <blockquote>{projectData.quote}</blockquote>
          <div className={styles.techCloud}>
            {projectData.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        </div>

        <div className={styles.aside}>
          {projectData.panels.map((panel) => (
            <article key={panel.title} className={styles.panel}>
              <div className={styles.panelHeader}>
                <strong>{panel.title}</strong>
                <span>{panel.eyebrow}</span>
              </div>

              <div className={styles.panelBody}>
                {panel.blocks.map((block) => (
                  <div key={block.label} className={styles.miniBlock}>
                    <label>{block.label}</label>
                    <p>{block.text}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

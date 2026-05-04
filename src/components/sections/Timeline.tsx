import type { FC } from 'react';
import Badge from '../../ui/Badge';
import type { TimelineEntry } from '../../types';
import { timelineData } from '../../data/portfolio';
import styles from './Timeline.module.scss';

const Timeline: FC = () => {
  return (
    <section className={styles.timeline} id="timeline">
      <div className={styles.header}>
        <h2>A jornada até a IA Aplicada</h2>
        <span>scroll vertical / parallax / arquivos técnicos</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.timelineTitle}>Linha do tempo</h3>

        {timelineData.map((entry: TimelineEntry) => (
          <article key={entry.id} className={styles.entry}>
            <div className={styles.rail}>
              <div className={styles.year}>{entry.year}</div>
              <div className={styles.meta}>
                <Badge>{entry.badge}</Badge>
                <div>{entry.company}</div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.content}>
                <div className={styles.entryHeader}>
                  <h3 className={styles.title}>{entry.title}</h3>
                  <div className={styles.date}>{entry.period}</div>
                </div>
                <p className={styles.lead}>{entry.description}</p>

                <div className={styles.grid}>
                  <div className={styles.details}>
                    {entry.details.map((block) => (
                      <div key={block.label} className={styles.miniblock}>
                        <label>{block.label}</label>
                        {block.items ? (
                          <ul>
                            {block.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{block.text}</p>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className={styles.blueprint} aria-hidden="true">
                    <div className={styles.placeholder}>
                      {entry.blueprint.caption}
                      <strong>{entry.blueprint.title}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Timeline;

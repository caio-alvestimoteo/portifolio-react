import type { FC } from 'react';
import { timelineData } from '../../data/portfolio';

const Timeline: FC = () => {
  return (
    <section className="timeline" id="timeline" data-name="JORNADA">
      <div className="section-inner">
        <div className="eyebrow reveal">03 / TIMELINE</div>
        <h2 className="reveal" style={{ ['--i' as string]: 1 }}>
          A JORNADA ATÉ A IA APLICADA.
        </h2>
        <div className="timeline__subtitle reveal" style={{ ['--i' as string]: 2 }}>
          7 frentes / 15+ anos / arquivos técnicos
        </div>
        <div className="timeline__track">
          {timelineData.map((entry, index) => (
            <article
              key={entry.id}
              className={`timeline__entry reveal${index % 2 === 0 ? '' : ' reveal--from-right'}`}
              style={{ ['--i' as string]: 0 }}
            >
              <div className="timeline__entry-meta">
                <div className="timeline__entry-year">{entry.year}</div>
                <div className="timeline__entry-code">FILE.{entry.code}</div>
                <div className="timeline__entry-badge">{entry.badge}</div>
              </div>
              <div className="timeline__entry-body">
                <h3>{entry.title}</h3>
                <div className="timeline__entry-company">{entry.company}</div>
                <p>{entry.description}</p>
                <div className="timeline__entry-period">▸ {entry.period}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

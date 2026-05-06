import type { FC } from 'react';
import Metric from '../../ui/Metric';
import { manifestData, techStack } from '../../data/portfolio';

const Manifest: FC = () => {
  return (
    <section className="manifest dark" id="manifest" data-name="MOMENTO">
      <div className="section-inner">
        <div className="eyebrow reveal">{manifestData.eyebrow}</div>
        <h2 className="reveal" style={{ ['--i' as string]: 1 }}>
          {manifestData.title}
          <br />
          <em>{manifestData.accent}</em>
        </h2>
        <div className="manifest__grid">
          <div>
            {manifestData.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className="reveal" style={{ ['--i' as string]: index }}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="manifest__radar reveal reveal--from-right" style={{ ['--i' as string]: 2 }}>
            <h4 className="manifest__radar-title">RADAR TÉCNICO</h4>
            <div>
              {techStack.map((metric, index) => (
                <div key={metric.label} className="reveal reveal--from-right" style={{ ['--i' as string]: index }}>
                  <Metric metric={metric} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifest;

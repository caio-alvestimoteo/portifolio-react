import type { FC } from 'react';
import Metric from '../../../ui/Metric';
import { manifestData, techStack } from '../../../data/portfolio';
import { SectionInner, Eyebrow } from '../../shared.styles';
import { ManifestSection, Grid, Radar, RadarTitle } from './Manifest.styles';

const Manifest: FC = () => {
  return (
    <ManifestSection id="manifest" data-name="MOMENTO">
      <SectionInner>
        <Eyebrow $dark className="reveal">{manifestData.eyebrow}</Eyebrow>
        <h2 className="reveal" style={{ ['--i' as string]: 1 }}>
          {manifestData.title}
          <br />
          <em>{manifestData.accent}</em>
        </h2>
        <Grid>
          <div>
            {manifestData.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className="reveal" style={{ ['--i' as string]: index }}>
                {paragraph}
              </p>
            ))}
          </div>
          <Radar className="reveal reveal--from-right" style={{ ['--i' as string]: 2 }}>
            <RadarTitle>RADAR TÉCNICO</RadarTitle>
            <div>
              {techStack.map((metric, index) => (
                <div key={metric.label} className="reveal reveal--from-right" style={{ ['--i' as string]: index }}>
                  <Metric metric={metric} />
                </div>
              ))}
            </div>
          </Radar>
        </Grid>
      </SectionInner>
    </ManifestSection>
  );
};

export default Manifest;

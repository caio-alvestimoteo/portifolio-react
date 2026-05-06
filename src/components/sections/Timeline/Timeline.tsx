import type { FC } from 'react';
import { timelineData } from '../../../data/portfolio';
import { SectionInner, Eyebrow } from '../../shared.styles';
import {
  TimelineSection, Subtitle, Track, Entry,
  EntryMeta, EntryYear, EntryCode, EntryBadge,
  EntryBody, EntryCompany, EntryPeriod,
} from './Timeline.styles';

const Timeline: FC = () => {
  return (
    <TimelineSection id="timeline" data-name="JORNADA">
      <SectionInner>
        <Eyebrow className="reveal">03 / TIMELINE</Eyebrow>
        <h2 className="reveal" style={{ ['--i' as string]: 1 }}>
          A JORNADA ATÉ A IA APLICADA.
        </h2>
        <Subtitle className="reveal" style={{ ['--i' as string]: 2 }}>
          7 frentes / 15+ anos / arquivos técnicos
        </Subtitle>
        <Track>
          {timelineData.map((entry, index) => (
            <Entry
              key={entry.id}
              className={`reveal${index % 2 === 0 ? '' : ' reveal--from-right'}`}
              style={{ ['--i' as string]: 0 }}
            >
              <EntryMeta>
                <EntryYear>{entry.year}</EntryYear>
                <EntryCode>FILE.{entry.code}</EntryCode>
                <EntryBadge>{entry.badge}</EntryBadge>
              </EntryMeta>
              <EntryBody>
                <h3>{entry.title}</h3>
                <EntryCompany>{entry.company}</EntryCompany>
                <p>{entry.description}</p>
                <EntryPeriod>▸ {entry.period}</EntryPeriod>
              </EntryBody>
            </Entry>
          ))}
        </Track>
      </SectionInner>
    </TimelineSection>
  );
};

export default Timeline;

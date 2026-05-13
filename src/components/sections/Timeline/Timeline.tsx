import { type FC, useRef, useState, useEffect, useCallback } from 'react';
import type { TimelineEntry } from '../../../types';
import { timelineData, preCareerData } from '../../../data/portfolio';
import { SectionInner, Eyebrow } from '../../shared.styles';
import {
  TimelineSection, Subtitle, Track, Entry,
  EntryMeta, EntryYear, EntryCode, EntryBadge,
  EntryBody, EntryCompany, EntryPeriod,
  EntryChipsBlock, EntryChipsLabel, EntryTagsRow, EntryTag,
  EventsTrack, EventItem, EventDate, EventLabel,
  TipsColumn, Balloon,
  SubtrackList, SubEntry, SubEntryHeader,
  SubEntryYear, SubEntryCompany, SubEntryBadge, SubEntryDescription,
  FilmReelWrapper, FilmLabel, FilmControls, FilmArrow,
  FilmPeekOuter, FilmScrollArea, FilmStrip, FilmFrame, FilmDot,
  FilmFrameYear, FilmCard, FilmImageBox, FilmImagePlaceholder,
  FilmFrameContent, FilmFrameTitle, FilmFrameDesc,
} from './Timeline.styles';

const FilmReel: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const areaRef = useRef<HTMLDivElement>(null);
  const frameRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const total = preCareerData.length;

  const scrollToIndex = useCallback((index: number) => {
    const frame = frameRefs.current[index];
    const area = areaRef.current;
    if (!frame || !area) return;
    const target = frame.offsetLeft - (area.clientWidth - frame.offsetWidth) / 2;
    area.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
    setActiveIndex(index);
  }, []);

  const scrollByStep = (dir: 1 | -1) => {
    scrollToIndex(Math.max(0, Math.min(total - 1, activeIndex + dir)));
  };

  const startHoverScroll = () => {
    let idx = activeIndex;
    const step = () => {
      idx = Math.min(idx + 1, total - 1);
      scrollToIndex(idx);
      if (idx < total - 1) {
        hoverTimerRef.current = setTimeout(step, 2800);
      }
    };
    hoverTimerRef.current = setTimeout(step, 1800);
  };

  const stopHoverScroll = () => {
    if (hoverTimerRef.current !== null) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  return (
    <FilmReelWrapper>
      <FilmLabel>// Raízes — antes de 2010</FilmLabel>
      <FilmPeekOuter
        onMouseEnter={startHoverScroll}
        onMouseLeave={stopHoverScroll}
      >
        <FilmScrollArea ref={areaRef}>
          <FilmStrip>
            {preCareerData.map((entry, i) => (
              <FilmFrame
                key={entry.year}
                ref={(el: HTMLDivElement | null) => { frameRefs.current[i] = el; }}
              >
                <FilmDot $active={i === activeIndex} />
                <FilmFrameYear $active={i === activeIndex}>{entry.year}</FilmFrameYear>
                <FilmCard $active={i === activeIndex}>
                  <FilmImageBox>
                    {entry.image
                      ? <img src={entry.image} alt={entry.title} draggable={false} />
                      : <FilmImagePlaceholder>{entry.year}</FilmImagePlaceholder>
                    }
                  </FilmImageBox>
                  <FilmFrameContent>
                    <FilmFrameTitle>{entry.title}</FilmFrameTitle>
                    <FilmFrameDesc>{entry.description}</FilmFrameDesc>
                  </FilmFrameContent>
                </FilmCard>
              </FilmFrame>
            ))}
          </FilmStrip>
        </FilmScrollArea>
      </FilmPeekOuter>
      <FilmControls>
        <FilmArrow onClick={() => scrollByStep(-1)} disabled={activeIndex === 0} aria-label="anterior">←</FilmArrow>
        <FilmArrow onClick={() => scrollByStep(1)} disabled={activeIndex === total - 1} aria-label="próximo">→</FilmArrow>
      </FilmControls>
    </FilmReelWrapper>
  );
};

interface EntryCardProps {
  entry: TimelineEntry;
  index: number;
}

const EntryCard: FC<EntryCardProps> = ({ entry, index }) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Entry
      ref={ref as React.RefObject<HTMLElement>}
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
        {entry.chips && (
          <EntryChipsBlock>
            <EntryChipsLabel>Na prática:</EntryChipsLabel>
            <EntryTagsRow>
              {entry.chips.map((chip) => (
                <EntryTag key={chip.name} $accent={chip.accent}>{chip.name}</EntryTag>
              ))}
            </EntryTagsRow>
          </EntryChipsBlock>
        )}
        {entry.subsections && (
          <SubtrackList>
            {entry.subsections.map((sub) => (
              <SubEntry key={`${sub.year}-${sub.company}`}>
                <SubEntryHeader>
                  <SubEntryYear>{sub.year}</SubEntryYear>
                  <SubEntryCompany>{sub.company}</SubEntryCompany>
                  <SubEntryBadge>{sub.badge}</SubEntryBadge>
                </SubEntryHeader>
                <SubEntryDescription>{sub.description}</SubEntryDescription>
                {sub.chips && (
                  <EntryChipsBlock>
                    <EntryChipsLabel>Na prática:</EntryChipsLabel>
                    <EntryTagsRow>
                      {sub.chips.map((chip) => (
                        <EntryTag key={chip.name} $accent={chip.accent}>{chip.name}</EntryTag>
                      ))}
                    </EntryTagsRow>
                  </EntryChipsBlock>
                )}
              </SubEntry>
            ))}
          </SubtrackList>
        )}
        <EntryPeriod>▸ {entry.period}</EntryPeriod>
        {entry.events && (
          <EventsTrack>
            {entry.events.map((ev) => (
              <EventItem key={ev.date + ev.label}>
                <EventDate>{ev.date}</EventDate>
                <EventLabel>{ev.label}</EventLabel>
              </EventItem>
            ))}
          </EventsTrack>
        )}
      </EntryBody>
      <TipsColumn>
        {entry.tips?.map((tip, i) => (
          <Balloon key={tip} $visible={visible} $delay={i * 0.18}>
            {tip}
          </Balloon>
        ))}
      </TipsColumn>
    </Entry>
  );
};

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
        <FilmReel />
        <Track>
          {timelineData.map((entry, index) => (
            <EntryCard key={entry.id} entry={entry} index={index} />
          ))}
        </Track>
      </SectionInner>
    </TimelineSection>
  );
};

export default Timeline;

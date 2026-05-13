import styled from 'styled-components';
import { tokens } from '../../../tokens';
import { sectionBase, h2Base } from '../../shared.styles';

export const FilmReelWrapper = styled.div.withConfig({ componentId: 'timeline__film-reel' })`
  margin-bottom: 48px;
  max-width: 1060px;
`;

export const FilmLabel = styled.div.withConfig({ componentId: 'timeline__film-label' })`
  font-size: 11px;
  letter-spacing: 0.22em;
  color: ${tokens.muted};
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const FilmControls = styled.div.withConfig({ componentId: 'timeline__film-controls' })`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 12px;
`;

export const FilmArrow = styled.button.withConfig({ componentId: 'timeline__film-arrow' })`
  width: 32px;
  height: 32px;
  border: 1px solid ${tokens.line};
  background: none;
  color: ${tokens.ink};
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s, background 0.2s, color 0.2s;

  &:hover:not(:disabled) {
    border-color: ${tokens.red};
    background: ${tokens.red};
    color: ${tokens.bg};
  }

  &:disabled {
    opacity: 0.25;
    cursor: default;
  }
`;

/* linha estática fora do scroll — não rola com o conteúdo */
export const FilmPeekOuter = styled.div.withConfig({ componentId: 'timeline__film-peek' })`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 0;
    right: 0;
    height: 1px;
    background: ${tokens.line};
    z-index: 2;
    pointer-events: none;
  }
`;

/* peek = (1060px wrapper - 507px frame) / 2 - 20px gap ≈ 253px → ~metade do frame */
export const FilmScrollArea = styled.div.withConfig({ componentId: 'timeline__film-scroll' })`
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-left: calc(50% - 253px);
  padding-right: calc(50% - 253px);
  user-select: none;

  &::-webkit-scrollbar { display: none; }
  scrollbar-width: none;
`;

export const FilmStrip = styled.div.withConfig({ componentId: 'timeline__film-strip' })`
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
  align-items: flex-start;
`;

export const FilmFrame = styled.div.withConfig({ componentId: 'timeline__film-frame' })`
  flex: none;
  width: 507px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  z-index: 1;
  scroll-snap-align: center;
  cursor: default;
`;

export const FilmDot = styled.div.withConfig({ componentId: 'timeline__film-dot' })<{ $active: boolean }>`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: ${({ $active }) => $active ? tokens.red : tokens.muted};
  border: 2px solid ${tokens.bg};
  box-shadow: 0 0 0 1px ${({ $active }) => $active ? tokens.red : 'transparent'};
  flex-shrink: 0;
  transform: ${({ $active }) => $active ? 'scale(1.25)' : 'scale(1)'};
  transition: background 0.3s, box-shadow 0.3s, transform 0.3s;
`;

export const FilmFrameYear = styled.div.withConfig({ componentId: 'timeline__film-frame-year' })<{ $active: boolean }>`
  font-family: ${tokens.fontDisplay};
  font-size: 22px;
  color: ${({ $active }) => $active ? tokens.red : tokens.muted};
  line-height: 1;
  letter-spacing: -0.01em;
  transition: color 0.3s;
`;

export const FilmCard = styled.div.withConfig({ componentId: 'timeline__film-card' })<{ $active: boolean }>`
  width: 100%;
  border: 1px solid ${({ $active }) => $active ? tokens.red : tokens.line};
  background: ${tokens.bg2};
  box-shadow: ${({ $active }) => $active ? `3px 3px 0 ${tokens.red}` : 'none'};
  transition: border-color 0.3s, box-shadow 0.3s;
`;

export const FilmImageBox = styled.div.withConfig({ componentId: 'timeline__film-imgbox' })`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: rgba(10, 8, 8, 0.06);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1) contrast(1.1);
    display: block;
  }
`;

export const FilmImagePlaceholder = styled.div.withConfig({ componentId: 'timeline__film-placeholder' })`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${tokens.fontDisplay};
  font-size: 52px;
  color: rgba(10, 8, 8, 0.06);
  letter-spacing: -0.02em;
  user-select: none;
`;

export const FilmFrameContent = styled.div.withConfig({ componentId: 'timeline__film-frame-content' })`
  padding: 12px 14px 14px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FilmFrameTitle = styled.div.withConfig({ componentId: 'timeline__film-frame-title' })`
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${tokens.ink};
  font-weight: 600;
`;

export const FilmFrameDesc = styled.p.withConfig({ componentId: 'timeline__film-frame-desc' })`
  && {
    font-size: 11px;
    line-height: 1.6;
    color: ${tokens.muted};
    margin: 0;
    max-width: none;
  }
`;

export const TimelineSection = styled.section.withConfig({ componentId: 'timeline-section' })`
  ${sectionBase}

  h2 {
    ${h2Base}
    margin-bottom: 8px;
  }
`;

export const Subtitle = styled.div.withConfig({ componentId: 'timeline__subtitle' })`
  font-size: 14px;
  letter-spacing: 0.18em;
  color: ${tokens.muted};
  text-transform: uppercase;
  margin-bottom: 40px;
`;

export const Track = styled.div.withConfig({ componentId: 'timeline__track' })`
  position: relative;
  border-left: 2px solid ${tokens.ink};
  padding-left: 0;
`;

export const Entry = styled.article.withConfig({ componentId: 'timeline__entry' })`
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  gap: 40px;
  padding: 32px 0 32px 40px;
  border-bottom: 1px dashed ${tokens.line};
  position: relative;
  transition: background 0.25s;

  &:hover { background: rgba(215, 38, 56, 0.04); }

  &::before {
    content: "";
    position: absolute;
    left: -8px;
    top: 48px;
    width: 14px;
    height: 14px;
    background: ${tokens.red};
    border: 2px solid ${tokens.ink};
    transition: background 0.25s, transform 0.25s;
  }

  &:hover::before {
    background: ${tokens.ink};
    transform: scale(1.4) rotate(45deg);
  }

  h3 {
    font-family: ${tokens.fontDisplay};
    font-size: 28px;
    margin: 0 0 4px;
    text-transform: uppercase;
    line-height: 1.1;
    transition: color 0.25s;
  }

  &:hover h3 { color: ${tokens.red}; }

  p {
    font-size: 16px;
    line-height: 1.7;
    color: rgba(10, 8, 8, 0.78);
    margin: 0 0 8px;
    max-width: 720px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 180px 1fr;
    gap: 28px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const EntryMeta = styled.div.withConfig({ componentId: 'timeline__entry-meta' })`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const EntryYear = styled.div.withConfig({ componentId: 'timeline__entry-year' })`
  font-family: ${tokens.fontDisplay};
  font-size: 64px;
  line-height: 1;
  color: ${tokens.red};
  transition: color 0.25s, transform 0.25s;
  transform-origin: left center;

  ${Entry}:hover & {
    color: ${tokens.ink};
    transform: scale(1.04);
  }

  @media (max-width: 900px) { font-size: 46px; }
`;

export const EntryCode = styled.div.withConfig({ componentId: 'timeline__entry-code' })`
  font-size: 14px;
  letter-spacing: 0.2em;
  color: ${tokens.muted};
`;

export const EntryBadge = styled.div.withConfig({ componentId: 'timeline__entry-badge' })`
  display: inline-block;
  background: ${tokens.ink};
  color: ${tokens.bg};
  font-size: 14px;
  padding: 3px 8px;
  letter-spacing: 0.16em;
  align-self: flex-start;
  font-weight: 700;
  transition: background 0.25s;

  ${Entry}:hover & { background: ${tokens.red}; }
`;

export const EntryBody = styled.div.withConfig({ componentId: 'timeline__entry-body' })`
  padding: 8px 0;
`;

export const EntryCompany = styled.div.withConfig({ componentId: 'timeline__entry-company' })`
  font-size: 14px;
  letter-spacing: 0.14em;
  color: ${tokens.muted};
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const EntryPeriod = styled.div.withConfig({ componentId: 'timeline__entry-period' })`
  font-size: 14px;
  color: ${tokens.cyan};
  letter-spacing: 0.14em;
  margin-top: 8px;
`;

export const SubtrackList = styled.div.withConfig({ componentId: 'timeline__subtrack' })`
  margin-top: 20px;
  border-left: 1px solid ${tokens.line};
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const SubEntry = styled.div.withConfig({ componentId: 'timeline__sub-entry' })`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SubEntryHeader = styled.div.withConfig({ componentId: 'timeline__sub-header' })`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const SubEntryYear = styled.span.withConfig({ componentId: 'timeline__sub-year' })`
  font-family: ${tokens.fontDisplay};
  font-size: 14px;
  color: ${tokens.red};
`;

export const SubEntryCompany = styled.span.withConfig({ componentId: 'timeline__sub-company' })`
  font-size: 14px;
  letter-spacing: 0.14em;
  color: ${tokens.muted};
  text-transform: uppercase;
`;

export const SubEntryBadge = styled.span.withConfig({ componentId: 'timeline__sub-badge' })`
  background: rgba(215, 38, 56, 0.1);
  color: ${tokens.red};
  font-size: 14px;
  padding: 2px 6px;
  letter-spacing: 0.14em;
  font-weight: 700;
`;

export const SubEntryDescription = styled.p.withConfig({ componentId: 'timeline__sub-desc' })`
  && {
    font-size: 14px;
    color: rgba(10, 8, 8, 0.62);
    margin: 0;
    line-height: 1.65;
    max-width: 680px;
  }
`;

export const EntryChipsBlock = styled.div.withConfig({ componentId: 'timeline__chips-block' })`
  margin-top: 12px;
`;

export const EntryChipsLabel = styled.div.withConfig({ componentId: 'timeline__chips-label' })`
  font-size: 11px;
  letter-spacing: 0.2em;
  color: ${tokens.muted};
  text-transform: uppercase;
  margin-bottom: 6px;
`;

export const EntryTagsRow = styled.div.withConfig({ componentId: 'timeline__tags-row' })`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const EntryTag = styled.span.withConfig({ componentId: 'timeline__tag' })<{ $accent?: 'red' | 'cyan' }>`
  font-size: 12px;
  letter-spacing: 0.12em;
  padding: 3px 8px;
  border: 1px solid ${({ $accent }) =>
    $accent === 'red' ? tokens.red : $accent === 'cyan' ? tokens.cyan : tokens.muted};
  color: ${({ $accent }) =>
    $accent === 'red' ? tokens.red : $accent === 'cyan' ? tokens.cyan : tokens.muted};
  background: ${({ $accent }) =>
    $accent === 'red' ? 'rgba(215,38,56,0.07)' : $accent === 'cyan' ? 'rgba(0,139,154,0.07)' : 'transparent'};
`;

export const EventsTrack = styled.div.withConfig({ componentId: 'timeline__events-track' })`
  margin-top: 20px;
  display: flex;
`;

export const EventItem = styled.div.withConfig({ componentId: 'timeline__event-item' })`
  flex: 1;
  position: relative;
  padding-top: 16px;
  padding-right: 8px;

  &::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 0;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${tokens.cyan};
  }

  &::after {
    content: "";
    position: absolute;
    top: 6px;
    left: 7px;
    right: 0;
    height: 1px;
    background: ${tokens.line};
  }

  &:last-child::after {
    display: none;
  }
`;

export const EventDate = styled.div.withConfig({ componentId: 'timeline__event-date' })`
  font-size: 10px;
  letter-spacing: 0.14em;
  color: ${tokens.cyan};
  font-family: ${tokens.fontMono};
  margin-bottom: 3px;
`;

export const EventLabel = styled.div.withConfig({ componentId: 'timeline__event-label' })`
  font-size: 11px;
  color: ${tokens.muted};
  line-height: 1.4;
  max-width: 120px;
`;

export const TipsColumn = styled.div.withConfig({ componentId: 'timeline__tips-col' })`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px 0 0 20px;
  border-left: 1px dashed ${tokens.line};

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Balloon = styled.div.withConfig({ componentId: 'timeline__balloon' })<{ $visible: boolean; $delay: number }>`
  padding: 6px 0 6px 10px;
  border-left: 2px solid ${tokens.red};
  font-size: 11px;
  line-height: 1.55;
  color: ${tokens.muted};
  letter-spacing: 0.02em;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'translateX(0)' : 'translateX(6px)')};
  transition: opacity 0.35s ${({ $delay }) => $delay}s ease, transform 0.35s ${({ $delay }) => $delay}s ease;
`;

export interface TimelineEntry {
  id: string;
  year: number;
  code: string;
  title: string;
  period: string;
  badge: string;
  company: string;
  description: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface ChipItem {
  name: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface StackTag {
  label: string;
  accent?: 'red' | 'cyan';
}

export interface StackGroup {
  num: string;
  title: string;
  sub: string;
  featured?: boolean;
  tags: StackTag[];
}

export interface ContactItem {
  label: string;
  value: string;
}

export interface SocialLink {
  href: string;
  label: string;
  tip: string;
  kind: 'whatsapp' | 'linkedin' | 'github' | 'jaime';
}

export interface NavSection {
  id: string;
  name: string;
}

export interface ParallaxLayer {
  text: string;
  top: string;
  side: 'left' | 'right';
  offset: string;
  fontSize: string;
  color: string;
  px: number;
  py: number;
  japanese?: boolean;
}

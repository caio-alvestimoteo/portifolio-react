export interface TimelineEntry {
  id: string;
  year: number;
  title: string;
  period: string;
  badge: string;
  company: string;
  description: string;
  details: TimelineDetailBlock[];
  blueprint: TimelineBlueprint;
}

export interface TimelineDetailBlock {
  label: string;
  text?: string;
  items?: string[];
}

export interface TimelineBlueprint {
  caption: string;
  title: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface Tech {
  name: string;
}

export interface Metric {
  label: string;
  value: string;
}

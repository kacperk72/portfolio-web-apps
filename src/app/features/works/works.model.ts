export type WorkLinkTarget = 'same-tab' | 'new-tab';

export interface WorkItem {
  id: string;
  title: string;
  year?: string;
  href: string;
  coverSrc: string;
  coverAlt?: string;
  target?: WorkLinkTarget;
  grid?: {
    colSpan: number;
    rowSpan: number;
  };
}

export type WorkLinkTarget = 'same-tab' | 'new-tab';

export interface WorkItem {
  id: string;
  titleKey: string;
  year?: string;
  href: string;
  coverSrc: string;
  coverAltKey?: string;
  target?: WorkLinkTarget;
  grid?: {
    colSpan: number;
    rowSpan: number;
  };
}

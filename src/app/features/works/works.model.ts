export type ProjectGalleryLayout = 'desktop' | 'mobile';

export interface ProjectShot {
  src: string;
  /** Mała wersja do miniatur galerii (tylko układ desktop). */
  thumbSrc?: string;
  captionKey: string;
  width: number;
  height: number;
}

export interface ProjectFeature {
  titleKey: string;
  textKey: string;
}

export interface ProjectShowcase {
  id: string;
  titleKey: string;
  kickerKey: string;
  leadKey: string;
  href: string;
  /** Domena pokazywana na przycisku i w pasku przeglądarki makiety. */
  domain: string;
  /** desktop — duży podgląd z miniaturami, mobile — rząd telefonów. */
  layout: ProjectGalleryLayout;
  shots: ProjectShot[];
  features: ProjectFeature[];
  stack: string[];
}

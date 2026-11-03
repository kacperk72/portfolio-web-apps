import { ProjectFeature, ProjectShot, ProjectShowcase } from './works.model';

const features = (prefix: string, count: number): ProjectFeature[] =>
  Array.from({ length: count }, (_, i) => ({
    titleKey: `${prefix}.FEATURE_${i + 1}.TITLE`,
    textKey: `${prefix}.FEATURE_${i + 1}.TEXT`,
  }));

const shots = (
  dir: string,
  prefix: string,
  names: string[],
  width: number,
  height: number,
  withThumbs = false
): ProjectShot[] =>
  names.map((name) => ({
    src: `/works/${dir}/${name}.webp`,
    thumbSrc: withThumbs ? `/works/${dir}/${name}-thumb.webp` : undefined,
    captionKey: `${prefix}.SHOTS.${name.toUpperCase()}`,
    width,
    height,
  }));

export const PROJECTS: ProjectShowcase[] = [
  {
    id: 'wedding-planner',
    titleKey: 'WORKS.WEDDING_PLANNER.TITLE',
    kickerKey: 'WORKS.WEDDING_PLANNER.KICKER',
    leadKey: 'WORKS.WEDDING_PLANNER.LEAD',
    href: 'https://wedding-planner-kubitk.pl',
    domain: 'wedding-planner-kubitk.pl',
    layout: 'desktop',
    shots: shots(
      'wedding-planner',
      'WORKS.WEDDING_PLANNER',
      ['pulpit', 'goscie', 'rozsadzenie', 'umowy', 'druk'],
      1280,
      800,
      true
    ),
    features: features('WORKS.WEDDING_PLANNER', 6),
    stack: [
      'Angular 21',
      'Signals',
      'Cloudflare Workers',
      'Cloudflare D1',
      'Better Auth',
      'Resend',
      'Playwright E2E',
      'GitHub Actions CI/CD',
    ],
  },
  {
    id: 'znajdzgroby',
    titleKey: 'WORKS.ZNAJDZGROBY.TITLE',
    kickerKey: 'WORKS.ZNAJDZGROBY.KICKER',
    leadKey: 'WORKS.ZNAJDZGROBY.LEAD',
    href: 'https://znajdzgroby.pl',
    domain: 'znajdzgroby.pl',
    layout: 'mobile',
    shots: shots(
      'znajdzgroby',
      'WORKS.ZNAJDZGROBY',
      ['welcome', 'start', 'details', 'map', 'route'],
      780,
      1688
    ),
    features: features('WORKS.ZNAJDZGROBY', 6),
    stack: [
      'Angular 21',
      'PWA / Service Worker',
      'Dexie (IndexedDB)',
      'Leaflet',
      'Cloudflare Workers',
      'D1 + KV',
      'Resend',
      'GitHub Actions CI/CD',
    ],
  },
];

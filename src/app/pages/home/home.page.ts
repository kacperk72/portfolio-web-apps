import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WorksGridComponent } from '../../features/works/works-grid/works-grid.component';
import { WORKS } from '../../features/works/works.data';

@Component({
  selector: 'app-home-page',
  imports: [NgOptimizedImage, WorksGridComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  private readonly experienceStart = new Date(2022, 6, 1);
  protected readonly totalExperience = this.formatDuration(this.experienceStart, new Date());

  protected readonly stackSections: ReadonlyArray<{
    title: string;
    items: ReadonlyArray<{ label: string; icon: StackIcon }>;
  }> = [
    {
      title: 'Commercial',
      items: [
        { label: 'Angular v14 – v21', icon: 'angular' },
        { label: 'Angular Material, PrimeNG, Chart.js', icon: 'ui' },
        { label: 'NgRx, RxJS, Signals', icon: 'state' },
        { label: 'Electron, WebSockets', icon: 'desktop' },
        { label: 'JavaScript, TypeScript, HTML, CSS, SCSS', icon: 'lang' },
        { label: 'GIT (GitLab/GitHub), JIRA, CI/CD, Google Workspace, Figma', icon: 'tools' },
        { label: 'AI tools: GitHub Copilot, Google Gemini, ChatGPT, Claude Code', icon: 'ai' },
        { label: 'E2E testing: Playwright (with Agents)', icon: 'e2e' },
        { label: 'Unit tests: Vitest', icon: 'unit' },
      ],
    },
    {
      title: 'Non-Commercial',
      items: [
        { label: 'Node.js, Express.js, Nest.js', icon: 'backend' },
        { label: 'MongoDB, Supabase, MySQL', icon: 'db' },
        { label: 'Docker', icon: 'docker' },
      ],
    },
  ];

  protected readonly about = {
    name: 'Kacper',
    title: 'Tworzę nowoczesne aplikacje webowe w Angularze.',
    lead: 'Ukończyłem studia magisterskie na kierunku Informatyka Stosowana na Uniwersytecie Jagiellońskim. Obecnie pracuję jako Front-end Developer w Comarch, gdzie rozwijam system raportowy do ewidencji czasu pracy i generowania raportów — dopasowany zarówno do potrzeb małych, jak i dużych firm.',
    statement:
      'Na co dzień pracuję w najnowszych wersjach Angulara, dbając o jakość, wydajność i nowoczesny UX. Mam doświadczenie w projektach z sektora ERP i współtworzę skalowalne, przyjazne dla użytkownika rozwiązania.',
    avatarSrc: '/profile/profilowe-animowane-min.png',
    avatarAlt: 'Zdjęcie profilowe',
  };

  protected readonly experience = [
    {
      id: 'comarch-cloud-tna',
      role: 'Frontend Developer — Comarch Cloud (TNA)',
      company: 'Comarch',
      period: 'mar 2023 — obecnie',
      highlights: [
        'Rozwijam widoki i integracje (m.in. integracja z nowym operatorem płatności) w aplikacji ERP.',
        'Współtworzę produkt dla nowego klienta; praca w dynamicznie rozwijającym się projekcie.',
        'Na co dzień współpracuję z UX oraz backendem, dbając o dopracowany UX i potrzeby biznesowe.',
        'Modernizuję i refaktoruję aplikację: aktualizacje bibliotek, poprawa architektury i utrzymywalności kodu.',
        'Zmodernizowałem projekt (Angular 14 → 20): migracja do standalone components, OnPush oraz Signals; redukcja zależności od zone.js.',
        'Świadomie korzystam z narzędzi AI (GitHub Copilot, ChatGPT, Google Gemini) w celu zwiększenia efektywności i jakości pracy.',
      ],
    },
    {
      id: 'comarch-healthcare',
      role: 'Frontend Developer — Comarch Healthcare',
      company: 'Comarch',
      period: 'lip 2022 — mar 2023',
      highlights: [
        'Wdrożenie do organizacji i praca z narzędziami: Jira oraz GitLab.',
        'Rozwój wewnętrznego modułu aplikacji: zbieranie statystyk z aplikacji i prezentacja ich w widoku.',
        'Tworzenie wykresów i czytelnej wizualizacji danych (m.in. Chart.js).',
        'Pisanie testów jednostkowych dla modułu statystyk (Jasmine, Karma).',
        'Realizacja i utrzymanie aplikacji w Angularze (m.in. Angular 15).',
      ],
    },
  ] as const;

  protected readonly stack = ['Angular', 'TypeScript', 'SCSS', 'RxJS', 'REST'] as const;

  protected readonly works = WORKS;

  private formatDuration(start: Date, end: Date): string {
    const monthsTotal = this.fullMonthsBetween(start, end);
    const years = Math.floor(monthsTotal / 12);
    const months = monthsTotal % 12;

    const parts: string[] = [];
    if (years > 0) parts.push(`${years} ${this.plYear(years)}`);
    parts.push(`${months} mies.`);
    return parts.join(' ');
  }

  private fullMonthsBetween(start: Date, end: Date): number {
    const startYear = start.getFullYear();
    const startMonth = start.getMonth();
    const endYear = end.getFullYear();
    const endMonth = end.getMonth();

    let months = (endYear - startYear) * 12 + (endMonth - startMonth);
    if (end.getDate() < start.getDate()) months -= 1;
    return Math.max(0, months);
  }

  private plYear(n: number): string {
    const mod10 = n % 10;
    const mod100 = n % 100;
    if (n === 1) return 'rok';
    if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return 'lata';
    return 'lat';
  }
}

type StackIcon =
  | 'ai'
  | 'angular'
  | 'backend'
  | 'db'
  | 'desktop'
  | 'docker'
  | 'e2e'
  | 'lang'
  | 'state'
  | 'tools'
  | 'ui'
  | 'unit';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WorksGridComponent } from '../../features/works/works-grid/works-grid.component';
import { WORKS } from '../../features/works/works.data';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [WorksGridComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  protected readonly about = {
    name: 'Kacper Kubit',
    title: 'Tworzę nowoczesne aplikacje webowe w Angularze.',
    lead: 'Ukończyłem studia magisterskie na kierunku Informatyka Stosowana na Uniwersytecie Jagiellońskim. Obecnie pracuję jako Front-end Developer w Comarch, gdzie rozwijam system raportowy do ewidencji czasu pracy i generowania raportów — dopasowany zarówno do potrzeb małych, jak i dużych firm.',
    statement:
      'Na co dzień pracuję w najnowszych wersjach Angulara, dbając o jakość, wydajność i nowoczesny UX. Mam doświadczenie w projektach z sektora ERP i współtworzę skalowalne, przyjazne dla użytkownika rozwiązania.',
    avatarSrc: '/profile/avatar.svg',
    avatarAlt: 'Zdjęcie profilowe',
  };

  protected readonly services = [
    {
      title: 'Aplikacje webowe',
      description: 'Aplikacje SPA, dashboardy, portale i narzędzia wewnętrzne dla biznesu.',
    },
    {
      title: 'Systemy ERP i raportowanie',
      description: 'Tworzenie czytelnych widoków, procesów i raportów dla użytkowników końcowych.',
    },
    {
      title: 'Jakość i wydajność',
      description: 'Nowoczesny Angular, czysty kod, performance, skalowalność i użyteczność.',
    },
  ] as const;

  private readonly experienceStart = new Date(2022, 6, 1); // lipiec 2022 (staż)
  protected readonly totalExperience = this.formatDuration(this.experienceStart, new Date());

  protected readonly experience = [
    {
      id: 'comarch',
      role: 'Front-end Developer',
      company: 'Comarch',
      period: 'lip 2022 — obecnie',
      highlights: [
        'Rozwój systemu raportowego do ewidencji czasu pracy oraz generowania raportów.',
        'Projekty w obszarze ERP: skalowalność, utrzymanie oraz dopracowany UX.',
        'Praca w najnowszych wersjach Angulara; nacisk na jakość i wydajność.',
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

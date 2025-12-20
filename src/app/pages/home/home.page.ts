import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  signal,
  inject,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { WorksGridComponent } from '../../features/works/works-grid/works-grid.component';
import { WORKS } from '../../features/works/works.data';
import { LanguageSwitcherComponent } from '../../shared/language-switcher/language-switcher.component';

@Component({
  selector: 'app-home-page',
  imports: [WorksGridComponent, TranslateModule, LanguageSwitcherComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  private readonly translate = inject(TranslateService);
  private readonly experienceStart = new Date(2022, 6, 1);

  private readonly translationsLoaded = signal<boolean>(false);

  constructor() {
    // Wait for translations to load
    this.translate.get('HERO.NAME').subscribe(() => {
      this.translationsLoaded.set(true);
    });

    // Update signal when language changes
    this.translate.onLangChange.subscribe((event) => {
      this.translationsLoaded.set(false);
      setTimeout(() => this.translationsLoaded.set(true), 50);
    });
  }

  protected readonly totalExperience = computed(() => {
    if (!this.translationsLoaded()) return '';
    return this.formatDuration(this.experienceStart, new Date());
  });

  protected readonly stackSections = computed(() => {
    if (!this.translationsLoaded()) return [];
    return [
      {
        title: this.translate.instant('SKILLS.COMMERCIAL'),
        items: [
          { label: this.translate.instant('STACK.ANGULAR'), icon: 'angular' as const },
          { label: this.translate.instant('STACK.UI_LIBS'), icon: 'ui' as const },
          { label: this.translate.instant('STACK.STATE'), icon: 'state' as const },
          { label: this.translate.instant('STACK.DESKTOP'), icon: 'desktop' as const },
          { label: this.translate.instant('STACK.LANGUAGES'), icon: 'lang' as const },
          { label: this.translate.instant('STACK.TOOLS'), icon: 'tools' as const },
          { label: this.translate.instant('STACK.AI_TOOLS'), icon: 'ai' as const },
          { label: this.translate.instant('STACK.E2E_TESTS'), icon: 'e2e' as const },
          { label: this.translate.instant('STACK.UNIT_TESTS'), icon: 'unit' as const },
        ],
      },
      {
        title: this.translate.instant('SKILLS.NON_COMMERCIAL'),
        items: [
          { label: this.translate.instant('STACK.BACKEND'), icon: 'backend' as const },
          { label: this.translate.instant('STACK.DATABASE'), icon: 'db' as const },
          { label: this.translate.instant('STACK.DOCKER'), icon: 'docker' as const },
        ],
      },
    ];
  });

  protected readonly about = computed(() => {
    if (!this.translationsLoaded())
      return { name: '', title: '', lead: '', statement: '', avatarSrc: '', avatarAlt: '' };
    return {
      name: this.translate.instant('HERO.NAME'),
      title: this.translate.instant('HERO.TITLE'),
      lead: this.translate.instant('HERO.LEAD'),
      statement: this.translate.instant('HERO.STATEMENT'),
      avatarSrc: '/profile/profilowe-animowane-min.png',
      avatarAlt: this.translate.instant('HERO.AVATAR_ALT'),
    };
  });

  protected readonly experience = computed(() => {
    if (!this.translationsLoaded()) return [];
    return [
      {
        id: 'comarch-cloud-tna',
        role: this.translate.instant('JOBS.COMARCH_CLOUD.ROLE'),
        company: this.translate.instant('JOBS.COMARCH_CLOUD.COMPANY'),
        period: this.translate.instant('JOBS.COMARCH_CLOUD.PERIOD'),
        highlights: [
          this.translate.instant('JOBS.COMARCH_CLOUD.HIGHLIGHT_1'),
          this.translate.instant('JOBS.COMARCH_CLOUD.HIGHLIGHT_2'),
          this.translate.instant('JOBS.COMARCH_CLOUD.HIGHLIGHT_3'),
          this.translate.instant('JOBS.COMARCH_CLOUD.HIGHLIGHT_4'),
          this.translate.instant('JOBS.COMARCH_CLOUD.HIGHLIGHT_5'),
        ],
      },
      {
        id: 'comarch-healthcare',
        role: this.translate.instant('JOBS.COMARCH_HEALTHCARE.ROLE'),
        company: this.translate.instant('JOBS.COMARCH_HEALTHCARE.COMPANY'),
        period: this.translate.instant('JOBS.COMARCH_HEALTHCARE.PERIOD'),
        highlights: [
          this.translate.instant('JOBS.COMARCH_HEALTHCARE.HIGHLIGHT_1'),
          this.translate.instant('JOBS.COMARCH_HEALTHCARE.HIGHLIGHT_2'),
          this.translate.instant('JOBS.COMARCH_HEALTHCARE.HIGHLIGHT_3'),
          this.translate.instant('JOBS.COMARCH_HEALTHCARE.HIGHLIGHT_4'),
          this.translate.instant('JOBS.COMARCH_HEALTHCARE.HIGHLIGHT_5'),
        ],
      },
    ];
  });

  protected readonly works = WORKS;

  private formatDuration(start: Date, end: Date): string {
    if (!this.translationsLoaded()) return '';

    const monthsTotal = this.fullMonthsBetween(start, end);
    const years = Math.floor(monthsTotal / 12);
    const months = monthsTotal % 12;

    const parts: string[] = [];
    if (years > 0) {
      const yearKey = this.getYearTranslationKey(years);
      parts.push(`${years} ${this.translate.instant(yearKey)}`);
    }
    const monthsShort = this.translate.instant('EXPERIENCE_SECTION.MONTHS_SHORT');
    parts.push(`${months} ${monthsShort}`);
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

  private getYearTranslationKey(n: number): string {
    const mod10 = n % 10;
    const mod100 = n % 100;

    if (n === 1) return 'EXPERIENCE_SECTION.YEAR_1';
    if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) {
      return 'EXPERIENCE_SECTION.YEAR_2_4';
    }
    return 'EXPERIENCE_SECTION.YEAR_5';
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

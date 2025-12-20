import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
  private readonly translate = inject(TranslateService);

  protected readonly currentLang = signal<string>('pl');
  protected readonly isOpen = signal<boolean>(false);

  protected readonly languages = [
    { code: 'pl', label: 'PL' },
    { code: 'en', label: 'EN' },
  ] as const;

  constructor() {
    // Initialize with current language
    const lang = this.translate.currentLang || this.translate.defaultLang || 'pl';
    this.currentLang.set(lang);

    // Listen for language changes
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang.set(event.lang);
    });
  }

  protected toggleDropdown(): void {
    this.isOpen.update((state) => !state);
  }

  protected selectLanguage(langCode: string): void {
    this.translate.use(langCode);
    this.currentLang.set(langCode);
    this.isOpen.set(false);
  }

  protected closeDropdown(): void {
    this.isOpen.set(false);
  }
}

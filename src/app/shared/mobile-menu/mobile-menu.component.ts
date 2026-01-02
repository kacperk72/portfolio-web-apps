import { Component, ChangeDetectionStrategy, signal, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, LanguageSwitcherComponent],
})
export class MobileMenuComponent {
  readonly isOpen = signal(false);
  readonly close = output<void>();

  readonly emailAddress = signal('');

  toggle(): void {
    this.isOpen.update((v) => !v);
  }

  open(): void {
    this.isOpen.set(true);
  }

  closeMenu(): void {
    this.isOpen.set(false);
    this.close.emit();
  }

  onNavigate(): void {
    this.closeMenu();
  }

  onSubscribe(): void {
    const email = this.emailAddress();
    if (email) {
      console.log('Newsletter subscription:', email);
      // TODO: Implement newsletter subscription logic
      this.emailAddress.set('');
    }
  }
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule],
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/kacperk72',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kacper-kubit-707862224/',
      icon: 'linkedin',
    },
  ];
}

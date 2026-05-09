import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { WorkItem } from '../works.model';

export type WorkCardSpan = 'normal' | 'tall' | 'wide';

@Component({
  selector: 'app-work-card',
  imports: [TranslateModule],
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.card-host--tall]': "cardSpan() === 'tall'",
    '[class.card-host--wide]': "cardSpan() === 'wide'",
  },
})
export class WorkCardComponent {
  item = input.required<WorkItem>();
  cardSpan = input<WorkCardSpan>('normal');

  protected readonly target = computed(() =>
    this.item().target === 'new-tab' ? '_blank' : '_self'
  );
  protected readonly rel = computed(() => (this.item().target === 'new-tab' ? 'noopener' : null));
}

import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { WorkItem } from '../works.model';

@Component({
  selector: 'app-work-card',
  standalone: true,
  imports: [NgStyle, TranslateModule],
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkCardComponent {
  item = input.required<WorkItem>();

  protected readonly target = computed(() =>
    this.item().target === 'new-tab' ? '_blank' : '_self'
  );
  protected readonly rel = computed(() => (this.item().target === 'new-tab' ? 'noopener' : null));

  protected readonly gridStyle = computed(() => {
    const grid = this.item().grid;
    if (!grid) return null;
    return {
      '--col-span': String(grid.colSpan),
      '--row-span': String(grid.rowSpan),
    } as Record<string, string>;
  });
}

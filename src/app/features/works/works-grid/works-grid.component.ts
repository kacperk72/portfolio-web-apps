import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { WorkItem } from '../works.model';
import { WorkCardComponent } from '../work-card/work-card.component';

interface WorkTile {
  item: WorkItem;
  span: 'normal' | 'tall' | 'wide';
}

@Component({
  selector: 'app-works-grid',
  imports: [WorkCardComponent],
  templateUrl: './works-grid.component.html',
  styleUrl: './works-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorksGridComponent {
  items = input.required<WorkItem[]>();

  protected readonly tiles = computed<WorkTile[]>(() => {
    const spans: Array<'normal' | 'tall' | 'wide'> = ['tall', 'normal', 'normal', 'tall'];
    return this.items().map((item, i) => ({
      item,
      span: spans[i % spans.length],
    }));
  });
}

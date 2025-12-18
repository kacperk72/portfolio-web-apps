import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { WorkItem } from '../works.model';
import { WorkCardComponent } from '../work-card/work-card.component';

@Component({
  selector: 'app-works-grid',
  standalone: true,
  imports: [WorkCardComponent],
  templateUrl: './works-grid.component.html',
  styleUrl: './works-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorksGridComponent {
  items = input.required<WorkItem[]>();
}

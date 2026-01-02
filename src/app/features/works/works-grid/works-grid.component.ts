import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { WorkItem } from '../works.model';
import { WorkCardComponent } from '../work-card/work-card.component';

@Component({
  selector: 'app-works-grid',
  standalone: true,
  imports: [WorkCardComponent, Carousel],
  templateUrl: './works-grid.component.html',
  styleUrl: './works-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorksGridComponent {
  items = input.required<WorkItem[]>();

  protected readonly responsiveOptions = [
    {
      breakpoint: '1200px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '900px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '600px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}

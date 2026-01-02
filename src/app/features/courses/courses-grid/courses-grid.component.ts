import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { CourseItem } from '../courses.model';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-courses-grid',
  imports: [CourseCardComponent, Carousel],
  templateUrl: './courses-grid.component.html',
  styleUrl: './courses-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesGridComponent {
  courses = input.required<CourseItem[]>();

  protected readonly responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CourseItem } from '../courses.model';

@Component({
  selector: 'app-course-card',
  imports: [TranslateModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
  course = input.required<CourseItem>();
}

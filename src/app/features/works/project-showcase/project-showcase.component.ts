import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectShowcase } from '../works.model';

@Component({
  selector: 'app-project-showcase',
  imports: [NgOptimizedImage, TranslateModule],
  templateUrl: './project-showcase.component.html',
  styleUrl: './project-showcase.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectShowcaseComponent {
  project = input.required<ProjectShowcase>();

  protected readonly active = signal(0);

  // Lista z jednym elementem — @for odtwarza <img>, gdy zmienia się wybrany zrzut
  protected readonly activeShots = computed(() => [this.project().shots[this.active()]]);

  protected select(index: number): void {
    this.active.set(index);
  }
}

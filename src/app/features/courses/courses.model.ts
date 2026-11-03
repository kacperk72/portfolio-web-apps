export interface CourseItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  imageSrc: string;
  imageAltKey: string;
  url: string;
  /** Kurs, który jeszcze trwa — karta dostaje plakietkę „W trakcie”. */
  inProgress?: boolean;
}

import { Component } from '@angular/core';

interface AppCard {
  name: string;
  label: string;
  href: string;
  coverSrc?: string;
  span: 'normal' | 'tall' | 'wide';
  accent?: string;
}

@Component({
  selector: 'app-apps',
  templateUrl: './apps.page.html',
  styleUrl: './apps.page.scss',
})
export class AppsPage {
  readonly apps: AppCard[] = [
    {
      name: 'Shopping List',
      label: 'Zakupy',
      href: 'https://peachpuff-jaguar-714134.hostingersite.com/',
      coverSrc: '/works/app-shopping-list.png',
      span: 'tall',
    },
    {
      name: 'Car App',
      label: 'Dashboard',
      href: 'https://salmon-fly-255466.hostingersite.com/dashboard',
      coverSrc: '/works/app-car-dashboard.svg',
      span: 'normal',
    },
    {
      name: 'Grave App',
      label: 'Cmentarz',
      href: 'https://darkgrey-octopus-623910.hostingersite.com/map',
      coverSrc: '/works/grave-app.png',
      span: 'normal',
    },
    {
      name: 'Fit Seats',
      label: 'Rezerwacje',
      href: 'https://green-ferret-271547.hostingersite.com/',
      coverSrc: '/works/app-fit-seats.png',
      span: 'tall',
    },
    {
      name: 'Statki',
      label: 'Gra',
      href: 'https://lightblue-pelican-288983.hostingersite.com/',
      span: 'normal',
      accent: '#4f8cff',
    },
    {
      name: 'Csik',
      label: 'Serwis',
      href: 'https://blanchedalmond-meerkat-832945.hostingersite.com/',
      span: 'normal',
      accent: '#ff6b6b',
    },
    {
      name: 'Portfolio',
      label: 'Strona',
      href: 'https://kubitk.com',
      span: 'wide',
      accent: '#2dd4a8',
    },
  ];
}

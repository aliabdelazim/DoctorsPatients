import { MenuItem, PrimeIcons } from 'primeng/api';

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Home',
    icon: PrimeIcons.HOME,
    routerLink: '/home',
    tabindex: '0',
  },
  {
    label: 'Doctors',
    icon: PrimeIcons.BOOK,
    routerLink: '/doctors',
    tabindex: '1',
  },
  {
    label: 'Patients',
    icon: PrimeIcons.USERS,
    routerLink: '/patients',
    tabindex: '2',
  },
];

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MENU_ITEMS } from './menu-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    class: 'flex h-full',
  },
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = MENU_ITEMS;
  display = true;
  activeItem: MenuItem = this.setActiveItem(location.pathname);

  routerSubs: Subscription | undefined;
  constructor(private router: Router) {}

  ngOnInit() {
    this.subscribeToNavigation();
  }

  private subscribeToNavigation() {
    this.routerSubs = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(nav => {
        const ev = nav as NavigationEnd;
        this.setActiveItem(ev.url);
      });
  }

  private setActiveItem(url: string) {
    return (this.activeItem =
      this.items.find(e => url.includes(e.routerLink) && e.routerLink) ||
      this.items[0]);
  }
}

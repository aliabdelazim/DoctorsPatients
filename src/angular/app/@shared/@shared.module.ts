import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { SkeletonModule } from 'primeng/skeleton';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './menu/menu.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { CountCardComponent } from './count-card/count-card.component';
import { AvatarModule } from 'primeng/avatar';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
@NgModule({
  declarations: [
    NotFoundComponent,
    MenuComponent,
    InfoCardComponent,
    CountCardComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    TabMenuModule,
    SkeletonModule,
    AvatarModule,
  ],
  providers: [MessageService, ConfirmationService, DialogService],
  exports: [MenuComponent, InfoCardComponent, CountCardComponent],
})
export class SharedModule {}

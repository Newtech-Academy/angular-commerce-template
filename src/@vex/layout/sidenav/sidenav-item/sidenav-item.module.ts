import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavItemComponent } from './sidenav-item.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { IconModule } from '@visurel/iconify-angular';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SidenavItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatRippleModule,
    IconModule,
    FlexLayoutModule,
  ],
  exports: [SidenavItemComponent]
})
export class SidenavItemModule {
}

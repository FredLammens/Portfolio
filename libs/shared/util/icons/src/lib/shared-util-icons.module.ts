import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PtIconsComponent } from './pt-icons.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PtIconsComponent],
  exports: [PtIconsComponent],
})
export class SharedUtilIconsModule {}

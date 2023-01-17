import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  ptIconsAlertCircle,
  ptIconsCheckmarkCircle,
  ptIconsInfo,
  PtIconsRegistryService,
  SharedUtilIconsModule,
} from '@fred/shared/util/icons';

import { DialogComponent } from './dialog.component';

@NgModule({
  imports: [CommonModule, SharedUtilIconsModule],
  declarations: [DialogComponent],
  exports: [DialogComponent],
})
export class DialogModule {
  constructor(private ptIconsRegistryService: PtIconsRegistryService) {
    this.ptIconsRegistryService.registerIcons([
      ptIconsAlertCircle,
      ptIconsInfo,
      ptIconsCheckmarkCircle,
    ]);
  }
}

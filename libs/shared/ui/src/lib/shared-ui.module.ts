import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomSvgComponent } from './svg/custom.svg.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomSvgComponent],
  exports: [CustomSvgComponent],
})
export class SharedUiModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IntersectDirective } from './intersect.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [IntersectDirective],
  exports: [IntersectDirective],
})
export class NgrxentensionsModule {}

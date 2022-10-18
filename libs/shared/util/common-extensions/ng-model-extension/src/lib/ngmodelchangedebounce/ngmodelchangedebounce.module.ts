import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgModelChangeDebouncedDirective } from './ng-model-change-debounced.directive';

@NgModule({
  declarations: [NgModelChangeDebouncedDirective],
  imports: [CommonModule],
  exports: [NgModelChangeDebouncedDirective],
})
export class NgModelChangeDebouncedModule {}

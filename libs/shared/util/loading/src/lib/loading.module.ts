import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoaderComponent } from './loader/loader.component';
import { LoadingDirective } from './loading.directive';
import { ScrollEndDirective } from './scroll-end.directive';

@NgModule({
  declarations: [LoadingDirective, ScrollEndDirective ,LoaderComponent],
  imports: [CommonModule],
  exports: [LoadingDirective,ScrollEndDirective ,LoaderComponent],
})
export class LoadingModule {}

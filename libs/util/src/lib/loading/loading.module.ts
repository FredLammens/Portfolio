import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { LoadingDirective } from './loading.directive';

@NgModule({
  declarations: [LoadingDirective, LoaderComponent],
  imports: [CommonModule],
  exports: [LoadingDirective, LoaderComponent],
})
export class LoadingModule {}

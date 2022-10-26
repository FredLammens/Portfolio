import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmojiDirective } from './emoji.directive';
import { IntersectDirective, ToCheckDirective } from './intersect.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [IntersectDirective, ToCheckDirective, EmojiDirective],
  exports: [IntersectDirective, ToCheckDirective, EmojiDirective],
})
export class NgrxentensionsModule {}

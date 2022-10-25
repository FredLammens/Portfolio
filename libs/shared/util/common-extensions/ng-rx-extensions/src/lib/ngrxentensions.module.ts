import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmojiDirective } from './emoji.directive';
import { IntersectDirective } from './intersect.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [IntersectDirective, EmojiDirective],
  exports: [IntersectDirective, EmojiDirective],
})
export class NgrxentensionsModule {}

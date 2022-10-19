import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedNavigationComponent } from './shared-navigation/shared-navigation.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SharedNavigationComponent],
  exports: [SharedNavigationComponent],
})
export class SharedUiModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@fred/shared/ui';

import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [CommonModule, RouterModule, SharedUiModule],
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
})
export class NavigationModule {}

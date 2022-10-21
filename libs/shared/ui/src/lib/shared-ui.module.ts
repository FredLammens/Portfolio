import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';
import { SharedNavigationComponent } from './shared-navigation/shared-navigation.component';

const components = [SharedNavigationComponent, CardComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...components],
  exports: [...components],
})
export class SharedUiModule {}

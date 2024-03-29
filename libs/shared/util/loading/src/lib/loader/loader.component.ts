/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'loader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div class="loader">
    <div class="loaderBar"></div>
  </div>`,
  styleUrls: ['./loader.scss'],
})
export class LoaderComponent {}

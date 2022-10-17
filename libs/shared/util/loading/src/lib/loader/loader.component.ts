/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';

@Component({
  selector: 'loader',
  template: ` <div class="loader">
    <div class="loaderBar"></div>
  </div>`,
  styleUrls: ['./loader.scss']
})
export class LoaderComponent {}

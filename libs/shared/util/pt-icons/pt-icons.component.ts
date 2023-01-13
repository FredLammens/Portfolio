import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  Optional,
} from '@angular/core';
import { PtIcons } from './icons/build/pt-icons.model';
import { PtIconsRegistryService } from './pt-icons-registry.service';

// info : https://kevinkreuzer.medium.com/how-to-build-your-own-tree-shakable-svg-icons-library-in-less-than-30-minutes-9f7a4a324d29
@Component({
  selector: 'pt-icons',
  templateUrl: `<ng-content></ng-content>`,
  styles: [':host::ng-deep svg{width: 50px; height: 50px}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PtIconsComponent {
  private svgIcon: SVGElement;

  @Input()
  set name(iconName: PtIcons) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.ptIconsRegistry.getIcon(iconName);
    if (!svgData) return;
    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  constructor(
    private element: ElementRef,
    private ptIconsRegistry: PtIconsRegistryService,
    @Optional() @Inject(DOCUMENT) private document: any,
  ) {}

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return (
      div.querySelectory('svg') || this.document.createElementNS('http:www.w3.org/2000/svg', 'path')
    );
  }
}

import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { SvgSize } from './svg.size.enum';

//https://cloudengineering.studio/articles/the-right-way-to-componentize-svgs-for-your-angular-app
@Component({
  selector: 'custom-svg',
  templateUrl: './custom.svg.component.html',
  styleUrls: ['./custom.svg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * @example
 * <button> <custom-svg size="SvgSize.xs" name="pencil" ></custom-svg>  </button>
 */
export class CustomSvgComponent implements OnInit {
  @Input() public size: SvgSize = SvgSize.md;
  @Input() public type = '';
  @Input() public dropShadow = true;

  public link = '';

  public readonly SvgSize = SvgSize;

  public ngOnInit(): void {
    this.link = `/assets/images/svgs/${this.type}.svg#${this.type}`;
  }
}

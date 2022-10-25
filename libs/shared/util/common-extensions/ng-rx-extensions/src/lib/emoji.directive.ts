/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

/**
 * https://unicode.org/emoji/charts/full-emoji-list.html#1f628
 * copy icon from browser column
 * @example
 * <p emoji="😜"></p>
 */
@Directive({
  selector: '[emoji]',
})
export class EmojiDirective implements OnInit {
  @Input() public emoji = '';

  constructor(private el: ElementRef) {}

  public ngOnInit() {
    this.el.nativeElement.textContent += this.emoji;
  }
}

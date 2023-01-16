import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
} from '@angular/core';

import { DialogType } from './dialog';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./dialog.component.scss'],
  selector: 'dialog [app-dialog]',
  template: `
    <section>
      <header>
        <div class="dialog__heading" *ngIf="customHeader.hasChildNodes() === false">
          <!-- icon in sidebar -->
          <pt-icons name="alert_circle"></pt-icons>
          <!-- <fba-icon
            *ngIf="showIcon && type !== dialogTypesEnum.basic"
            class="dialog__icon"
            [ngClass]="'dialog__icon--' + type"
            [theme]="iconTheme"
            [icon]="customIcon ? customIcon : iconType"
            size="medium"
          ></fba-icon> -->
          <!-- heading -->
          <p class="dialog__title">{{ title }}</p>
        </div>
        <div #customHeader class="dialog__heading">
          <ng-content select="[role=header]"></ng-content>
        </div>
      </header>

      <!-- description -->
      <main
        [ngClass]="{
          'dialog__main-no-padding': type === dialogTypesEnum.basic
        }"
      >
        <span class="dialog__description" *ngIf="customDescription.hasChildNodes() === false">
          {{ description }}
        </span>
        <div #customDescription class="dialog__description">
          <ng-content select="[role=description]"></ng-content>
        </div>
      </main>

      <!-- buttons  -->
      <footer>
        <div class="dialog__actions" *ngIf="customActions.hasChildNodes() === false">
          <!-- TODO: button class in dialog scss file  -->
          <button
            *ngIf="
              type !== dialogTypesEnum.info &&
              type !== dialogTypesEnum.success &&
              type !== dialogTypesEnum.warning &&
              type !== dialogTypesEnum.error
            "
            class="btn"
            (click)="serviceDialogSecondary ? secondaryAction() : secondary.emit($event); close()"
          >
            {{ 'CANCEL' }}
          </button>
          <button
            class="btn btn-primary"
            (click)="serviceDialogPrimary ? primaryAction() : primary.emit($event); close()"
          >
            {{ 'OK' }}
          </button>
        </div>
        <div #customActions>
          <ng-content select="[role=buttons]"></ng-content>
        </div>
      </footer>
    </section>
  `,
})
export class DialogComponent {
  private _type: DialogType = DialogType.basic;

  public dialogTypesEnum = DialogType;

  @Input()
  public set type(dT: DialogType) {
    this._type = dT;
    switch (dT) {
      case DialogType.basic:
        this.title = this.title || '';
        this.iconType = 'check-circle';
        break;
      case DialogType.success:
        this.title = this.title || 'SUCCESS';
        this.iconType = 'check-circle';
        break;
      case DialogType.warning:
        this.title = this.title || 'WARNING';
        this.iconType = 'exclamation-circle';
        break;
      case DialogType.error:
        this.title = this.title || 'ERROR';
        this.iconType = 'close-circle';
        break;
      case DialogType.confirmation:
        this.title = this.title || 'CONFIRMATION';
        this.iconType = 'exclamation-circle';
        break;
      case DialogType.info:
        this.title = this.title || 'INFORMATION';
        this.iconType = 'info-circle';
        break;
      default:
        this.showIcon = false;
        this.iconType = 'exclamation-circle';
    }
  }

  public get type(): DialogType {
    return this._type;
  }

  @Input() public title = '';

  @Input() public description = '';

  @Input() public iconTheme: 'outlined' | 'filled' | 'two-tone' = 'outlined';

  @Input() public customIcon = '';

  @Input() public showIcon = true;

  @Output() public primary: EventEmitter<MouseEvent> = new EventEmitter();

  @Output() public secondary: EventEmitter<MouseEvent> = new EventEmitter();

  public serviceDialogPrimary = false;

  public serviceDialogSecondary = false;

  public primaryAction!: () => void;

  public secondaryAction!: () => void;

  public iconType: 'check-circle' | 'close-circle' | 'exclamation-circle' | 'info-circle' =
    'exclamation-circle';

  constructor(private host: ElementRef, private renderer: Renderer2) {}

  private get element(): any {
    return this.host.nativeElement;
  }

  public show(): void {
    this.element.showModal();
  }

  // custom close function to be able to animate the out close state of the dialog
  public close(): void {
    this.element.addEventListener(
      'animationend',
      (e: AnimationEvent) => {
        if (e.animationName === 'fadeOut') {
          this.element.close();
          this.renderer.removeAttribute(this.element, 'closing');
        }
      },
      { once: true },
    );
    this.renderer.setAttribute(this.element, 'closing', '');
  }
}

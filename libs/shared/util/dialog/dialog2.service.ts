import { DOCUMENT } from '@angular/common';
import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  Injectable,
  Injector,
} from '@angular/core';
import { DialogType } from '../dialog/dialog';
import { DialogComponent } from '../dialog/dialog.component';

/**
 * Service for injecting Dialog2Components to the DOM
 * the service doesnt need a container component to inject the dialog component
 */
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  // object that knows how to create a component
  private factory: ComponentFactory<DialogComponent>;

  // exposes reference to native dom element
  private componentRef: ComponentRef<DialogComponent>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private doc: Document,
  ) {
    // object that knows how to create a component
    this.factory = this.resolver.resolveComponentFactory(DialogComponent);
    // exposes reference to native dom element
    this.componentRef = this.factory.create(this.injector);
  }

  // by default, if the dialog is shown from the service => it's a confirmation and not a basic
  public showDialog(
    description: string,
    primaryAction?: () => void,
    secondaryAction?: () => void,
    type: DialogType = DialogType.confirmation,
    title?: string,
    showIcon?: boolean,
    iconTheme?: 'outlined' | 'filled' | 'two-tone',
  ): void {
    // set up dialog component
    const cRef = this.componentRef.instance;
    cRef.description = description;
    if (title) {
      cRef.title = title;
    } else {
      switch (type) {
        case DialogType.success:
          cRef.title = 'SUCCESS';
          break;
        case DialogType.warning:
          cRef.title = 'WARNING';
          break;
        case DialogType.error:
          cRef.title = 'ERROR';
          break;
        case DialogType.confirmation:
          cRef.title = 'CONFIRMATION';
          break;
        case DialogType.info:
          cRef.title = 'INFORMATION';
          break;
        default:
          cRef.title = '';
      }
    }
    if (type) cRef.type = type;
    if (showIcon) cRef.showIcon = showIcon;
    if (iconTheme) cRef.iconTheme = iconTheme;
    if (primaryAction) {
      cRef.serviceDialogPrimary = true;
      cRef.primaryAction = primaryAction;
    }
    if (secondaryAction) {
      cRef.serviceDialogSecondary = true;
      cRef.secondaryAction = secondaryAction;
    }
    // add local change dection
    this.componentRef.hostView.detectChanges();
    const { nativeElement } = this.componentRef.location;
    // add element to document body
    this.doc.body.appendChild(nativeElement);
    // trigger open state of document
    // showModal instead of show to get custom backdrop
    this.componentRef.location.nativeElement.showModal();
  }
}

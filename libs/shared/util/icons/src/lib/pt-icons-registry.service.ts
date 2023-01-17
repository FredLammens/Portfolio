/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Injectable } from '@angular/core';

import { ptIcons, PtIcons } from './icons/build/pt-icons.model';

@Injectable({
  providedIn: 'any',
})
export class PtIconsRegistryService {
  private registry = new Map<ptIcons, string>();

  public registerIcons(icons: PtIcons[]): void {
    icons.forEach((icon: any) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: ptIcons): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(
        `we could not find the icon with the name ${iconName}. did you add it to the Icon registry? `,
      );
    }
    return this.registry.get(iconName);
  }
}

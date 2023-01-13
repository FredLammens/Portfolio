/** A uniform interface to define what a Dialog is */
export interface Dialog {
  id: number;
  type: DialogType;
  title: string;
  description: string;
  primaryAction?: () => null | void;
  secondaryAction?: () => null | void;
}
/** Define the type of dialog */
// eslint-disable-next-line no-shadow
export enum DialogType {
  basic = 'basic',
  confirmation = 'confirmation',
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
  plain = 'plain',
}

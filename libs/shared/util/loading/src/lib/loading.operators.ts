import { defer, Observable, Subject } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

// invokes a callback upon subscription
export function prepare<T>(
  callback: () => void,
): (source: Observable<T>) => Observable<T> {
  return (source: Observable<T>): Observable<T> =>
    defer(() => {
      callback();
      return source;
    });
}
// ! only works for initial load or if subscription start and ends
// update this subject upon subscription to the actual source stream via indicator.next(true)
export function getLoadingState<T>(
  loadingState: Subject<boolean>,
): (source: Observable<T>) => Observable<T> {
  return (source: Observable<T>): Observable<T> =>
    source.pipe(
      prepare(() => loadingState.next(true)),
      tap(() => loadingState.next(false)),
      finalize(() => loadingState.next(false)),
    );
}

// -------------------------------------example--------------------------------------------
// ----------------TS
// export class UserComponent {
//   loading$ = new Subject<boolean>();
//   constructor(private userService: UserService) {}
//   create(name = 'John Doe'): void {
//     this.userService
//       .create(new User(name))
//       .pipe(getLoadingState(this.loading$))
//       .subscribe();
//   }
// }
// --------------------HTML
// <button (click)="create()">Create User</button>
// <div *ngIf="loading$ | async">
//   Creating, please wait <loading-indicator></loading-indicator>
// </div>

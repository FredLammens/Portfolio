export interface Project {
  tags: Array<'Web' | 'Android' | 'IOS'>;
  tech: Array<TechStack>;
  githubLink: string;
  webisteLink: string;
  title: string;
  description: string;
  state: State;
  img: string;
  imgSrc: string;
  androidImgSrc?: string;
  iosImgSrc?: string;
  date: Date;
}

export enum TechStack {
  Angular,
  Firebase,
  Ionic,
  NxWorkspace,
}
export const techMap = new Map([
  [TechStack.Angular, '#c3002f'],
  [TechStack.Firebase, '#ffcc2f'],
  [TechStack.Ionic, '#176bff'],
  [TechStack.NxWorkspace, '#1c2d53'],
]);

//found with https://iconscout.com/all-assets/nx
export const TechImgMap = new Map([
  [TechStack.Angular, 'angularIcon'],
  [TechStack.Firebase, 'firebaseIcon'],
  [TechStack.Ionic, 'ionicIcon'],
  [TechStack.NxWorkspace, 'nxIcon'],
]);

export const enum State {
  Backlog,
  InProgess,
  Done,
}

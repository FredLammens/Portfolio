export interface Project {
  tags: Array<Tag>;
  tech: Array<TechStack>;
  githubLink: string;
  webisteLink: string;
  title: string;
  description: string;
  state: State;
  img: string;
  imgSrc: string;
  date: Date;
}

export const enum Tag {
  Web,
  Mobile,
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

export const enum State {
  Backlog,
  InProgess,
  Done,
}

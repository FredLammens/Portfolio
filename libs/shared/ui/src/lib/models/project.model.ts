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

export const enum TechStack {
  Angular,
  Firebase,
  Ionic,
  NxWorkspace,
}

export const enum State {
  Backlog,
  InProgess,
  Done,
}

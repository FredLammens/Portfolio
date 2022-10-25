export interface Project {
  tags: Array<Tag>;
  tech: Array<TechStack>;
  githubLink: string;
  webisteLink: string;
  extraInfo?: string;
}

export const enum Tag {
  Web,
  Mobile,
}

export const enum TechStack {
  Angular,
  Firebase,
  Ionic,
}

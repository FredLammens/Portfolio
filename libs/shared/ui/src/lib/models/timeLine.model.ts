export interface Job {
  year: string;
  jobInfo: Array<JobInfo>;
}

export interface JobInfo {
  Title: string;
  Company: string;
  description: string;
  companyDescription?: string;
  tasks?: Array<string>;
  keywords?: Array<string>;
}

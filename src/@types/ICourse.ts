type CourseCode = `ECO${number}`;
export type CourseType =
  | 'MANDATORY'
  | 'COMPUTING'
  | 'AUTOMATION'
  | 'TELECOMMUNICATIONS';

export interface ICourse {
  name: string;
  label: string;
  duration: number;
  code: CourseCode;
  period: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  type: CourseType[];
  prerequisites: CourseCode[];
}

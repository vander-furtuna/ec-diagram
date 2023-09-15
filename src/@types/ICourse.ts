type CourseCode = `ECO${number}`;
export type DurationType = 32 | 64 | 96;
export type PeriodType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface ICourse {
    name: string;
    label: string;
    duration: DurationType;
    code: CourseCode;
    period: PeriodType;
    type: CourseType[];
    prerequisites: CourseCode[];
}

export enum CourseType {
    MANDATORY = 'Obrogatória',
    COMPUTING = 'Computação',
    AUTOMATION = 'Automação',
    TELECOMMUNICATIONS = 'Telecomunicações',
}

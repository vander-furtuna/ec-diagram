type CourseCode = `ECO${number}`;

export interface ICourse {
    name: string;
    label: string;
    duration: number;
    code: CourseCode;
    period: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    type: CourseType[];
    prerequisites: CourseCode[];
}

export enum CourseType {
    MANDATORY = 'Obrigatória',
    COMPUTING = 'Computação',
    AUTOMATION = 'Automação',
    TELECOMMUNICATIONS = 'Telecomunicações',
}

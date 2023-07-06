import { ReactNode } from 'react';
import { CourseProvider } from './course';

interface IAppProvider {
  children: ReactNode;
}

export function AppProvider({ children }: IAppProvider) {
  return <CourseProvider>{children}</CourseProvider>;
}

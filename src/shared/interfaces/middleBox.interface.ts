import { ReactNode } from 'react';

export interface MiddleBoxProps extends React.HTMLAttributes<HTMLDivElement> {
   children: ReactNode;
   title: string;
   description?: string;
}

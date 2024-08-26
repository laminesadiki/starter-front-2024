import { ErrorStatusCode } from '@shared/enums/errors.enum';

export interface CustomErrorConstant {
   VALUE: string;
   STATUS: ErrorStatusCode;
   MESSAGE: string;
}

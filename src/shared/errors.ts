import { ErrorStatusCode } from './enums/errors.enum';
import { CustomErrorConstant } from './interfaces/errors.interface';

export const BAD_REQUEST: CustomErrorConstant = {
   VALUE: 'custom.error.constant.value.BAD_REQUEST',
   STATUS: ErrorStatusCode.BadRequest,
   MESSAGE: 'custom.error.constant.message.BAD_REQUEST',
};

export const NOT_FOUND: CustomErrorConstant = {
   VALUE: 'custom.error.constant.value.NOT_FOUND',
   STATUS: ErrorStatusCode.NotFound,
   MESSAGE: 'custom.error.constant.message.NOT_FOUND',
};

export const UN_AUTHORIZED: CustomErrorConstant = {
   VALUE: 'custom.error.constant.value.UN_AUTHORIZED',
   STATUS: ErrorStatusCode.Unauthorized,
   MESSAGE: 'custom.error.constant.message.UN_AUTHORIZED',
};

export const FORBIDDEN: CustomErrorConstant = {
   VALUE: 'custom.error.constant.value.FORBIDDEN',
   STATUS: ErrorStatusCode.Forbidden,
   MESSAGE: 'custom.error.constant.message.FORBIDDEN',
};

export const INTERNAL_SERVER: CustomErrorConstant = {
   VALUE: 'custom.error.constant.value.INTERNAL_SERVER',
   STATUS: ErrorStatusCode.InternalServerError,
   MESSAGE: 'custom.error.constant.message.INTERNAL_SERVER',
};

export const TOO_MANY_REQUESTS: CustomErrorConstant = {
   VALUE: 'custom.error.constant.value.TOO_MANY_REQUESTS',
   STATUS: ErrorStatusCode.TooManyRequests,
   MESSAGE: 'custom.error.constant.message.TOO_MANY_REQUESTS',
};

export const getErrorDetails = (statusCode: number) => {
   switch (statusCode) {
      case ErrorStatusCode.BadRequest:
         return BAD_REQUEST;
      case ErrorStatusCode.Forbidden:
         return FORBIDDEN;
      case ErrorStatusCode.Unauthorized:
         return UN_AUTHORIZED;
      case ErrorStatusCode.NotFound:
         return NOT_FOUND;
      case ErrorStatusCode.InternalServerError:
         return INTERNAL_SERVER;
      case ErrorStatusCode.TooManyRequests:
         return TOO_MANY_REQUESTS;
      default:
         return null;
   }
};

export { ErrorStatusCode };

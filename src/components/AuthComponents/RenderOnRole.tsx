import AuthService from '@services/AuthService';
import { AuthPropsType } from './types';
import CustomError from '@components/CustomError/CustomError';
import { ErrorStatusCode } from '@shared/errors';
import { NODE_ENV } from '@config/env';
import { EnvName } from '@shared/enums';

export default function RenderOnRole(props: AuthPropsType) {
   const { roles, children } = props;
   if (!AuthService.hasRole(roles) && NODE_ENV !== EnvName.DISABLE_KEYCLOAK)
      return <CustomError status={ErrorStatusCode.Forbidden} />;
   return children;
}

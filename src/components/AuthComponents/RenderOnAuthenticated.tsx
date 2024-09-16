import { UrlPathsEnum } from '@shared/enums/paths.enum';
import AuthService from '@services/AuthService';
import { NODE_ENV } from '@config/env';
import { EnvName } from '@shared/enums';

export default function RenderOnAuthenticated(props: {
   children: JSX.Element;
}) {
   const { children } = props;
   if (
      AuthService.isLoggedIn() ||
      window.location.pathname === UrlPathsEnum.LOGIN_LAWYER ||
      NODE_ENV === EnvName.DISABLE_KEYCLOAK
   )
      return children;
   return <div>UnAuthorized</div>;
}

import { keycloakConfig } from '@config/keycloak.config';
import Keycloak from 'keycloak-js';
import { useState } from 'react';
import useOnMountUnsafe from './useOnMountUnsafe';

export default function useAuth() {
   const [isLogin, setLogin] = useState(false);

   useOnMountUnsafe(() => {
      const init = () => {
         const keycloak = new Keycloak(keycloakConfig);
         keycloak
            .init({
               onLoad: 'login-required',
            })
            .then((res: boolean) => {
               setLogin(res);
            });
      };
      init();
   });

   return isLogin;
}

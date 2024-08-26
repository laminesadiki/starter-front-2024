import { DOMAIN_NAME } from '@config/env';
import Cookies from 'js-cookie';

import isValidDomain from 'is-valid-domain';
import { DomainName } from '@shared/enums/domainName.enum';

export const getCookieDomainName = (domainName: string | undefined) => {
   if (!domainName) {
      return DomainName.LOCAL;
   }
   if (isValidDomain(domainName)) {
      return `.${domainName}`;
   }
   return DomainName.LOCAL;
};

export const setCookieWithSubDomainSharing = (key: string, value: string) => {
   Cookies.set(key, value, {
      path: '/',
      domain: getCookieDomainName(DOMAIN_NAME),
      sameSite: 'None',
      secure: true,
   });
};

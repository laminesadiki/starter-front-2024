import { describe, it, expect } from 'vitest';
import { getCookieDomainName } from './cookie.utils';

describe('Cookie Utils', () => {
   describe('getCookieDomainName', () => {
      it('should return a valid cookie domaine Name', () => {
         expect(getCookieDomainName('dev.opalexe.fr')).toBe('.dev.opalexe.fr');
         expect(getCookieDomainName('opalexe.fr')).toBe('.opalexe.fr');
         expect(getCookieDomainName('app-dev.opalexe.fr')).toBe(
            '.app-dev.opalexe.fr',
         );
      });

      it('should return localhost if not a valid domaine Name', () => {
         expect(getCookieDomainName('&test.opalexe.fr')).toBe('localhost');
         expect(getCookieDomainName('dev*.opalexe.fr')).toBe('localhost');
         expect(getCookieDomainName('lorem')).toBe('localhost');
      });

      it('should return localhost if localhost', () => {
         expect(getCookieDomainName('localhost')).toBe('localhost');
      });

      it('should return localhost if domaine Name has undefined value', () => {
         expect(getCookieDomainName(undefined)).toBe('localhost');
      });
   });
});

import { keycloakConfig } from '@config/keycloak.config';
import Keycloak, {
   KeycloakLoginOptions,
   KeycloakLogoutOptions,
   KeycloakTokenParsed,
} from 'keycloak-js';
import { CallBackType } from '../types';
import { setCookieWithSubDomainSharing } from '@utils/index';

export enum CookieName {
   ACCESS_TOKEN = 'access_token',
   REFRESH_TOKEN = 'refresh_token',
   EXPERTISE_ID = 'expertiseId',
}

export enum UrlPathsEnum {
   HOME = '/',
   TERMS_OF_USE = '/termsofuse',
   EXPERTISE_LIST = '/expertises',
   LAWYERS_DIRECTORY = '/lawyers-directory',
   DOWNLOAD_EXPERTISE_FILE = '/download/expertises',
   LOGIN_LAWYER = '/login/lawyer',
   ADD_CERTIFICATE = '/add-certificate/:token',
   EXPERTISE_DETAILS = '/expertise-details',
}

type KeycloakLoginType = (options?: KeycloakLoginOptions) => Promise<void>;
type KeycloakLogoutType = (options?: KeycloakLogoutOptions) => Promise<void>;

const _kc = new Keycloak(keycloakConfig);

_kc.onAuthRefreshError = async () => {
   try {
      await _kc.logout();
   } catch (error) {
      console.log('logout error ', error);
   }
};

const initKeycloak = async (onAuthenticatedCallback: CallBackType) => {
   try {
      let authenticated = false;
      if (window.location.pathname === UrlPathsEnum.LOGIN_LAWYER) {
         authenticated = await _kc.init({
            onLoad: 'check-sso',
         });
         if (!authenticated) {
            await _kc.login({
               idpHint: 'lawyer',
            });
         }
      } else {
         authenticated = await _kc.init({
            onLoad: 'login-required',
         });
      }

      setCookieWithSubDomainSharing(CookieName.ACCESS_TOKEN, _kc.token || '');

      if (authenticated) {
         onAuthenticatedCallback();
         return 'success';
      }
   } catch (error) {
      console.log(error);
      return 'error';
   }
};

const doLogin: KeycloakLoginType = _kc.login;

const doLogout: KeycloakLogoutType = _kc.logout;

const getToken = async () => {
   if (_kc.isTokenExpired()) {
      await updateToken();
   }
   setCookieWithSubDomainSharing(CookieName.ACCESS_TOKEN, _kc.token || '');
   return _kc.token;
};

const getRefreshToken = (): string => {
   if (_kc.refreshToken) return _kc.refreshToken;
   return localStorage.getItem(CookieName.REFRESH_TOKEN) || '';
};

const getTokenParsed = (): KeycloakTokenParsed => _kc.tokenParsed || {};

const getRefreshTokenParsed = (): KeycloakTokenParsed =>
   _kc.refreshTokenParsed || {};

const isLoggedIn = (): boolean => !!_kc.token;

const updateToken = async () => {
   try {
      await _kc.updateToken(5);
      setCookieWithSubDomainSharing(CookieName.ACCESS_TOKEN, _kc.token || '');
   } catch (error) {
      console.log({ error });
   }
};

const getUsername = (): string => _kc.tokenParsed?.preferred_username || '';

const getEmail = (): string => _kc.tokenParsed?.email || '';

const getUserId = (): string => _kc.tokenParsed?.sub || '';

const hasRole = (roles: string[]): boolean =>
   roles.some((role: string) => _kc.hasRealmRole(role));

const AuthService = {
   initKeycloak,
   doLogin,
   doLogout,
   isLoggedIn,
   getToken,
   getTokenParsed,
   updateToken,
   getUsername,
   getEmail,
   getUserId,
   hasRole,
   getRefreshToken,
   getRefreshTokenParsed,
};

export default AuthService;

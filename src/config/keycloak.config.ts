import { KeycloakConfig } from 'keycloak-js';
import { AUTH_URL, AUTH_REALM, AUTH_CLIENT_ID } from '@config/env';

export const keycloakConfig: KeycloakConfig = {
   url: AUTH_URL,
   realm: AUTH_REALM,
   clientId: AUTH_CLIENT_ID,
};

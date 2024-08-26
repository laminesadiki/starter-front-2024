export enum EnvName {
   LOCAL = 'local',
   PRODUCTION = 'production',
   PROD = 'prod',
   DEV = 'dev',
   DEVELOPMENT = 'development',
   TEST = 'test',
   DISABLE_KEYCLOAK = 'no-kc',
}

export const isDev = (envName: string) =>
   ([EnvName.DEV, EnvName.DEVELOPMENT] as string[]).includes(envName);

export const isProd = (envName: string) =>
   ([EnvName.PROD, EnvName.PRODUCTION] as string[]).includes(envName);

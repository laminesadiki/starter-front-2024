import { FRONT_LEGACY_URL } from '@config/env';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const buildUrlQuery = (data: any) => {
   return Object.keys(data)
      .map((key: string) => {
         return `${key}=${data[key]}`;
      })
      .join('&');
};

export const toBearerToken = (token: string) => 'Bearer ' + token;

export const getLastCharacters = (text: string, numOfCharacters: number) =>
   text.substring(text.length - numOfCharacters);

export const getSectionUrl = (expertiseName: string, goto: string) => {
   const url = new URL(FRONT_LEGACY_URL);
   url.searchParams.set('expertiseName', expertiseName);
   url.searchParams.set('goto', goto);
   return url.toString();
};

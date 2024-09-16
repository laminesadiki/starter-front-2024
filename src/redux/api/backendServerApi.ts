import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_ENDPOINT } from '@config/env';
import AuthService from '@services/AuthService';
import { toBearerToken } from '@utils/index';

export const backendServerApi = createApi({
   reducerPath: 'backendServerApi',
   baseQuery: fetchBaseQuery({
      baseUrl: BACKEND_ENDPOINT,
      prepareHeaders: async (headers: Headers) => {
         const accessToken = await AuthService.getToken();
         if (accessToken) {
            headers.set('Authorization', toBearerToken(accessToken));
         }
         return headers;
      },
   }),
   endpoints: builder => ({
      getProfile: builder.query({
         query: () => {
            return {
               url: '/me',
            };
         },
      }),
   }),
});

export const { useGetProfileQuery } = backendServerApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_V2_ENDPOINT } from '@config/env';
import AuthService from '@services/AuthService';
import { toBearerToken } from '@utils/index';

export const backendV2ServerApi = createApi({
   reducerPath: 'backendV2ServerApi',
   baseQuery: fetchBaseQuery({
      baseUrl: BACKEND_V2_ENDPOINT,
      prepareHeaders: async (headers: Headers) => {
         const accessToken = await AuthService.getToken();
         if (accessToken) {
            headers.set('Authorization', toBearerToken(accessToken));
         }
         return headers;
      },
   }),
   endpoints: builder => ({
      getUserTermsOfUse: builder.query({
         query: () => '/terms/me',
      }),
      getTermsOfUsePdfUrl: builder.query({
         query: () => '/terms/get',
      }),
      acceptTermsOfUse: builder.mutation({
         query: () => {
            return {
               url: '/terms/accept',
               method: 'POST',
            };
         },
      }),
   }),
});

export const {
   useGetUserTermsOfUseQuery,
   useGetTermsOfUsePdfUrlQuery,
   useAcceptTermsOfUseMutation,
} = backendV2ServerApi;

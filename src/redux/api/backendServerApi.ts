import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_ENDPOINT } from '@config/env';
import AuthService from '@services/AuthService';
import { toBearerToken } from '@utils/index';
import {
   GetLawyersArgsType,
   LawyersResponseType,
} from './api.type';
import { getErrorDetails } from '@shared/errors';


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
      getLawyers: builder.query({
         query: (arg: { params: Partial<GetLawyersArgsType> }) => {
            const { params } = arg;
            return {
               url: '/lawyers',
               params,
            };
         },
         transformResponse: (response: LawyersResponseType) => ({
            lawyers: response._embedded.lawyers,
         }),
      }),
      addCertificate: builder.mutation({
         query: token => {
            return {
               url: '/add-certificate/' + token,
               method: 'POST',
            };
         },
      }),
      

      

      search: builder.query({
         query: ({ expertiseId, searchKeyword }) => {
            return {
               url: `/expertises/${expertiseId}/items?q_name=${searchKeyword}&sortBy=name`,
            };
         },
      }),
   }),
});

export const extendedApi = backendServerApi.injectEndpoints({
   endpoints: builder => ({
      downloadExpertiseFile: builder.mutation({
         query: (arg: {
            expertiseId: string;
            itemId: string;
            itemName: string;
         }) => {
            const { expertiseId, itemId, itemName } = arg;
            return {
               url: `/expertises/${expertiseId}/items/${itemId}/download`,
               method: 'GET',
               responseHandler: async response => {
                  if (response.status !== 200) {
                     throw new Error(
                        getErrorDetails(response.status)?.MESSAGE ||
                           'Error in downloadExpertiseFile',
                     );
                  }
                  const link = document.createElement('a');
                  const url = window.URL || window.webkitURL;
                  const hrefLink = url.createObjectURL(await response.blob());
                  link.href = hrefLink;
                  link.download = itemName;
                  link.click();
                  return { data: null };
               },
            };
         },
      }),

   
   }),
   overrideExisting: false,
});

export const {
   useDownloadExpertiseFileMutation,
} = extendedApi;

export const {
   useGetLawyersQuery,
   useGetProfileQuery,
   useAddCertificateMutation,
   useSearchQuery,
} = backendServerApi;

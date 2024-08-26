import { expertisesListEndpoint, getFullUrl } from '../mocks/index';
import { mockExpertisesResponse, mockUserProfileResponse } from '@test/mocks';
import { http, HttpResponse, delay } from 'msw';

const handlers = [
   http.get(expertisesListEndpoint, async () => {
      await delay(500);
      return HttpResponse.json(mockExpertisesResponse, {
         status: 200,
      });
   }),
   http.get(getFullUrl('/me'), async () => {
      await delay(500);
      return HttpResponse.json(mockUserProfileResponse, {
         status: 200,
      });
   }),
];

export { handlers };

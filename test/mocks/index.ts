import { mockExpertisesResponse } from './expertises.mock';
import { mockUserProfileResponse } from './userProfile.mock';

import { BACKEND_ENDPOINT } from '@config/env';
import { buildUrlQuery } from '@utils/index';

const getExpertisesCriteria = {
   sortBy: 'name',
   status: ['COMPLETING', 'IN_PROGRESS', 'TAXATION_COMPLEMENT'],
};

const expertisesListPath = `/expertises?${buildUrlQuery(
   getExpertisesCriteria,
)}`;
export const getFullUrl = (endpoint: string) => BACKEND_ENDPOINT + endpoint;
export const expertisesListEndpoint = getFullUrl(expertisesListPath);

export { mockExpertisesResponse, mockUserProfileResponse };

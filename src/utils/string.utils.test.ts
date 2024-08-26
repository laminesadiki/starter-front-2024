import {
   buildUrlQuery,
   getLastCharacters,
   toBearerToken,
} from './string.utils';
import { describe, it, expect } from 'vitest';

describe('String Utils', () => {
   describe('buildUrlQuery', () => {
      it('should return a valid query string', () => {
         const getExpertisesCriteria = {
            sortBy: 'name',
            status: ['COMPLETING', 'IN_PROGRESS', 'TAXATION_COMPLEMENT'],
         };

         expect(buildUrlQuery(getExpertisesCriteria)).toBe(
            'sortBy=name&status=COMPLETING,IN_PROGRESS,TAXATION_COMPLEMENT',
         );
      });
   });

   describe('toBearerToken', () => {
      it('should return a valid bearer token', () => {
         const token = 'eoireotirlkfs';
         expect(toBearerToken(token)).toBe(`Bearer ${token}`);
      });
      it('should return only Bearer if is empty', () => {
         expect(toBearerToken('')).toBe('Bearer ');
      });
   });

   describe('getLastCharacters', () => {
      it('should last Characters of a string', () => {
         expect(getLastCharacters('azertyuiup', 5)).toBe('yuiup');
         expect(getLastCharacters('abc', 5)).toBe('abc');
         expect(getLastCharacters('', 5)).toBe('');
      });
   });
});

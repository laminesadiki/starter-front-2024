import { Colors } from '@styles/colors.style';
import { ButtonTypeEnum, getStyleByType } from './buttons';
import { describe, it, expect } from 'vitest';

describe('getStyleByType', () => {
   it('returns correct styles for PRIMARY button type', () => {
      const primaryStyles = getStyleByType(ButtonTypeEnum.PRIMARY);
      expect(primaryStyles).toEqual({
         color: Colors.$white,
         backgroundColor: Colors.$primary,
         '&:hover': {
            backgroundColor: Colors.$primary_darker,
         },
      });
   });

   it('returns correct styles for SECONDARY button type', () => {
      const secondaryStyles = getStyleByType(ButtonTypeEnum.SECONDARY);
      expect(secondaryStyles).toEqual({
         color: Colors.$black,
         backgroundColor: Colors.$gray_300,
         '&:hover': {
            backgroundColor: Colors.$gray_500,
         },
      });
   });
   it('returns correct styles for Success button type', () => {
      const secondaryStyles = getStyleByType(ButtonTypeEnum.SUCCESS);
      expect(secondaryStyles).toEqual({
         color: Colors.$white,
         backgroundColor: Colors.$success,
         '&:hover': {
            backgroundColor: Colors.$success_darker,
         },
      });
   });
   it('returns correct styles for warning button type', () => {
      const secondaryStyles = getStyleByType(ButtonTypeEnum.WARNING);
      expect(secondaryStyles).toEqual({
         color: Colors.$white,
         backgroundColor: Colors.$warning,
         '&:hover': {
            backgroundColor: Colors.$warning_darker,
         },
      });
   });

   it('returns an empty object for unsupported button types', () => {
      const unsupportedStyles = getStyleByType(
         'UNSUPPORTED_TYPE' as ButtonTypeEnum,
      );
      expect(unsupportedStyles).toEqual({});
   });
});

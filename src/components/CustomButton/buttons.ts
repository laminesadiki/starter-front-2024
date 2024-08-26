import { ButtonProps } from '@mui/material';
import { Colors } from '@styles/colors.style';
import { CSSProperties } from 'react';

export enum ButtonTypeEnum {
   PRIMARY = 'PRIMARY',
   SECONDARY = 'SECONDARY',
   SUCCESS = 'SUCCESS',
   WARNING = 'WARNING',
   TERTIARY_BLUE = 'TERTIARY_BLUE',
   TERTIARY_GREY = 'TERTIARY_GREY',
   DANGER = 'DANGER',
   TERTIARY_DANGER = 'TERTIARY_DANGER',
}

export type ButtonType = keyof typeof ButtonTypeEnum;

export type CustomButtonProps = {
   btnType?: ButtonType;
} & ButtonProps;

export const getStyleByType = (type?: ButtonType) => {
   switch (type) {
      case ButtonTypeEnum.PRIMARY:
         return {
            color: Colors.$white,
            backgroundColor: Colors.$primary,
            '&:hover': {
               backgroundColor: Colors.$primary_darker,
            },
         };
      case ButtonTypeEnum.SECONDARY:
         return {
            color: Colors.$black,
            backgroundColor: Colors.$gray_300,
            '&:hover': {
               backgroundColor: Colors.$gray_400,
            },
         };
      case ButtonTypeEnum.SUCCESS:
         return {
            color: Colors.$white,
            backgroundColor: Colors.$success,
            '&:hover': {
               backgroundColor: Colors.$success_darker,
            },
         };

      case ButtonTypeEnum.WARNING:
         return {
            color: Colors.$white,
            backgroundColor: Colors.$warning,
            '&:hover': {
               backgroundColor: Colors.$warning_darker,
            },
         };

      default:
         return {} as CSSProperties;
   }
};

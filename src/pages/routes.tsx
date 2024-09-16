import { Home, Blog } from '@pages/index';
import React from 'react';
import { UrlPathsEnum } from '@shared/enums/paths.enum';

export type RouteType = {
   path: string;
   Page: React.FC;
};

export const ROUTES: RouteType[] = [
   {
      path: UrlPathsEnum.HOME,
      Page: Home,
   },
   {
      path: UrlPathsEnum.BLOG,
      Page: Blog,
   },
];

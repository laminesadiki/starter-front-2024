import { AppStore, RootState } from '@redux/store';
import { PreloadedState } from '@reduxjs/toolkit';
import { RenderOptions } from '@testing-library/react';

export interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
   preloadedState?: PreloadedState<RootState>;
   store?: AppStore;
}

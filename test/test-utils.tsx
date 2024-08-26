import { render } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '@redux/store';
import { setupListeners } from '@reduxjs/toolkit/query';
import { ExtendedRenderOptions } from '@shared/interfaces/test-utils.interface';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store. For
// future dependencies, such as wanting to test with react-router, you can extend
// this interface to accept a path and route and use those in a <MemoryRouter />

function renderWithProviders(
   ui: React.ReactElement,
   {
      preloadedState = {},
      store = setupStore(preloadedState),
      ...renderOptions
   }: ExtendedRenderOptions = {},
) {
   setupListeners(store.dispatch);
   // eslint-disable-next-line @typescript-eslint/ban-types
   function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
      return <Provider store={store}>{children}</Provider>;
   }
   return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export { renderWithProviders };

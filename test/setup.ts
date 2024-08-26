import { afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import '@src/i18n';
import { server } from './server';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
   cleanup();
});

// Enable the API mocking before tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable the API mocking after the tests finished.
afterAll(() => server.close());
